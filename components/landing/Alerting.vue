<template>
  <section class="alerting-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8">
          <h2 class="section-super-header">Alerting</h2>
          <nuxt-picture
            class="alerting-top-image"
            src="/images/landing/alerting-options@2x.webp"
            alt="checkly alerting options"
            width="750"
            height="45"
          />
          <h3 class="display-4">Alerting when and how you want it</h3>
          <p class="lead">
            Keep your team up to date with a generous helping of SMS messages
            and unlimited email, Pagerduty, Opsgenie, Slack and webhook
            notifications. Control exactly how, when and how often you get
            alerted. "Double checking" is enabled by default to never get false
            positives.
          </p>
          <NuxtLink class="cta-link" to="/docs/alerting">Learn more</NuxtLink>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <nuxt-picture
            class="alerting-image big-drop-shadow img-fluid"
            src="/images/landing/alert-settings@2x.webp"
            alt="checkly alerting settings"
            fit="inside"
            width="900"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Alerting',
}
</script>

<style lang="scss">
.alerting-section {
  content-visibility: auto;
  contain-intrinsic-size: 900px;
}
</style>
