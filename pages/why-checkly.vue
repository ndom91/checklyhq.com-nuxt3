<template>
  <div>
    <article class="container">
      <div class="main pt-5">
        <div class="why-checkly">
          <section class="why-checkly__hero">
            <div class="container">
              <h2 class="sub-title">
                {{ hero.label }}
              </h2>
              <h1 class="display-3">{{ hero.title }}</h1>
              <p class="lead-text">
                {{ hero.description }}
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
              <div class="logos">
                <img
                  v-for="logo in hero.logos"
                  :key="logo.alt"
                  :src="logo.logo"
                  :alt="logo.alt"
                  :width="logo.width"
                  :height="logo.height"
                />
              </div>
            </div>
            <div class="hero-bg">
              <img
                :src="hero.heroBg"
                alt="hero background"
                width="1920"
                height="352"
              />
            </div>
          </section>
          <section class="why-checkly__features">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 pr-lg-5 text-wrap">
                  <h2 class="section-header">
                    {{ feature.title }}
                  </h2>
                  <p class="lead-text">
                    {{ feature.description }}
                  </p>
                </div>
                <div class="col-lg-6 card-wrap">
                  <div
                    v-for="feat in feature.features"
                    :key="feat.title"
                    class="feature-card"
                  >
                    <div>
                      <img
                        :src="feat.icon"
                        :alt="feat.title"
                        width="52"
                        height="52"
                      />
                    </div>
                    <div>
                      <h6>{{ feat.title }}</h6>
                      <p>{{ feat.description }}</p>
                    </div>
                  </div>
                  <div class="card-link-dots">
                    <img
                      src="/why-checkly/card-link-vector.svg"
                      alt="card link lines"
                      width="191"
                      height="358"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="why-checkly__video">
            <div class="container">
              <div class="text-center">
                <h2 class="section-header">
                  {{ videosection.title }}
                </h2>
                <p class="lead-text">
                  {{ videosection.description }}
                </p>
                <div
                  class="video-wrapper"
                  @mouseenter="hoverVideo = true"
                  @mouseleave="
                    if (isPlaying) {
                      hoverVideo = false
                    }
                  "
                >
                  <video
                    id="why-checkly-video"
                    ref="whyChecklyVideo"
                    loop
                    autoplay
                    controls
                  >
                    <source :src="videosection.video" type="video/mp4" />
                  </video>
                  <div
                    v-if="!isPlaying"
                    v-show="hoverVideo"
                    class="action-button"
                    @click="toggleVideo(true)"
                  >
                    <img
                      src="/why-checkly/play-button.svg"
                      alt="play"
                      width="72"
                      heigt="72"
                    />
                  </div>
                  <div
                    v-else
                    v-show="hoverVideo"
                    class="action-button"
                    @click="toggleVideo(false)"
                  >
                    <img
                      src="/why-checkly/pause-button.svg"
                      alt="play"
                      width="72"
                      heigt="72"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="why-checkly__code">
            <div class="container">
              <div class="row">
                <div class="col-lg-7 col-xl-6">
                  <div class="why-checkly__code__block">
                    <div class="title"><span></span> Editor</div>

                    <nuxt-content :document="page" />

                    <select
                      id="why-checkly-select"
                      style="background-image: url(/why-checkly/dropdown.svg)"
                    >
                      <option value="playwright">Playwright</option>
                      <option value="puppeteer">Puppeteer</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-5 col-xl-6 pl-lg-5 text-wrap">
                  <h2 class="section-header">
                    {{ codes.title }}
                  </h2>
                  <p class="lead-text">
                    {{ codes.description }}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="why-checkly__integrates">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 text-wrap">
                  <h2 class="section-header">
                    {{ integrates.title }}
                  </h2>
                  <p class="lead-text">
                    {{ integrates.description }}
                  </p>
                </div>
                <div class="col-lg-5 image-wrap">
                  <nuxt-picture
                    :src="integrates.image"
                    :alt="integrates.title"
                    width="429"
                    height="410"
                  />
                </div>
              </div>
            </div>
          </section>
          <section class="why-checkly__monitor">
            <div class="container">
              <div class="row">
                <div class="col-lg-7 col-xl-6 image-wrap">
                  <nuxt-picture
                    :src="monitor.image"
                    :alt="monitor.title"
                    width="540"
                    height="356"
                  />
                </div>
                <div class="col-lg-5 col-xl-6 pl-lg-5 text-wrap">
                  <h2 class="section-header">
                    {{ monitor.title }}
                  </h2>
                  <p class="lead-text">
                    {{ monitor.description }}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section class="why-checkly__functions">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="icon-text-wrap">
                    <div class="icon-wrap">
                      <img
                        :src="alerting.icon"
                        :alt="alerting.title"
                        width="45"
                        height="45"
                      />
                    </div>
                    <div>
                      <h4>{{ alerting.title }}</h4>
                      <p>{{ alerting.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="icon-text-wrap">
                    <div class="icon-wrap">
                      <img
                        :src="open.icon"
                        :alt="open.title"
                        width="45"
                        height="45"
                      />
                    </div>
                    <div>
                      <h4>{{ open.title }}</h4>
                      <p>{{ open.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="why-checkly__testimonial">
            <div class="container">
              <div class="text-center">
                <img
                  class="mx-auto"
                  :src="testimonial.avatar"
                  :alt="testimonial.author"
                  width="80"
                  height="80"
                />
                <div class="review-text">
                  {{ testimonial.description }}
                </div>
                <p class="lead-text">
                  {{ testimonial.author }}
                </p>
                <p>
                  {{ testimonial.role }} at
                  <span>
                    <img
                      :src="testimonial.companyLogo"
                      alt="company"
                      width="107"
                      height="20"
                    />
                  </span>
                </p>
              </div>
            </div>
          </section>
          <section class="why-checkly__scale">
            <div class="container">
              <div class="section-header text-center" v-html="scale.title" />
              <div class="row">
                <div class="card card-light">
                  <h4>{{ scale.first.title }}</h4>
                  <div
                    v-for="feat in scale.first.features"
                    :key="feat.header"
                    class="icon-text-wrap"
                  >
                    <div class="icon-wrap">
                      <img
                        src="/why-checkly/star.svg"
                        alt="star"
                        width="22"
                        height="21"
                      />
                    </div>
                    <div>
                      <h5>{{ feat.header }}</h5>
                      <p>{{ feat.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="card card-dark">
                  <h4>{{ scale.second.title }}</h4>
                  <div
                    v-for="feat in scale.second.features"
                    :key="feat.header"
                    class="icon-text-wrap"
                  >
                    <div class="icon-wrap">
                      <img
                        src="/why-checkly/star.svg"
                        alt="star"
                        width="22"
                        height="21"
                      />
                    </div>
                    <div>
                      <h5>{{ feat.header }}</h5>
                      <p>{{ feat.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
    <StartForFree />
    <Footer />
  </div>
</template>

<script>
import { Footer, StartForFree } from '~/components/common'

export default {
  components: { Footer, StartForFree },
  async asyncData({ $content }) {
    const page = await $content('why-checkly').fetch()

    return {
      page,
      hero: page[0].hero,
      feature: page[0].feature,
      videosection: page[0].videosection,
      codes: page[0].codes,
      integrates: page[0].integrates,
      monitor: page[0].monitor,
      alerting: page[0].alerting,
      open: page[0].open,
      testimonial: page[0].testimonial,
      scale: page[0].scale,
    }
  },
  data() {
    return {
      isPlaying: false,
      hoverVideo: true,
    }
  },
  created() {
    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            const playPromise = this.$refs.whyChecklyVideo.play()
            playPromise
              .then(() => {
                this.isPlaying = true
              })
              .catch((e) => {
                this.isPlaying = false
              })
          }
        })
      },
      { rootMargin: '0px 0px -200px 0px' }
    )
  },
  mounted() {
    this.observer.observe(this.$refs.whyChecklyVideo)
  },
  methods: {
    toggleVideo(start) {
      if (this.observer.intersectionRatio > 0) {
        return
      }
      if (start) {
        this.$refs.whyChecklyVideo.play()
        this.isPlaying = true
      } else {
        this.$refs.whyChecklyVideo.pause()
        this.isPlaying = false
      }
    },
  },
}
</script>
