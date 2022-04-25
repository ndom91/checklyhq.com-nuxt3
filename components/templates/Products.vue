<template>
  <div>
    <div class="main container pt-5">
      <div class="row">
        <div class="col-sm-12">
          <span class="product markdown">
            <VueRemarkContent />
          </span>
        </div>
      </div>
    </div>
    <StartForFree />
    <Footer />
  </div>
</template>

<script>
import { Footer, StartForFree } from '@/components/common'

export default {
  name: 'Products',
  components: { Footer, StartForFree },
}
</script>
