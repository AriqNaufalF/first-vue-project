<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <div class="gradient min-h-screen overflow-hidden">
    <Navbar></Navbar>
    <RouterView
      v-slot="{ Component }"
      class="min-h-[calc(100vh-theme(space.16))]"
    >
      <Transition
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        enter-active-class="transition-all duration-200 ease-out"
        leave-active-class="transition-all duration-200 ease-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>
