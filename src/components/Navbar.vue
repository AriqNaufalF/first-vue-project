<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import useScreenWidth from '@/composables/useScreenWidth';

let openNav = ref(false);
const { value: size } = useScreenWidth();

const handleClick = computed(() => ({
  open() {
    openNav.value = true;
  },
  close() {
    openNav.value = false;
  },
}));
</script>

<template>
  <nav class="navbar">
    <!-- <a href="/">
      <h1>ariqnaufalf</h1>
    </a> -->
    <div class="relative">
      <button
        type="button"
        aria-label="page menu"
        @click="handleClick.open"
        :class="{
          'burger-active': openNav,
        }"
        v-show="!size.md()"
      >
        <span class="burger-line origin-top-left"></span>
        <span class="burger-line"></span>
        <span class="burger-line origin-bottom-left"></span>
      </button>
      <Transition
        enter-from-class="opacity-0 -translate-x-1/2"
        enter-to-class="opacity-100 translate-x-0"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-1/2"
      >
        <div
          @click="handleClick.close"
          v-show="openNav || size.md()"
          class="fixed inset-0 md:static"
        >
          <div class="nav-link">
            <div
              class="flex flex-col space-y-2 divide-y md:flex-row md:space-y-0 md:space-x-4 md:divide-y-0"
            >
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/projects">Projects</RouterLink>
            </div>
            <div class="ml-auto">
              <RouterLink to="/contact">Contact</RouterLink>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  @apply sticky top-0 left-0 right-0 z-50 grid h-16 items-center bg-primary/70 px-8 text-white;
}

h1 {
  @apply text-lg font-semibold md:text-xl lg:text-2xl;
}

/* Burger button */
.burger-line {
  @apply my-2 block h-[2px] w-[30px] bg-white transition-transform;
}

.burger-active > span:first-child {
  @apply rotate-45;
}

.burger-active > span:nth-child(2) {
  @apply scale-0;
}

.burger-active > span:last-child {
  @apply -rotate-45;
}

/* Nav link */
.nav-link {
  @apply absolute top-14 left-10 block space-y-2 divide-y rounded-md bg-white px-6 py-3 text-center shadow-md
  md:static md:flex md:justify-between md:space-y-0 md:space-x-4 md:divide-y-0 md:bg-transparent md:p-0 md:shadow-none;
}

.nav-link a {
  @apply block py-1 px-2 text-lg text-dark transition-transform hover:-translate-y-1 hover:scale-105 md:text-white;
}

a.router-link-exact-active {
  @apply hover:translate-y-1 hover:scale-100 md:relative md:translate-y-1;
}

a.router-link-exact-active::before {
  content: '';
  @apply absolute bottom-0 left-1/2 hidden h-1 w-4 -translate-x-1/2 animate-slide-left rounded-full bg-secondary md:block;
}
</style>