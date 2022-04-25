<template>
  <div class="d-flex container-fluid learn">
    <LearnMenu />
    <div class="learn-page">
      <article class="markdown">
        <div class="welcome">
          <h5>Welcome to the Headless Automation Guide!</h5>
          <p>
            We gave theheadless.dev a new home and will publish fresh content
            around Puppeteer & Playwright in this guide.
          </p>
        </div>
        <div class="d-flex search">
          <div id="mobile-toc-button" class="mobile-toc-button">
            <TocLogo alt="table of contents" width="14" height="12" />
            Table of contents
          </div>
          <form id="search-form" class="form-inline">
            <img
              src="/docs/images/icons/search@2x.png"
              alt="search"
              with="16"
              height="16"
            />
            <input
              id="search"
              class="form-control py-2"
              type="search"
              placeholder="Press / to search"
            />
          </form>
        </div>
        <h1>{{ $page.learn.title }}</h1>
        <div class="learn-toc-mobile mb-5 pt-3">
          <div class="learn-toc-header mb-3 pt-3">On this page</div>
        </div>
        <VueRemarkContent />

        <!-- <hr class="pt-2 mb-2">
        {{if .PrevInSection}}
        <div class="text-right mb-4">
          <a href="{{.PrevInSection.Permalink}}">Next: {{.PrevInSection.Title }}
          </a>
        </div> -->
      </article>
    </div>
    <aside class="learn-toc mb-3">
      <div id="tocMenu">
        <div class="learn-toc-header">On this page</div>
        <!-- TOC from remark-toc -->
        <nav id="TableOfContents">
          <ul>
            <li v-for="heading of $page.learn.headings" :key="heading.anchor">
              <NuxtLink :to="$page.learn.path + heading.anchor">
                {{ heading.value }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script>
import { LearnMenu } from '@/components/learn'
import TocLogo from '@@/static/images/icons/toc-icon.svg?inline'
import mediumZoom from 'medium-zoom'

export default {
  name: 'Learn',
  components: { LearnMenu, TocLogo },
  mounted() {
    mediumZoom('.markdown img', {
      margin: 48,
      background: 'rgba(0,0,0,0.6)',
    })
  },
  updated() {
    mediumZoom('.markdown img', {
      margin: 48,
      background: 'rgba(0,0,0,0.6)',
    })
  },
}
</script>
