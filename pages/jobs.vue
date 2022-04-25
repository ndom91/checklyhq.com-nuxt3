<template>
  <div>
    <div class="main container py-5">
      <div class="row mb-5">
        <div class="col-sm-12 col-lg-8 offset-lg-2 text-center">
          <h1>Join us!</h1>
          <span class="markdown">
            Checkly is growing! Join us and help us empower development teams to
            build, deploy and run better software. You will be working on our
            SaaS app and our open source projects
            <a
              href="https://github.com/checkly/headless-recorder"
              target="_blank"
              >headless recorder</a
            >
            and
            <a
              href="https://registry.terraform.io/providers/checkly/checkly/latest/docs"
              target="_blank"
              >Terraform Provider</a
            >.
          </span>
        </div>
      </div>
      <div class="row mb-4">
        <div
          v-if="jobs.length"
          class="col-sm-12 col-lg-8 offset-lg-2 text-left"
        >
          <div v-for="job in jobs" :key="job.title">
            <NuxtLink :to="job.path">
              <div class="d-flex flex-row justify-content-start mb-2">
                <div class="d-flex flex-column">
                  <h2 class="mb-2 text-primary">
                    {{ job.title }}
                  </h2>
                  <h6 class="text-primary">
                    {{ job.subtitle }}
                  </h6>
                </div>
                <div class="ml-auto">
                  <div class="badge badge-success">
                    {{ job.positionState }}
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div v-else class="col-sm-12 col-lg-8 offset-lg-2 text-center">
          <h5 class="mb-2">😮 No open positions just now...</h5>
        </div>
      </div>
    </div>
    <CommonFooter />
  </div>
</template>

<script setup>
async function asyncData({ $content, params }) {
  const jobs = await $content('jobs')
    .where({ positionState: { $eq: 'Open' } })
    .fetch()
  return { jobs }
}
</script>
