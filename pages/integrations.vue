<template>
  <div class="main pt-5">
    <div class="integrations">
      <div class="container">
        <div class="integrations__hero align-items-center text-center">
          <h1 class="display-3">
            {{ integrations.heroTitle }}
          </h1>
          <p class="integrations__hero__lead">
            {{ integrations.heroDescription }}
          </p>
        </div>
        <CommonTabs
          active-nav-item-class="active"
          local-active="active"
          class="integrations__highlights"
          align="center"
          justified
        >
          <CommonTab
            v-for="(highlight, index) in integrations.highlights"
            :id="`integration-tab-${index}-content`"
            :key="highlight.label"
            class="integration-tab-content"
            local-active="active"
            :title="'<img width=68 src=' + highlight.tabIcon + '>'"
          >
            <div class="integrations__highlights__contents">
              <div class="image-wrap">
                <img
                  :src="highlight.image"
                  :alt="highlight.title"
                  width="424"
                  height="280"
                />
              </div>
              <div class="text-wrap">
                <div class="label">
                  {{ highlight.label }}
                </div>
                <h3 class="display-4">
                  {{ highlight.title }}
                </h3>
                <p>{{ highlight.description }}</p>
                <NuxtLink class="cta-link" :to="highlight.ctaLink">
                  Learn more
                </NuxtLink>
              </div>
            </div>
          </CommonTab>
        </CommonTabs>
        <div class="integrations__subnav">
          <h2 class="display-4 text-center">All Integrations</h2>
          <div class="d-flex">
            <a href="#alert">Alerting</a>
            <a href="#triggers">Triggers</a>
            <a href="#frameworks">Frameworks</a>
            <a href="#infrastructure">Infrastructure</a>
          </div>
        </div>
        <div id="alert" class="integrations__cardlist">
          <h3 class="list-title">Alerting</h3>
          <div class="d-flex">
            <div
              v-for="alert in integrations.alerting"
              :key="alert.service"
              class="card"
            >
              <div class="card__img">
                <img
                  :src="alert.icon"
                  :alt="alert.service"
                  width="alert.iconWidth"
                  height="alert.iconHeight"
                />
              </div>
              <h4 class="card__title">
                {{ alert.service }}
              </h4>
              <p class="card__description">
                {{ alert.description }}
              </p>
              <div class="card__cta">
                <NuxtLink
                  v-if="alert.ctaLink"
                  class="cta-link"
                  :to="alert.ctaLink"
                >
                  {{ alert.service }} integration
                </NuxtLink>
                <span v-else> Coming soon! </span>
              </div>
            </div>
            <div class="card hidden" />
          </div>
        </div>
        <div id="triggers" class="integrations__cardlist">
          <h3 class="list-title">Triggers</h3>
          <div class="d-flex">
            <div
              v-for="trigger in integrations.triggers"
              :key="trigger.service"
              class="card"
            >
              <div class="card__img">
                <img
                  :src="trigger.icon"
                  :alt="trigger.service"
                  width="trigger.iconWidth"
                  height="trigger.iconHeight"
                />
              </div>
              <h4 class="card__title">
                {{ trigger.service }}
              </h4>
              <p class="card__description">
                {{ trigger.description }}
              </p>
              <div class="card__cta">
                <NuxtLink
                  v-if="trigger.ctaLink"
                  class="cta-link"
                  :to="trigger.ctaLink"
                >
                  {{ trigger.service }} integration
                </NuxtLink>
                <span v-else> Coming soon! </span>
              </div>
            </div>
            <div class="card hidden" />
          </div>
        </div>
        <div id="frameworks" class="integrations__cardlist">
          <h3 class="list-title">Frameworks</h3>
          <div class="d-flex">
            <div
              v-for="framework in integrations.frameworks"
              :key="framework.service"
              class="card"
            >
              <div class="card__img">
                <img
                  :src="framework.icon"
                  :alt="framework.service"
                  width="framework.iconWidth"
                  height="framework.iconHeight"
                  fit="fill"
                />
              </div>
              <h4 class="card__title">
                {{ framework.service }}
              </h4>
              <p class="card__description">
                {{ framework.description }}
              </p>
              <div class="card__cta">
                <NuxtLink
                  v-if="framework.ctaLink"
                  class="cta-link"
                  :to="framework.ctaLink"
                >
                  {{ framework.service }} integration
                </NuxtLink>
                <span v-else> Coming soon! </span>
              </div>
            </div>
            <div class="card hidden" />
          </div>
        </div>
        <div id="infrastructure" class="integrations__cardlist">
          <h3 class="list-title">Infrastructure</h3>
          <div class="d-flex">
            <div
              v-for="infra in integrations.infrastructure"
              :key="infra.service"
              class="card"
            >
              <div class="card__img">
                <nuxt-img
                  :src="infra.icon"
                  :alt="infra.service"
                  width="infra.iconWidth"
                  height="infra.iconHeight"
                />
              </div>
              <h4 class="card__title">
                {{ infra.service }}
              </h4>
              <p class="card__description">
                {{ infra.description }}
              </p>
              <div class="card__cta">
                <NuxtLink
                  v-if="infra.ctaLink"
                  class="cta-link"
                  :to="infra.ctaLink"
                >
                  {{ infra.service }} integration
                </NuxtLink>
                <span v-else> Coming soon! </span>
              </div>
            </div>
            <div class="card hidden" />
          </div>
        </div>
      </div>
      <CommonStartForFree />
    </div>
    <CommonFooter />
  </div>
</template>

<script setup>
definePageMeta({
  title: 'My home page',
})

// Fetch 'integrations' page from /content via Nuxt2/Content plugin
// const asyncData = async ({ $content, params }) => {
//   const integrations = await $content('integrations', params.slug).fetch()
//   return { integrations: integrations[0] }
// }
</script>
