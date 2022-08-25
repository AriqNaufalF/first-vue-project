<script setup>
const props = defineProps({
  modelValue: String,
  id: String,
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
    <textarea
      class="form-input h-[170px]"
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
    ></textarea>
  </div>
</template>
