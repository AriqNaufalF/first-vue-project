<script setup>
const props = defineProps({
  modelValue: String,
  id: String,
  inputType: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
    default: true,
  },
  msg: String,
});
</script>

<template>
  <div>
    <label :for="id"><slot name="label">default label:</slot></label>
    <div v-if="msg">
      <p class="text-secondary">{{ msg }}</p>
    </div>
    <input
      class="form-input"
      :type="inputType"
      :name="id"
      :id="id"
      :value="modelValue"
      :class="{
        'outline outline-2 outline-secondary': msg ?? false,
      }"
      :placeholder="'Enter your ' + id"
      :required="required"
      @blur="$emit('check', form)"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style>
label {
  @apply mb-1 block text-lg;
}

.form-input {
  @apply block w-full rounded-sm py-1 px-2 text-dark shadow-md ring-secondary focus:outline-none focus:ring-2;
}
</style>
