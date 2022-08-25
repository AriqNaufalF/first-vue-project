<script setup>
import IconHTML from '@/components/icons/IconHTML.vue';
import Iconlink from '@/components/Iconlink.vue';
import IconCSS from '@/components/icons/IconCSS.vue';
import IconJavaScript from '@/components/icons/IconJavaScript.vue';
import IconLaravel from '@/components/icons/IconLaravel.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconVue from '@/components/icons/IconVue.vue';
</script>

<template>
  <div class="flex divide-x">
    <Iconlink web="https://developer.mozilla.org/en-US/docs/Web/HTML">
      <IconHTML />
    </Iconlink>
    <Iconlink web="https://developer.mozilla.org/en-US/docs/Web/CSS">
      <IconCSS />
    </Iconlink>
    <Iconlink web="https://developer.mozilla.org/en-US/docs/Web/javascript">
      <IconJavaScript />
    </Iconlink>
    <Iconlink web="https://tailwindcss.com">
      <IconTailwind />
    </Iconlink>
    <Iconlink web="https://vuejs.org">
      <IconVue />
    </Iconlink>
    <Iconlink web="https://laravel.com">
      <IconLaravel />
    </Iconlink>
  </div>
</template>
