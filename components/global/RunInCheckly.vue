<template>
  <div class="run-in-checkly" @click="launchCheckly">
    <ZapLogo class="mr-1" />
    Run in Checkly
  </div>
</template>

<script>
import ZapLogo from '@@/static/learn/icons/zap.svg?inline'

export default {
  name: 'RunInCheckly',
  components: { ZapLogo },
  props: {
    script: {
      type: String,
      required: true,
    },
    framework: {
      type: String,
      required: true,
    },
  },
  methods: {
    launchCheckly() {
      if (typeof window === 'undefined') return
      const isDev = window.location.host.includes('localhost')
      const body = this.$static.allSamples.edges.find((edge) =>
        edge.node.name.includes(this.script)
      )
      const script = encodeURIComponent(btoa(body.node.content))
      window.location.href = `${
        isDev ? 'http://localhost:8081' : 'https://app.checklyhq.com'
      }/checks/new/browser?framework=${this.framework}&script=${script}`
    },
  },
}
</script>

<style lang="scss">
.run-in-checkly {
  position: absolute;
  bottom: 33px;
  background-color: #45c8f1;
  z-index: 100000000;
  right: 25px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
}
</style>
