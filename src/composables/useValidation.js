import { computed, reactive } from 'vue';

export default function useValidation() {
  let msg = reactive({
    name: '',
    email: '',
    message: '',
  });

  const check = computed(() => ({
    name(name) {
      if (/^\w{3,65}$/.test(name)) {
        if (/[^a-zA-Z]+/.test(name)) {
          msg.name = "Name can't contain numbers and special characters";
        } else {
          msg.name = '';
        }
      } else {
        msg.name = 'Please enter min 3 character and max 65 character';
      }
    },
    email(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        msg.email = '';
      } else {
        msg.email = 'Please enter a valid email address!';
      }
    },
    message(message) {
      if (/(\b\S+.*?){3,}/.test(message)) {
        msg.message = '';
      } else {
        msg.message = 'Please enter min 3 words';
      }
    },
    isError() {
      return Object.keys(msg).filter((key) => msg[key] != '').length > 0;
    },
  }));

  return { check, msg };
}
