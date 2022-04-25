<template>
  <div class="alert alert-info" v-html="content" />
</template>

<script>
export default {
  name: 'DocsInfo',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>
