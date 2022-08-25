<script setup>
import useScreenWidth from '@/composables/useScreenWidth.js';
const { value: size } = useScreenWidth();
</script>
<template>
  <main class="flex flex-wrap px-5 py-10 text-white">
    <div class="space-y-4 md:w-1/2">
      <h1 class="text-4xl font-bold tracking-wider md:text-5xl">
        Lorem ipsum dolor sit amet.
      </h1>
      <p>I'm Ariq Naufal Fadhlurrahman, but you can just call me Ariq.</p>
      <p>
        Indonesia is where I'm from for the past few years, I've honed my skills
        in web programming, more recently mobile programming.
      </p>
      <p>
        I'm currently in my second year at Telkom University majoring in
        software engineering
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima a eaque
        praesentium, quia itaque modi velit eum facere ea fugiat provident,
        magni rem natus. Commodi consequatur reiciendis alias exercitationem
        beatae.
      </p>
      <p>
        Have an interesting project?
        <RouterLink to="/contact" class="text-secondary">Let's talk</RouterLink>
      </p>
    </div>
    <div v-if="size.md()" class="max-w-lg self-start md:w-1/2">
      <img src="/svg/Personal.svg" alt="Personal illustration" />
    </div>
  </main>
</template>

<style scoped>
p {
  @apply text-base md:text-lg;
}
</style>
