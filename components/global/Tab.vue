<template lang="html">
  <div v-show="isActive" class="tab">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tab',
    },
  },
  data() {
    return {
      isActive: true,
    }
  },
}
</script>

<style lang="scss">
.tab {
  position: relative;
  padding: 1rem;
  .remark-highlight {
    margin: 1.5rem 0;
  }
}
</style>
