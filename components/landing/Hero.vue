<template>
  <section class="hero-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-10 col-lg-8">
          <h1 class="display-3">
            Delightful Active Monitoring<br />for Developers
          </h1>
          <p class="lead">
            Checkly is the API & E2E monitoring platform for the modern stack:
            programmable, flexible and loving JavaScript.
          </p>
          <div>
            <a
              class="signup-button btn btn-success btn-lg"
              data-signup="data-signup"
              href="https://app.checklyhq.com/signup"
              rel="noopener"
            >
              Start for free
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <img
            class="hero-image big-drop-shadow img-fluid"
            src="/images/landing/home-hero-screenshot@2x.webp"
            alt="checkly monitoring dashboard"
            loading="eager"
            width="1100"
            height="800"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="scss">
.hero-section {
  content-visibility: visible;
}
</style>
