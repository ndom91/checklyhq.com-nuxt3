<template>
  <div>
    <div class="container">
      <VueRemarkContent />
    </div>
    <Footer />
  </div>
</template>

<script>
import { Footer } from '~/components/common'
export default {
  name: 'Content',
  components: { Footer },
  mount() {
    console.log(this.$page.pages)
  },
}
</script>
