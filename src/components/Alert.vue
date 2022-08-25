<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  type: String,
});
</script>

<template>
  <Transition
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    enter-active-class="transition-transform duration-700"
    leave-active-class="transition-transform duration-700"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="show"
      class="fixed right-0 top-28 z-20 w-52 md:top-[calc(theme(space.10)+theme(space.16))] md:w-72"
    >
      <div
        class="mb-2 flex items-center border-l-4 py-2 px-3 shadow-md"
        :class="{
          'border-emerald-700 bg-emerald-500': type === 'success',
          'border-red-700 bg-red-500': type === 'danger',
        }"
      >
        <div
          class="mr-3 text-white"
          :class="{
            'bg-emerald-500': type === 'success',
            'bg-red-500': type === 'danger',
          }"
        >
          <svg
            v-show="type === 'success'"
            class="m-0"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
          </svg>
          <svg
            v-show="type === 'danger'"
            class="m-0"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
            />
          </svg>
        </div>
        <h2 class="max-w-xs text-white"><slot>Form submited</slot></h2>
      </div>
    </div>
  </Transition>
</template>
