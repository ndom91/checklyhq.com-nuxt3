<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 grid-item">
    <h5 class="add-star-before">
      {{ header }}
    </h5>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: 'Sm4ColItem',
  props: {
    header: {
      type: String,
      required: false,
      default: '',
    },
    body: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
