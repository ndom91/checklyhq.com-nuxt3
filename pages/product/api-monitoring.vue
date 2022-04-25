<template>
  <div>
    <article class="main container product pt-5">
      <div class="row">
        <div class="col-sm-12">
          <nuxt-content :document="page" />
        </div>
      </div>
    </article>
    <CommonStartForFree />
    <CommonFooter />
  </div>
</template>

<script>
async function asyncData({ $content }) {
  const page = await $content('product/api-monitoring').fetch()

  return {
    page,
  }
}
</script>
