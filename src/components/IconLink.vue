<script setup>
defineProps({
  web: String,
});
</script>

<template>
  <a :href="web" target="_blank">
    <span class="text-white">
      <slot></slot>
    </span>
    <slot name="text"></slot>
  </a>
</template>

<style>
.icon-size {
  @apply mx-3 h-6 w-6;
}
</style>
