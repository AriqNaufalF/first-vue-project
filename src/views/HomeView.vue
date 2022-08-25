<script setup>
import TechItemList from '@/components/TechItemList.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <!-- greeting section -->
    <section
      class="mt-16 w-full md:place-self-center lg:col-span-2 lg:col-start-2 lg:m-0"
    >
      <h1
        class="mb-5 text-3xl font-extrabold tracking-wider md:text-4xl lg:text-5xl"
      >
        <span class="block text-xl font-medium tracking-normal md:text-2xl">
          Hello👋, I'm Ariq and I'm a
        </span>
        Student | Programmer
      </h1>
    </section>
    <!-- image section -->
    <section
      class="mt-10 w-full md:place-self-end lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:m-0 lg:place-self-center"
    >
      <img
        src="/svg/work.svg"
        alt="A person working in front of computer"
        class="mx-auto w-72 max-w-sm lg:mx-0 lg:w-full"
      />
    </section>
    <!-- description section -->
    <section
      class="mt-5 mb-20 max-w-5xl space-y-2 md:col-span-2 md:place-self-start md:text-xl lg:col-start-2 lg:row-start-2 lg:m-0 lg:text-base"
    >
      <p>
        My journey as a programmer started when I graduated from high school.
        Currently I am a student at Telkom University majoring in software
        engineering. But my focus is on web development.
      </p>
      <p>Here is some of the tech I learn thorughly</p>
      <TechItemList />
      <div class="group flex max-w-fit gap-1 pt-6">
        <RouterLink to="/about" class="group-hover:underline"
          >Know me more</RouterLink
        >
        <span
          class="block transition-transform group-hover:translate-x-3 group-hover:tracking-widest"
        >
          >>
        </span>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  @apply grid grid-cols-1 items-center px-5 text-white
  md:auto-cols-min md:auto-rows-min md:place-content-center
  lg:auto-rows-auto lg:grid-cols-3 lg:justify-items-start;
}
</style>
