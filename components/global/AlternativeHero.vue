<template>
  <section class="alternativeto-hero-section">
    <div class="container">
      <div class="row text-center justify-content-center">
        <div class="col-sm-6 col-md-6">
          <h1 class="display-3 mb-4">
            <slot />
          </h1>
          <div class="mb-4">
            <a
              class="signup-button btn btn-success btn-lg"
              data-signup="data-signup"
              href="https://app.checklyhq.com/signup"
              >Start your free trial</a
            >
          </div>
        </div>
        <div class="col-sm-6 text-center">
          <nuxt-img
            class="alternativeto-hero-image img-fluid"
            src="/alternative/home-dashboard@2x.webp"
            alt="checkly pingdom monitoring dashboard alternative"
          />
        </div>
      </div>
    </div>
    <div class="row" />
  </section>
</template>

<script>
export default {
  name: 'AlternativeHero',
}
</script>
