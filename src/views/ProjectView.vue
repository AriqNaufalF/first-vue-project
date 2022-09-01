<script setup>
import AOS from 'aos';
import Card from '@/components/Card.vue';
import { onMounted } from 'vue';
onMounted(() => {
  AOS.init();
});
</script>

<template>
  <main>
    <section>
      <h2 class="mb-12 text-3xl font-bold md:text-4xl" data-aos="fade-right">
        Some of the work I've done over the past year
      </h2>
      <!-- kumbah -->
      <Card
        link="https://kumbah-web.herokuapp.com"
        data-aos="flip-right"
        data-aos-delay="350"
      >
        <template #img>
          <img src="/img/kumbah.jpeg" alt="Kumbah web app" />
        </template>
        <template #title>Kumbah</template>
        Kumbah is an online laundry marketplace, kumbah brings together laundry
        service providers with customers. This project was made for one of the
        courses on campus using laravel and bootstrap.
      </Card>
      <!-- ariq blog -->
      <Card
        link="https://ariq-blog.herokuapp.com"
        data-aos="flip-right"
        data-aos-delay="400"
      >
        <template #img>
          <img src="/img/ariq-blog.jpeg" alt="Ariq blog website" />
        </template>
        <template #title>Ariq Blog</template>
        This project was created to learn laravel framework, with learning
        resources from Web Programming UNPAS. It's a simple Blog post with
        authorization as admin and author.
      </Card>
    </section>
    <section>
      <!-- html docs -->
      <Card
        link="https://ariqnaufalf.github.io/FCC-Technical-Documentation"
        data-aos="flip-right"
        data-aos-delay="450"
      >
        <template #img>
          <img
            src="/img/technical-docs.jpeg"
            alt="A simple HTML technical documentaion page"
          />
        </template>
        <template #title>HTML Technical Documentation</template>
        Some simple HTML documentation made with pure HTML and CSS without
        JavaScript. Originally it was made to complete freeCodeCamp - responsive
        web design challenge.
      </Card>
      <!-- survey form -->
      <Card
        link="https://ariqnaufalf.github.io/FCC-survey-form"
        data-aos="flip-right"
        data-aos-delay="500"
      >
        <template #img>
          <img
            src="/img/survey-form.jpeg"
            alt="HTML & CSS Survey form website"
          />
        </template>
        <template #title>HTML & CSS Survey Form</template>
        Survey form made using HTML and CSS only to complete freeCodeCamp -
        responsive web design challenge.
      </Card>
    </section>
  </main>
</template>

<style scoped>
main {
  @apply mt-5 grid place-content-center justify-items-center px-5 text-white md:grid-cols-2 md:gap-2;
}

section {
  @apply max-w-xl px-2 md:p-8;
}
</style>
