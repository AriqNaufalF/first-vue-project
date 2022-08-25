<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <div class="gradient min-h-screen">
    <Navbar></Navbar>
    <RouterView
      v-slot="{ Component }"
      class="min-h-[calc(100vh-theme(space.16))]"
    >
      <Transition
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="transition-opacity duration-200"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
