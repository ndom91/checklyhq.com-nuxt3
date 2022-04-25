<template>
  <section class="public-stats-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="counter-text">
            We already ran
            <span id="api-check-results" class="counter">
              {{ apiCount }}
            </span>
            API checks and
            <span id="browser-check-results" class="counter">
              {{ browserCount }}
            </span>
            browser checks!
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PublicStats',
  data() {
    return {
      apiCount: 0,
      browserCount: 0,
    }
  },
  mounted() {
    this.loadCheckCount()

    this.checkCountInterval = window.setInterval(() => {
      this.loadCheckCount()
    }, 30000)
  },
  beforeDestroy() {
    clearInterval(this.checkCountInterval)
  },
  methods: {
    loadCheckCount() {
      fetch('https://api.checklyhq.com/public-stats')
        .then((res) => res.json())
        .then((res) => {
          this.apiCount = res.apiCheckResults.toLocaleString()
          this.browserCount = res.browserCheckResults.toLocaleString()
        })
    },
  },
}
</script>

<style lang="scss">
.public-stats-section {
  content-visibility: auto;
  contain-intrinsic-size: 200px;
}
</style>
