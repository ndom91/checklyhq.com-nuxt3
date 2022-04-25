<template>
  <NuxtLink class="cta-link" :to="link">
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  name: 'CtaLink',
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
    link: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
