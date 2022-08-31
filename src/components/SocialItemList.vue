<script setup>
import IconLink from '@/components/Iconlink.vue';

import IconLinkedIn from './icons/IconLinkedIn.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconGithub from './icons/IconGithub.vue';
</script>

<template>
  <div class="flex divide-x">
    <IconLink web="https://www.instagram.com/ariqn.fadh">
      <IconInstagram class="icon-size" />
    </IconLink>
    <IconLink
      web="https://www.linkedin.com/in/ariq-naufal-fadhlurrahman-4558a31b8/"
    >
      <IconLinkedIn class="icon-size" />
    </IconLink>
    <IconLink web="https://www.github.com/AriqNaufalF">
      <IconGithub class="icon-size" />
    </IconLink>
  </div>
</template>
