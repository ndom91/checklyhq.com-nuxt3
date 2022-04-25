<template>
  <section class="testimonial-section testimonial-1">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="card testimonial-card mb-5 mb-md-0">
            <div class="card-block first">
              <a href="https://railway.app" target="_blank" rel="noopener">
                <div
                  class="
                    d-flex
                    align-items-center
                    justify-content-start
                    text-dark
                  "
                >
                  <RailwayLogo
                    class="testimonial-logo m-0"
                    alt="railway.app logo"
                    width="40"
                    height="40"
                  />
                  <span>Railway</span>
                </div>
              </a>
              <p class="testimonial-text">
                "We've been using Checkly for the past months. It's been
                phenomenal. Super easy to get setup, works flawlessly and
                intuitively. The team are super receptive & quick to help"
              </p>
              <div class="testimonial-portrait">
                <nuxt-picture
                  src="/images/testimonials/railway_portrait.webp"
                  alt="Jake Cooper"
                  width="55"
                  height="55"
                />
              </div>
              <div class="testimonial-name-badge">
                <div class="text-muted font-weight-bold">Jake Cooper</div>
                <div class="text-muted">Founder / Engineer</div>
                <a
                  class="text-muted"
                  href="https://railway.app/"
                  target="_blank"
                  rel="noopener"
                  >railway.app</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="card testimonial-card mb-5 mb-md-0">
            <div class="card-block second">
              <a
                href="http://1password.com/"
                target="_blank"
                rel="noopener"
                aria-label="1Password Link"
              >
                <OnePasswordLogo
                  class="testimonial-logo"
                  alt="dfuse logo"
                  width="140"
                  height="26"
                />
              </a>
              <p class="testimonial-text">
                "Checkly is a fabulous developer tool! The flexible features and
                developer-friendly API made the integration super easy. Bonus:
                their support is super friendly and knowledgeable!"
              </p>
              <div class="testimonial-portrait">
                <nuxt-picture
                  alt="customer portrait"
                  src="/images/testimonials/conner_hicks.webp"
                  width="55"
                  height="55"
                />
              </div>
              <div class="testimonial-name-badge">
                <div class="text-muted font-weight-bold">Connor Hicks</div>
                <div class="text-muted">Lead Developer</div>
                <a
                  class="text-muted"
                  aria-label="1Password Link"
                  href="https://1password.com/"
                  target="_blank"
                  rel="noopener"
                  >1password.com</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div class="card testimonial-card mb-5 mb-md-0">
            <div class="card-block first">
              <a
                href="https://supplypike.com"
                target="_blank"
                rel="noopener"
                aria-label="Supplypike Link"
              >
                <SupplyPikeLogo
                  class="testimonial-logo"
                  alt="supplypike logo"
                  width="150"
                  height="25"
                />
              </a>
              <p class="testimonial-text">
                "Checkly helps our teams to ship code more confidently and guide
                data-driven decision making. Integrations with tools like
                Prometheus and PagerDuty make the adoption seamless."
              </p>
              <div class="testimonial-portrait">
                <nuxt-picture
                  src="/images/testimonials/supplypike_portrait.webp"
                  alt="Kanat Bekterimov"
                  width="55"
                  height="55"
                />
              </div>
              <div class="testimonial-name-badge">
                <div class="text-muted font-weight-bold">Kanat Bekterimov</div>
                <div class="text-muted">Software Engineer Manager</div>
                <a
                  class="text-muted"
                  href="https://supplypike.com/"
                  target="_blank"
                  rel="noopener"
                  >supplypike.com</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RailwayLogo from '@@/static/images/landing/railway.svg?inline'
import OnePasswordLogo from '@@/static/images/landing/1p-wordmark.svg?inline'
import SupplyPikeLogo from '@@/static/images/landing/supplypike-logo.svg?inline'

export default {
  name: 'TestimonialThreeCol',
  components: { RailwayLogo, OnePasswordLogo, SupplyPikeLogo },
}
</script>

<style lang="scss">
.testimonial-section {
  content-visibility: auto;
  contain-intrinsic-size: 500px;
}
</style>
