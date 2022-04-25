<template>
  <div>
    <article class="container product">
      <nuxt-content :document="page" class="my-5" />
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
    const page = await $content('product/alerting').fetch()

    return {
      page,
    }
  },
}
</script>
