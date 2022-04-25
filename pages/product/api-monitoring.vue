<template>
  <div>
    <article class="main container product pt-5">
      <div class="row">
        <div class="col-sm-12">
          <nuxt-content :document="page" />
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
    const page = await $content('product/api-monitoring').fetch()

    return {
      page,
    }
  },
}
</script>
