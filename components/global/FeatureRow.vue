<template>
  <div class="row feature">
    <div class="col-sm-12 col-md-5 text-left d-flex">
      <div class="feature-row-item-wrapper my-auto">
        <h3 class="section-header mt-0 pb-0">
          {{ header }}
        </h3>
        <p><slot /></p>
      </div>
    </div>
    <div class="col-sm-12 col-md-7 text-right">
      <nuxt-picture
        class="img-w720 big-drop-shadow rounded"
        :format="format"
        :src="img"
        :alt="header"
        sizes="sm:620px"
        fit="inside"
      ></nuxt-picture>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureRow',
  props: {
    header: {
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
  },
}
</script>
