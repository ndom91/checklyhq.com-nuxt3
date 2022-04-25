<template>
  <section class="site-monitoring-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-10 col-lg-5">
          <div class="text-side text-left">
            <h2 class="section-super-header">synthetic monitoring</h2>
            <h3 class="section-header">Monitor crucial flows fast</h3>
            <p class="lead-text">
              Monitor and validate your crucial site transactions. Take
              screenshots and get instant insights into what's working and
              what's not.
              <br /><br />
              Coding browser click-flows used to be hard. Not anymore. Use
              modern open source frameworks like Playwright and Puppeteer to
              automate your flows. Run your checks in 20 locations worldwide.
            </p>
            <NuxtLink
              class="cta-link"
              to="/product/synthetic-monitoring/"
              aria-label="Synthetic Monitoring Link"
            >
              Learn more
            </NuxtLink>
          </div>
        </div>
        <div class="col-sm-12 col-lg-7">
          <div class="image-side right">
            <nuxt-picture
              class="big-landing-image big-drop-shadow code fade-in lazy"
              src="/images/landing/browser-check-1-section-screenshot@2x.webp"
              alt="checkly browser check"
              fit="inside"
              width="600"
            />
            <nuxt-picture
              class="big-landing-image big-drop-shadow screenshots fade-in lazy"
              src="/images/landing/browser-check-2-section-screenshot@2x.webp"
              alt="checkly browser screenshots"
              fit="inside"
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
  name: 'SiteMonitoring',
}
</script>

<style lang="scss">
.site-monitoring-section {
  content-visibility: auto;
  contain-intrinsic-size: 600px;
}
</style>
