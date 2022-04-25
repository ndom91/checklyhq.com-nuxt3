<template>
  <div class="layout">
    <Navbar />
    <Nuxt />
    <CookieLaw />
  </div>
</template>

<script>
import { Navbar } from '@/components/common'
import CookieLaw from 'vue-cookie-law'

export default {
  components: { Navbar, CookieLaw },
}
</script>
