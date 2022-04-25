<template>
  <pre>
    <code
      class="language-js"
      v-html="codeContent"
    />
  </pre>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'ReadFile',
  props: {
    filename: {
      type: String,
      required: true,
    },
  },
  computed: {
    codeContent() {
      return this.$static.allSamples.edges
        .find((edge) => edge.node.name.includes(this.filename))
        .node.content.trim()
    },
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss" scoped>
pre {
  color: white;
}
</style>
