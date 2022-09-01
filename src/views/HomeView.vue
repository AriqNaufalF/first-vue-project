<script setup>
import AOS from 'aos';
import SocialItemList from '@/components/SocialItemList.vue';
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
onMounted(() => {
  AOS.init();
});
</script>

<template>
  <main>
    <!-- greeting section -->
    <section
      class="mt-16 w-full md:place-self-center lg:col-span-2 lg:col-start-2 lg:m-0"
      data-aos="fade-down"
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
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <img
        src="/svg/work.svg"
        alt="A person working in front of computer"
        class="mx-auto w-72 max-w-sm lg:mx-0 lg:w-full"
      />
    </section>
    <!-- description section -->
    <section
      class="mt-5 mb-20 md:col-span-2 md:place-self-start md:text-xl lg:col-start-2 lg:row-start-2 lg:m-0 lg:text-base"
      data-aos="fade-up"
      data-aos-delay="250"
      data-aos-duration="500"
    >
      <p>
        Indonesia is where I'm from for the past few years, My journey as a
        programmer started when I graduated from high school. I've honed my
        skills in web programming, more recently mobile programming.
      </p>
      <p>
        I'm currently in my second year at Telkom University majoring in
        software engineering
      </p>
      <p>
        Have an interesting project?
        <RouterLink to="/contact" class="text-secondary">Let's talk</RouterLink>
      </p>
      <div class="mt-8">
        <SocialItemList />
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  @apply mx-auto grid max-w-7xl grid-cols-1 items-center px-5 text-white
  md:auto-cols-min md:auto-rows-min md:place-content-center
  lg:auto-rows-auto lg:grid-cols-3 lg:justify-items-start;
}

p {
  @apply mb-3;
}
</style>
