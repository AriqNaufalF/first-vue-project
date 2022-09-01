<script setup>
defineProps({
  link: String,
});
</script>

<template>
  <a :href="link" target="_blank" class="card group">
    <slot name="img">
      <div class="h-40 w-full bg-gray-500 text-white">Insert image</div>
    </slot>
    <div class="card-body">
      <h4 class="card-title"><slot name="title">Card title</slot></h4>
      <p class="card-text">
        <slot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non
          nobis dolorem quasi placeat? Architecto repudiandae numquam nulla,
          animi, perspiciatis saepe reiciendis non delectus dolorem pariatur
          excepturi nobis, dignissimos a.
        </slot>
      </p>
    </div>
    <div class="card-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
        class="m-0"
      >
        <path
          fill-rule="evenodd"
          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
        />
        <path
          fill-rule="evenodd"
          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
        />
      </svg>
    </div>
  </a>
</template>

<style>
.card {
  @apply relative mb-5 block overflow-hidden bg-white text-black shadow-md transition-all duration-300 hover:scale-95;
}

.card-body {
  @apply mt-10 px-6 pb-12;
}

.card-title {
  @apply text-2xl font-semibold transition-all duration-500 group-hover:translate-x-2 group-hover:text-secondary;
}

.card-icon {
  @apply absolute bottom-0 right-0 translate-x-full translate-y-full bg-secondary p-3 text-white transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0;
}
</style>
