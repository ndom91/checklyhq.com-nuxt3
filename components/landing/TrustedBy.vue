<template>
  <section class="trusted-by-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-10 offset-lg-1">
          <p class="section-super-header mb-3">
            Trusted by engineering teams at
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <nuxt-picture
            class="trusted-by-image"
            src="/images/landing/testimonial-logos@2x.webp"
            alt="trusted by companies for api and synthetic monitoring"
            width="1100"
            height="53.5"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrustedBy',
}
</script>

<style lang="scss">
.trusted-by-section {
  content-visibility: visible;
}
</style>
