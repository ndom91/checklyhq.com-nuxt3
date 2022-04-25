<template>
  <section class="results-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8">
          <h2 class="section-super-header">Stats & metrics</h2>
          <h3 class="display-4">Insights without limits</h3>
          <p class="lead">
            Doing a root cause without complete and accurate data is insane. But
            too much detail can also be distracting. That's why next to
            calculating aggregates to keep an overview, Checkly stores each and
            every raw result for you and your team to dive into.
          </p>
          <NuxtLink class="cta-link" to="/docs/">Learn more</NuxtLink>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <nuxt-picture
            class="results-image img-fluid"
            src="/images/landing/check-results@2x.webp"
            alt="checkly check results"
            width="900"
            height="700"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Results',
}
</script>

<style lang="scss">
.results-section {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
</style>
