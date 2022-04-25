<template>
  <div class="row pt-4 pb-5">
    <div class="col-sm-4 text-left d-flex">
      <div class="feature-row-item-wrapper my-auto">
        <h3 class="section-header mt-0 pb-0">
          {{ header }}
        </h3>
        <p><slot /></p>
      </div>
    </div>
    <div class="col-sm-8 text-right">
      <nuxt-img
        class="img-w720 big-drop-shadow rounded"
        :src="img"
        :alt="header"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlternativeFeature',
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
  },
}
</script>
