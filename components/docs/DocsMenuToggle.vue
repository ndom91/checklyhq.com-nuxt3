<template>
  <div>
    <a class="docs-menu-title" :class="open && 'active'" @click="toggle">
      <img
        :src="'/docs/images/icons/' + category[0].icon + '@2x.png'"
        width="26"
        height="26"
        :alt="index"
      />
      {{ index }}
    </a>
    <ul class="docs-menu-sub collapse" :class="open && 'active'">
      <li
        v-for="subcat of categorySorted.sort((a, b) => a.weight - b.weight)"
        :key="subcat.path"
        class="docs-menu-sub-item"
      >
        <NuxtLink to="subcat.path">
          {{ subcat.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DocsMenuToggle',
  props: {
    category: {
      type: Array,
      default: () => [],
      required: false,
    },
    index: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      open: false,
      categorySorted: this.category,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>
