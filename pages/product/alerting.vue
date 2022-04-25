<template>
  <div>
    <article class="container product">
      <nuxt-content :document="page" class="my-5" />
    </article>
    <CommonStartForFree />
    <CommonFooter />
  </div>
</template>

<script setup>
async function asyncData({ $content }) {
  const page = await $content('product/alerting').fetch()

  return {
    page,
  }
}
</script>
