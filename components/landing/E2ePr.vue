<template>
  <section class="e2e-pr-section">
    <div class="container">
      <div class="row justify-content-center header-part">
        <div class="col-sm-12 col-md-8">
          <h2 class="section-super-header">e2e testing</h2>
          <h3 class="section-header">Monitoring 💘 E2E testing</h3>
        </div>
        <div class="col-sm-12 col-md-8">
          <p class="lead">
            Monitoring production is great. But catching bugs before they hit
            production is better. Run your API monitors and synthetic monitoring
            scripts against your staging environment on each
            <code>git push</code>.
          </p>
          <NuxtLink class="cta-link" to="/docs/cicd/" aria-label="CICD Docs"
            >Learn more</NuxtLink
          >
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8 col-lg-4 hidden-md-down">
          <ul class="list-group">
            <li class="list-group-item">
              <span class="h5">
                <span class="ion-settings mr-2" />
                Setup
              </span>
              <p>
                Create your API checks and script your browser click flows using
                the UI or API.
              </p>
            </li>
            <li class="list-group-item">
              <span class="h5">
                <span class="ion-pull-request mr-2" />
                Integrate
              </span>
              <p>
                Install our GitHub App in your repo. We'll start listening to
                each deploy event.
              </p>
            </li>
            <li class="list-group-item">
              <span class="h5">
                <span class="ion-checkmark-round mr-2" />
                E2E test on each push
              </span>
              <p>
                On each push, get detailed E2E test results, logs and
                screenshots right in your PR.
              </p>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-lg-8">
          <nuxt-picture
            class="pr-image"
            src="/images/landing/e2e-screenshot@2x.webp"
            alt="checkly e2e screenshot"
            width="687"
            height="324"
          />
        </div>
      </div>
      <div class="row justify-content-center text-center">
        <div class="col-sm-12">
          <div
            class="
              d-flex
              flex-row
              align-items-center
              justify-content-center
              pt-4
            "
          >
            Works out-of-the-box with
            <VercelLogo class="mx-1" alt="Vercel logo" width="20" height="20" />
            Vercel and
            <HerokuLogo class="mx-1" alt="Heroku logo" width="20" height="20" />
            Heroku
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HerokuLogo from '@@/static/images/landing/heroku-stroke.svg?inline'
import VercelLogo from '@@/static/images/landing/vercel-dark.svg?inline'

export default {
  name: 'E2ePr',
  components: { HerokuLogo, VercelLogo },
}
</script>

<style lang="scss">
.e2e-pr-section {
  content-visibility: auto;
  contain-intrinsic-size: 1200px;
}
</style>
