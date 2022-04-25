<template>
  <section class="site-monitoring-section gray-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-10 col-lg-5">
          <div class="text-side text-left">
            <h2 class="section-super-header">api monitoring</h2>
            <h3 class="section-header">Monitor all your APIs easily</h3>
            <p class="lead-text">
              Make sure your APIs always responds quickly and with the correct
              payload. Our intuitive editor lets you configure powerful HTTP
              requests.
              <br /><br />
              Kickstart your checks with our Swagger and cURL importer. Add
              Node.js-based setup/teardown scripts and fine-grained assertions
              for in-depth API monitoring.
            </p>
            <NuxtLink
              class="cta-link"
              to="/product/api-monitoring/"
              aria-label="API Monitoring Link"
            >
              Learn more
            </NuxtLink>
          </div>
        </div>
        <div class="col-sm-12 col-lg-7">
          <div class="image-side right">
            <nuxt-picture
              class="big-landing-image big-drop-shadow code fade-in lazy"
              src="/images/landing/api-check-1-section-screenshot@2x.webp"
              alt="checkly assertions edit"
              fit="inside"
              width="600"
            />
            <nuxt-picture
              class="big-landing-image big-drop-shadow screenshots fade-in lazy"
              src="/images/landing/api-check-2-section-screenshot@2x.webp"
              alt="checkly assertions"
              fit="outside"
              width="600"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ApiMonitoring',
}
</script>

<style lang="scss">
.api-monitoring-section {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
</style>
