<template>
  <div class="main">
    <div class="pricing">
      <div class="container">
        <!-- HEADER-->

        <div
          class="pricing__hero d-flex flex-column align-items-center text-center"
        >
          <h1 class="display-3">Free for developers. Grow as you go.</h1>
          <div class="pricing__lead">
            Checkly is the active monitoring platform for developers: Deep API
            monitoring, open-source powered E2E checks, dashboards and flexible
            alerting.
          </div>
        </div>

        <!-- CARDS --->

        <div class="pricing__plans">
          <!-- FREE CARD -->
          <div class="pricing__card pricing__card--gray mr-4">
            <div class="pricing__love-devs">
              <LoveDevs alt="Checkly" />
            </div>
            <h4 class="mb-5">Free</h4>
            <div class="pricing__fancy-price mb-5 justify-content-center">
              <div class="pricing__fancy-price__dollar-sign">$</div>
              <div class="pricing__fancy-price__price--big">0</div>
              <div class="pricing__fancy-price__interval">/ forever</div>
            </div>
            <div class="pricing__list mb-4">
              <ul>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  50k API check runs&nbsp;<span class="small"> / mo</span>
                </li>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  5k browser check runs&nbsp;<span class="small"> / mo</span>
                </li>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  5 users, basic features
                </li>
              </ul>
            </div>
            <a
              class="btn btn-success pricing__card-right__btn"
              href="https://app.checklyhq.com/signup"
              rel="noopener"
              >Start for free</a
            >
          </div>

          <!-- PAID CARDS -->
          <div class="pricing__card pricing__card--gray">
            <h4 class="mb-5">Pay as you go</h4>
            <div class="d-flex flex-row justify-content-between w-100 mb-5">
              <div class="d-flex flex-column">
                <div class="pricing__fancy-price justify-content-center">
                  <div class="pricing__fancy-price__dollar-sign">$</div>
                  <div class="pricing__fancy-price__price">1.20</div>
                </div>
                <div class="text-muted small">for 10k API check runs</div>
              </div>
              <div class="d-flex flex-column">
                <div class="pricing__fancy-price justify-content-center">
                  <div class="pricing__fancy-price__dollar-sign">$</div>
                  <div class="pricing__fancy-price__price">3.60</div>
                </div>
                <div class="text-muted small">for 1k browser check runs</div>
              </div>
            </div>
            <div class="pricing__list mb-lg-5">
              <ul class="pt-1">
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  Pay only for what you use
                </li>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  No commitment upfront
                </li>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  Unlimited users, all features
                </li>
              </ul>
            </div>
            <a
              class="btn btn-success pricing__card-right__btn"
              href="https://app.checklyhq.com/signup"
              rel="noopener"
              >Start for free</a
            >
          </div>
          <div class="pricing__plans--label">
            All plans start with 14 days free trial and full feature access.
          </div>
          <div class="pricing__plans--toggle" @click="toggleDiscount">
            <span>
              <PinkDrop
                class="pricing__plans--toggle-arrow"
                :style="discountOpen && 'transform: rotate(180deg)'"
              />
            </span>
            <span class="ml-1 mr-1">Get a discount for your commitment.</span>
            <span>
              <PinkDrop
                class="pricing__plans--toggle-arrow"
                :style="discountOpen && 'transform: rotate(180deg)'"
              />
            </span>
          </div>
          <div
            id="pricing__plans--toggle-card"
            class="pricing__card--light"
            :class="!discountOpen && 'pricing__card--hidden'"
          >
            <div class="d-flex flex-row justify-content-between">
              <div class="pricing">
                <div class="pricing__wrap">
                  <h4>Monthly</h4>
                  <div class="mr-4">
                    <div class="pricing__fancy-price justify-content-center">
                      <div class="pricing__fancy-price__dollar-sign">$</div>
                      <div class="pricing__fancy-price__price">1.00</div>
                    </div>
                    <div class="text-muted small">for 10k API check runs</div>
                  </div>
                  <div>
                    <div class="pricing__fancy-price justify-content-center">
                      <div class="pricing__fancy-price__dollar-sign">$</div>
                      <div class="pricing__fancy-price__price">3.00</div>
                    </div>
                    <div class="text-muted small">
                      for 1k Browser check runs
                    </div>
                  </div>
                </div>
                <div class="pricing__wrap-divider" />
                <div class="pricing__wrap">
                  <h4>Annual</h4>
                  <div class="mr-4">
                    <div class="pricing__fancy-price justify-content-center">
                      <div class="pricing__fancy-price__dollar-sign">$</div>
                      <div class="pricing__fancy-price__price">0.80</div>
                    </div>
                    <div class="text-muted small">for 10k API check runs</div>
                  </div>
                  <div>
                    <div class="pricing__fancy-price justify-content-center">
                      <div class="pricing__fancy-price__dollar-sign">$</div>
                      <div class="pricing__fancy-price__price">2.40</div>
                    </div>
                    <div class="text-muted small">
                      for 1k Browser check runs
                    </div>
                  </div>
                </div>
              </div>
              <div class="pricing__list">
                <ul class="pt-1">
                  <li>
                    <i class="ion-ios-checkmark text-primary mr-2" />
                    Create your own plan
                  </li>
                  <li>
                    <i class="ion-ios-checkmark text-primary mr-2" />
                    Pay upfront, get a discount
                  </li>
                  <li>
                    <i class="ion-ios-checkmark text-primary mr-2" />
                    Unlimited users, all features
                  </li>
                </ul>
              </div>
            </div>
            <a
              class="btn btn-success pricing__card-right__btn"
              href="https://app.checklyhq.com/signup"
              rel="noopener"
              >Start for free</a
            >
          </div>
        </div>

        <!-- Example CALCULATIONS -->

        <div
          class="d-flex flex-column flex-wrap justify-content-center align-items-center text-center pricing__calculation"
        >
          <h2 class="mb-5">How many check runs do I need?</h2>
          <h4 class="mb-5">
            5 API checks <span class="text-muted">running every</span> minute
            <span class="text-muted">makes </span>
            <span class="pricing__check-runs-indicator">223,200</span>
            <span class="text-muted"> check runs per month</span>
          </h4>
          <div class="d-flex flex-column text-left">
            <div class="text-muted mb-2">Daily runs: 24 x 60 = 1440 runs</div>
            <div class="text-muted mb-2">
              Monthly runs: 1440 x 31 = 44,640 runs
            </div>
            <div class="text-muted">
              Five checks: 5 x 44,640 =
              <span
                class="text-gray-dark pricing__check-runs-indicator pricing__check-runs-indicator--secondary"
                >223,200 runs</span
              >
            </div>
          </div>
          <div class="pricing__spreadsheet">
            <a
              class="d-flex"
              href="https://docs.google.com/spreadsheets/d/1ahnSqIDp6VXNSGWqSOtm2lSSo5ylIaeuZn57qNPM0H0/copy"
              target="_blank"
              rel="noopener"
            >
              <nuxt-img
                src="/images/google_Sheets_logo@2x.png"
                alt="Google Sheets Logo"
                width="14"
                height="18"
              />
              Use our pricing spreadsheet to build your plan
            </a>
          </div>
        </div>
      </div>

      <!-- ENTERPRISE -->

      <div class="pricing__enterprise">
        <div class="pricing__enterprise__content d-flex flex-row flex-wrap">
          <div class="d-flex flex-column">
            <h2 class="mb-2">Enterprise</h2>
            <p>Get a custom plan to fit your company's needs</p>
            <a
              class="btn btn-primary mb-lg-0 mb-4 open-intercom-link"
              href="mailto:sales@checklyhq.com"
              >Contact sales</a
            >
          </div>
          <div class="d-flex flex-column ml-lg-auto mr-5">
            <div class="pricing__list">
              <ul>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  All features
                </li>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  SAML/SSO support
                </li>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  Invoice payment
                </li>
              </ul>
            </div>
          </div>
          <div class="d-flex flex-column">
            <div class="pricing__list">
              <ul>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  Volume discount
                </li>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  Premium support
                </li>
                <li>
                  <i class="ion-ios-checkmark text-primary mr-2" />
                  Custom data retention
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- SOCIAL PROOF -->

      <div class="pricing__testimonials">
        <LandingTestimonialQuote />
      </div>

      <div class="container">
        <!-- FEATURE TABLE -->

        <div class="d-flex flex-column align-items-center text-center">
          <h2 id="features" class="mb-5">Feature overview</h2>
          <table class="pricing__feature-table mb-4">
            <thead>
              <tr>
                <th />
                <th>Free</th>
                <th>Paid</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>API check runs</th>
                <td>50,000 / month</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <th>Browser check runs</th>
                <td>5000 / month</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <th>Check intervals</th>
                <td>
                  <div class="pricing__tooltip">
                    1 min / 5 min
                    <div class="pricing__tooltip--body">
                      API checks can be scheduled every minute, browser checks
                      every 5 min.
                    </div>
                  </div>
                </td>
                <td>
                  <div class="pricing__tooltip">
                    1 min / 5 min
                    <div class="pricing__tooltip--body">
                      API checks can be scheduled every minute, browser checks
                      every 5 min.
                    </div>
                  </div>
                </td>
                <td>Custom</td>
              </tr>
              <tr>
                <th>Users</th>
                <td>5</td>
                <td>Unlimited*</td>
                <td>Unlimited*</td>
              </tr>
              <tr>
                <th>Public dashboards</th>
                <td>1</td>
                <td>Unlimited*</td>
                <td>Unlimited*</td>
              </tr>
              <tr>
                <th>Data center locations</th>
                <td>20</td>
                <td>20</td>
                <td>20</td>
              </tr>
              <tr>
                <th>Raw data retention</th>
                <td>7 days</td>
                <td>30 days</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th>Aggregated data retention</th>
                <td>30 days</td>
                <td>1 year</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th>SMS credits</th>
                <td><i class="ion-close-circled text-muted" /></td>
                <td>Unlimited*</td>
                <td>Unlimited*</td>
              </tr>
              <tr>
                <th>SSL monitoring</th>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>Email, Slack & Webhooks</th>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>
                  <div class="pricing__tooltip">
                    Threshold based alerting
                    <div class="pricing__tooltip--body">
                      Configure when and how often your are alerted and how many
                      reminders you should get
                    </div>
                  </div>
                </th>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>
                  <div class="pricing__tooltip">
                    Setup & teardown scripts
                    <div class="pricing__tooltip--body">
                      Have full control over request data and responses using
                      custom Javascript snippets.
                    </div>
                  </div>
                </th>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>Maintenance windows</th>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>API access</th>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>Terraform provider</th>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>
                  <div class="pricing__tooltip">
                    GitHub triggers
                    <div class="pricing__tooltip--body">
                      Automatically trigger checks from GitHub PR or commits.
                      Works out-of-the-box with Vercel, Heroku etc.
                    </div>
                  </div>
                </th>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>
                  <div class="pricing__tooltip">
                    CI/CD custom triggers
                    <div class="pricing__tooltip--body">
                      Trigger a check run from the terminal or your CI/CD
                      pipeline for automated testing before or after building
                      and deploying. Works with any CI/CD provider.
                    </div>
                  </div>
                </th>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>Pagerduty & Opsgenie</th>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>
                  <div class="pricing__tooltip">
                    Prometheus endpoint
                    <div class="pricing__tooltip--body">
                      We provision a custom, secured endpoint that exposes
                      checks statuses and response times in Prometheus format.
                    </div>
                  </div>
                </th>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>SAML/SSO login</th>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>Invoice payment</th>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>Concierge onboarding</th>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
              <tr>
                <th>Priority support</th>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-close-circled text-muted" /></td>
                <td><i class="ion-ios-checkmark text-success" /></td>
              </tr>
            </tbody>
          </table>
          <div class="text-muted">
            * All plans are subject to our fair use policy. Check the FAQ below
            for more details.
          </div>
        </div>

        <!-- FAQ -->

        <div
          class="pricing__faq d-flex flex-column justify-content-center text-center mx-auto"
        >
          <h2 id="faq" class="mb-5">FAQ</h2>

          <div v-for="faq of pricingQuestions" :key="faq.q">
            <GlobalFaqToggle :question="faq.q" :answer="faq.a" />
          </div>
        </div>
      </div>

      <div class="pricing__trial">
        <CommonStartForFree />
      </div>
    </div>
    <CommonFooter />
  </div>
</template>

<script setup>
import LoveDevs from '~/assets/images/love-devs.svg?inline'
import PinkDrop from '~/assets/images/icons/svg/pink-drop.svg?inline'

const data = {
  discountOpen: false,
}
async function asyncData({ $content, params }) {
  const pricing = await $content('data/pricing', params.slug).fetch()
  return { pricingQuestions: pricing[0].questions }
}
function toggleDiscount() {
  data.discountOpen = !data.discountOpen
}
</script>
