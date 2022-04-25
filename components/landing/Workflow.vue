<template>
  <section class="workflow-section">
    <div class="container">
      <div class="row text-center justify-content-center">
        <div class="col-md-12 col-lg-8">
          <h2 class="section-super-header">workflow</h2>
          <h3 class="display-4">Integrates with your workflow</h3>
        </div>
        <div class="col-md-12 col-lg-8">
          <p class="lead">
            Checkly integrates with the open source & developer tools you use on
            a daily basis.
          </p>
        </div>
      </div>
      <div class="row text-left">
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0 workflow-item">
          <div class="d-flex align-items-center mb-2" style="height: 80px">
            <TerraformLogo alt="terraform logo" width="70" height="70" />
          </div>
          <div class="h5">Terraform</div>
          <p>
            Configure and scale your monitoring with Terraform's powerful CLI
            workflow.
          </p>
          <NuxtLink class="cta-link" to="/docs/integrations/terraform/">
            Learn more
          </NuxtLink>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0 workflow-item">
          <div class="d-flex align-items-center mb-2" style="height: 80px">
            <JavascriptLogo alt="javascript logo" width="70" height="70" />
          </div>
          <div class="h5">Javascript</div>
          <p>
            Extend your monitoring with Javascript for custom authentication and
            test logic.
          </p>
          <NuxtLink
            class="cta-link"
            to="/docs/api-checks/setup-teardown-scripts/"
          >
            Learn more
          </NuxtLink>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0 workflow-item">
          <div class="d-flex align-items-center mb-2" style="height: 80px">
            <GithubLogo alt="github logo" width="70" height="70" />
          </div>
          <div class="h5">GitHub</div>
          <p>
            Run your checks as tests on each <code>git push</code> and get
            results in your PR comments.
          </p>
          <NuxtLink
            class="cta-link"
            to="/docs/cicd/github/"
            aria-label="CICD Docs"
            >Learn more</NuxtLink
          >
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0 workflow-item">
          <div class="d-flex align-items-center mb-2" style="height: 80px">
            <PrometheusLogo alt="prometheus logo" width="70" height="70" />
          </div>
          <div class="h5">Prometheus</div>
          <p>
            Export uptime, status and response time data to your Prometheus
            cluster.
          </p>
          <NuxtLink class="cta-link" to="/docs/integrations/prometheus/">
            Learn more
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TerraformLogo from '@@/static/images/landing/terraform.svg?inline'
import JavascriptLogo from '@@/static/images/landing/javascript-logo.svg?inline'
import GithubLogo from '@@/static/images/landing/github.svg?inline'
import PrometheusLogo from '@@/static/images/landing/prometheus.svg?inline'

export default {
  name: 'Workflow',
  components: { TerraformLogo, JavascriptLogo, GithubLogo, PrometheusLogo },
}
</script>

<style lang="scss">
.workflow-section {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
</style>
