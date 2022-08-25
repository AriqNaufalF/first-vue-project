import { computed, onMounted, onUnmounted, ref } from 'vue';

export default function useScreenWiddth() {
  let windowWidth = ref(window.innerWidth);

  function onWidthChange() {
    windowWidth.value = window.innerWidth;
  }

  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));

  const size = computed(() => ({
    lg() {
      return windowWidth.value < 1024 ? false : true;
    },
    md() {
      return windowWidth.value < 768 ? false : true;
    },
    sm() {
      return windowWidth.value < 640 ? false : true;
    },
  }));

  return size;
}
