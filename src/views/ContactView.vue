<script setup>
import IconLink from '../components/IconLink.vue';
import IconInstagram from '../components/icons/IconInstagram.vue';
import IconSpinner from '../components/icons/IconSpinner.vue';
import Alert from '../components/Alert.vue';
import FormInput from '../components/FormInput.vue';
import FormTextarea from '../components/FormTextarea.vue';

import useValidation from '@/composables/useValidation';
import { reactive, ref } from 'vue';

let form = reactive({
  name: '',
  email: '',
  message: '',
});
let alert = reactive({
  show: false,
  type: 'success',
});
let isLoading = ref(false);

const { check, msg } = useValidation(form);

async function handleForm() {
  // google script link
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbyjGzlyDf3XQtSuBHPJfos6-qtgOunFZOrR3YQQ3Q8Z_crgE-F4O0OfDVwLhNEXg6gx5w/exec';

  // append form object to formData
  const getFormData = (object) =>
    Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key]);
      return formData;
    }, new FormData());

  // set isLoading to true
  isLoading.value = true;

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: getFormData(form),
    });
    if (response.ok) {
      console.log('Success', response);
    } else {
      alert.type = 'danger';
    }
  } catch (error) {
    console.error('Error', error.message);
  } finally {
    // Set all form to empty
    form.name = form.email = form.message = '';
    // set hide loading and show alert
    isLoading.value = false;
    alert.show = true;

    // hide alert after 3s
    setTimeout(() => {
      alert.show = false;
    }, 3000);
  }
}
</script>

<template>
  <main class="bg-image-size">
    <Teleport to="body">
      <Alert :show="alert.show" :type="alert.type">
        <template v-if="alert.type === 'danger'"
          >Opss! something went wrong
        </template>
      </Alert>
    </Teleport>
    <section class="w-full space-y-5 md:w-1/2">
      <!-- Description -->
      <div>
        <h1 class="text-2xl font-bold tracking-wide md:text-3xl">
          Let's talk.
        </h1>
        <p class="text-lg font-light">
          Get in touch with me via the form below, or find me
        </p>
        <IconLink
          web="https://instagram.com/ariqn.fadh"
          class="flex max-w-min flex-row-reverse items-center justify-end underline underline-offset-2"
        >
          <IconInstagram class="mx-0 ml-1 h-5 w-5" />
          <template #text> @ariqn.fadh </template>
        </IconLink>
      </div>
      <!-- Contact form -->
      <div>
        <form class="space-y-4" @submit.prevent="handleForm">
          <!-- input name -->
          <FormInput
            v-model="form.name"
            id="name"
            :msg="msg.name"
            @check="check.name(form.name)"
          >
            <template #label>Name:</template>
          </FormInput>
          <!-- input email -->
          <FormInput
            v-model="form.email"
            id="email"
            inputType="email"
            :msg="msg.email"
            @check="check.email(form.email)"
          >
            <template #label>Email:</template>
          </FormInput>

          <!-- input message -->
          <FormTextarea
            v-model="form.message"
            id="message"
            :msg="msg.message"
            @check="check.message(form.message)"
          >
            <template #label>Message:</template>
          </FormTextarea>

          <div class="pt-3" v-if="isLoading">
            <!-- Loading btn -->
            <button type="button" class="btn-primary" disabled>
              <IconSpinner />
              Loading...
            </button>
          </div>
          <!-- Submit btn -->
          <div class="pt-3" v-else>
            <button
              type="submit"
              class="btn-primary btn-disabled"
              :disabled="check.isError()"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  @apply container mx-auto flex flex-wrap items-center bg-[url('/svg/Mention.svg')] 
  bg-[right_-6rem_top_10rem] bg-no-repeat py-10 px-5 text-white 
  md:mt-0 md:bg-right md:px-14;
}
</style>
