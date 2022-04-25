<template>
  <div>
    <div class="main container pt-5">
      <AlternativeHero>
        {{ $page.alternative.hero }}
      </AlternativeHero>
      <TestimonialQuote />

      <span class="product markdown">
        <VueRemarkContent />
      </span>
    </div>
    <StartForFree />
    <Footer />
  </div>
</template>

<script>
import { Footer, StartForFree } from '~/components/common'
import { AlternativeHero } from '~/components/global'
import { TestimonialQuote } from '~/components/landing'

export default {
  name: 'Alternative',
  components: { Footer, StartForFree, AlternativeHero, TestimonialQuote },
  metaInfo() {
    return {
      title: 'Delightful Active Monitoring for Developers',
      meta: [
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.alternative.description,
        },
      ],
    }
  },
}
</script>
