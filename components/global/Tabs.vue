<template>
  <div class="">
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        :class="{ tabs__selected: index == selectedIndex }"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.selectTab(0)
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i
      })
    },
  },
}
</script>

<style lang="scss">
ul.tabs__header {
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #e0e6ed;
  text-transform: uppercase;
  font-size: 0.8rem;

  & > li {
    margin: 0;
    display: inline-block;
    padding: 0.75em 1.5em;
    cursor: pointer;
  }

  & > li.tabs__selected {
    color: #ff4949;
    border-bottom: 3px solid #ff4949;
  }
}
</style>
