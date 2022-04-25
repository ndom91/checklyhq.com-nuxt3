<template>
  <div>
    <button
      class="pricing__accordion"
      :class="open && 'active'"
      @click="toggle"
    >
      {{ question }}
    </button>
    <div
      class="pricing__accordion--panel"
      :class="open && 'active'"
      v-html="answer"
    />
  </div>
</template>

<script>
export default {
  name: 'FaqToggle',
  props: {
    question: {
      type: String,
      default: '',
    },
    answer: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>
