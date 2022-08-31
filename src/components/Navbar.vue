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
    <div class="flex items-center px-8">
      <button
        type="button"
        aria-label="page menu"
        class="ml-auto"
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
        enter-from-class="opacity-0 translate-x-1/2"
        enter-to-class="opacity-100 translate-x-0"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-1/2"
      >
        <div
          @click="handleClick.close"
          v-show="openNav || size.md()"
          class="fixed inset-0 max-w-7xl md:static md:mx-auto md:w-full"
        >
          <div class="nav-link">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/contact" class="ml-auto">Contact</RouterLink>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  @apply sticky top-0 left-0 right-0 z-50 grid h-16 items-center bg-primary/70 text-white;
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
  @apply absolute top-14 right-10 block divide-y rounded-md bg-white px-6 py-3 text-center shadow-md
  md:static md:flex md:gap-4 md:space-y-0 md:divide-y-0 md:bg-transparent md:p-0 md:shadow-none;
}

.nav-link > a {
  @apply block py-2 px-2 text-lg text-gray-500 transition-transform md:py-1 md:text-gray-300 hover:md:-translate-y-1 hover:md:scale-105 hover:md:text-white;
}

a.router-link-exact-active {
  @apply text-black hover:translate-y-1 hover:scale-100 md:relative md:translate-y-1 md:text-white;
}

a.router-link-exact-active::before {
  content: '';
  @apply absolute bottom-0 left-1/2 hidden h-1 w-4 -translate-x-1/2 animate-slide-left rounded-full bg-secondary md:block;
}
</style>
