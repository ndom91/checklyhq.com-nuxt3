<template>
  <div :class="className">
    <div v-if="img" class="image-wrap">
      <img
        v-if="headerTag === 'h2'"
        :src="img"
        :alt="title"
        width="42"
        height="42"
      />
      <img v-else :src="img" :alt="title" width="32" height="32" />
    </div>
    <div class="text-wrap">
      <h2 v-if="headerTag === 'h2'">
        {{ title }}
      </h2>
      <h3 v-else>
        {{ title }}
      </h3>
      <p>{{ description }}</p>
      <a class="cta-link" :href="link"> Read more </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsCard',
  props: {
    className: {
      type: String,
      default: '',
    },
    headerTag: {
      type: String,
      default: 'h3',
    },
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>
