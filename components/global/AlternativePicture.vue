<template>
  <nuxt-picture
    :class="className"
    :src="img"
    :alt="alt"
    :format="format"
    :sizes="sizes"
    fit="inside"
  />
</template>

<script>
export default {
  name: 'AlternativePicture',
  props: {
    alt: {
      type: String,
      required: false,
      default: '',
    },
    img: {
      type: String,
      required: false,
      default: '',
    },
    format: {
      type: String,
      required: false,
      default: 'webp',
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
    sizes: {
      type: String,
      required: false,
      default: 'sm:700px',
    },
  },
}
</script>
