<template>
  <section class="all-features-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <h2 class="section-header">All features at a glance</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-4">
          <div class="block">
            <div class="h5">API monitoring</div>
            <p>
              Flexible
              <NuxtLink class="info-link" to="/product/api-monitoring/"
                >API monitoring</NuxtLink
              >
              with custom body, headers, query parameters and unlimited
              assertions.
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-4">
          <div class="block second">
            <div class="h5">synthetic monitoring</div>
            <p>
              Scripted browser clicks flow with Chrome using Puppeteer or
              Playwright Node.js frameworks.
              <NuxtLink class="info-link" to="/docs/browser-checks/screenshots/"
                >Take up to ten screenshots</NuxtLink
              >
              per check.
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-4">
          <div class="block third">
            <div class="h5">CI/CD integration</div>
            <p>
              <NuxtLink class="info-link" to="/docs/cicd/triggers/"
                >Trigger your checks</NuxtLink
              >
              on GitHub push & PR's or using a simple cURL command from your
              CI/CD pipeline.
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-4">
          <div class="block">
            <div class="h5">Public dashboards</div>
            <p>
              Display a
              <NuxtLink class="info-link" to="/docs/dashboards/"
                >public dashboard</NuxtLink
              >
              on your site or in-office mounted TV, hosted on your company
              domain.
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-4">
          <div class="block second">
            <div class="h5">Global coverage</div>
            <p>
              Get global latency metrics by running your checks from up to
              twenty data center locations around the world.
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-4">
          <div class="block third">
            <div class="h5">Alerting channels</div>
            <p>
              Generous SMS bundles & unlimited recipients / endpoints for
              Pagerduty, Opsgenie, email, webhooks and Slack alerting
              integrations.
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-4">
          <div class="block">
            <div class="h5">Threshold alerting</div>
            <p>
              Control what
              <NuxtLink class="info-link" to="/docs/alerting/"
                >triggers alerts</NuxtLink
              >
              and set reminders. We always run double checks to combat false
              positives.
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-4">
          <div class="block second">
            <div class="h5">Teams & users</div>
            <p>
              <NuxtLink class="info-link" to="/docs/teams/">
                Add team members to your account to collaborate </NuxtLink
              >. Comes with full role based access control.
            </p>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-4">
          <div class="block third">
            <div class="h5">SSL expiry alerting</div>
            <p>
              We'll alert you when your SSL certificate is about to expire up to
              30 days in advance till D-day.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AllFeatures',
}
</script>

<style lang="scss">
.all-features-section {
  content-visibility: auto;
  contain-intrinsic-size: 800px;
}
</style>
