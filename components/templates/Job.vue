<template>
  <div>
    <div class="main container py-5">
      <div class="row">
        <div class="col-sm-12 col-md-8 offset-md-2">
          <h1>{{ $page.job.title }}</h1>
          <span class="markdown" v-html="$page.job.content" />
          <div class="mt-5 card card-block">
            <h4>How to apply</h4>
            <p>
              Send your application by email to
              <a
                :href="
                  'mailto:jobs@checklyhq.com?subject=Applying for' +
                  $page.job.title
                "
                >jobs@checklyhq.com</a
              >. Remember to include a written motivation on why you want to
              join Checkly and what motivates you in a job.
            </p>
            <a
              class="btn btn-success text-white"
              :href="
                'mailto:jobs@checklyhq.com?subject=Applying for' +
                $page.job.title
              "
              >Apply now</a
            >
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { Footer } from '@/components/common'

export default {
  name: 'Jobs',
  components: { Footer },
}
</script>
