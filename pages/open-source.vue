<template>
  <div>
    <div class="main py-5">
      <div class="opensource">
        <section class="opensource__hero">
          <div class="container">
            <h1 class="display-3">Open Source</h1>
            <p class="opensource__hero__lead">
              Checkly's foundation is Open Source. We are not only using but
              building and supporting Open Source. To grow the OSS and headless
              automation community even further, give back and allow developers
              to keep doing incredible things. 🚀
            </p>
            <div class="cta-wraps">
              <a
                class="cta-link"
                href="https://github.com/checkly"
                target="_blank"
                rel="noopener"
              >
                <ArrowUpRight alt="arrow up right" width="8" height="8" />
                Get involved on GitHub
              </a>
            </div>
          </div>
        </section>
        <section class="opensource__initiatives">
          <div class="container">
            <h2 class="section-header">Our Open Source initiatives</h2>
            <div class="d-flex">
              <div class="card">
                <div class="card-image">
                  <HeadlessRecorderLogo
                    alt="headless recorder logo"
                    width="92"
                    height="92"
                  />
                </div>
                <h5>
                  Headless recorder
                  <span>
                    <GithubStar alt="github start" width="31" height="15" />
                  </span>
                  <span id="headless-recorder">{{
                    headlessRecorderStargazers
                  }}</span>
                </h5>
                <p>
                  Headless recorder is a Chrome extension that records your
                  browser interactions
                </p>
                <div class="cta-wraps">
                  <a
                    class="cta-link"
                    href="https://chrome.google.com/webstore/detail/headless-recorder/djeegiggegleadkkbgopoonhjimgehda?hl=en"
                    target="_blank"
                    rel="noopener"
                  >
                    <ArrowDownload
                      alt="arrow download"
                      width="10"
                      height="14"
                    />
                    Get Headless recorder
                  </a>
                  <a
                    class="cta-link"
                    href="https://github.com/checkly/headless-recorder"
                    target="_blank"
                    rel="noopener"
                  >
                    See the code
                  </a>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <TerraformLogo alt="terraform logo" width="101" height="92" />
                </div>
                <h5>
                  Terraform Provider
                  <span>
                    <GithubStar alt="github start" width="31" height="15" />
                  </span>
                  <span id="terraform-provider">{{
                    terraformProviderStargazers
                  }}</span>
                </h5>
                <p>
                  The Terraform provider enables users to manage their Checkly
                  resources
                </p>
                <div class="cta-wraps">
                  <a
                    class="cta-link"
                    href="https://registry.terraform.io/providers/checkly/checkly/latest/docs"
                    target="_blank"
                    rel="noopener"
                  >
                    <ArrowVisit alt="arrow visit" width="13" height="13" />
                    Get Terraform provider
                  </a>
                  <a
                    class="cta-link"
                    href="https://github.com/checkly/terraform-provider-checkly"
                    target="_blank"
                    rel="noopener"
                  >
                    See the code
                  </a>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <JamLogo alt="jamstack deploy" width="101" height="92" />
                </div>
                <h5>
                  Jamstack Deploy
                  <span>
                    <GithubStar alt="github start" width="31" height="15" />
                  </span>
                  <span id="jamstack-deploy">{{ jamstackStargazers }}</span>
                </h5>
                <p>
                  Measure cloud providers and check which fits better for your
                  Jamstack App
                </p>
                <div class="cta-wraps">
                  <a
                    class="cta-link"
                    href="https://jamstackdeploy.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <ArrowVisit alt="arrow visit" width="13" height="13" />
                    Visit Jamstack Deploy
                  </a>
                  <a
                    class="cta-link"
                    href="https://github.com/checkly/jamstack-deploy"
                    target="_blank"
                    rel="noopener"
                  >
                    See the code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="opensource__mmr">
          <div class="container text-center">
            <h2 class="section-header">1% goes to Open Source</h2>
            <p>
              We love Open Source and aim to donate 1% of our revenue to
              non-corporate backed Open Source maintainers building incredible
              things.
            </p>
            <a
              href="https://github.com/orgs/checkly/sponsoring"
              target="_blank"
              rel="noopener"
            >
              Check who are we supporting
            </a>
          </div>
        </section>
        <section class="opensource__posts">
          <div class="container">
            <h2 class="section-header">
              Recent posts from
              <a href="https://theheadless.dev" target="_blank" rel="noopener">
                Headless Automation Guides
              </a>
            </h2>
            <p class="lead">
              Puppeteer and Playwright tips, tricks and in-depth guides from the
              trenches
            </p>
            <div class="d-flex">
              <div
                v-for="post in posts.slice(0, 6)"
                :key="post.title"
                class="card"
              >
                <h6 :id="'card-' + post.index + '-title'">
                  {{ post.title }}
                </h6>
                <p :id="'card-' + post.index + '-description'">
                  {{ post.description }}
                </p>
                <div class="cta-wraps">
                  <a
                    :id="'card-' + post.index + '-link'"
                    :href="post.link"
                    class="cta-link"
                    target="_blank"
                    rel="noopener"
                  >
                    <ArrowUpRight alt="arrow up right" width="8" height="8" />
                    Read article
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <CommonStartForFree />
    <CommonFooter />
  </div>
</template>

<script setup>
import ArrowUpRight from '~/assets/images/arrow-up-right.svg?inline'
import ArrowVisit from '~/assets/images/arrow-visit.svg?inline'
import HeadlessRecorderLogo from '~/assets/opensource/headless_recorder_logo.svg?inline'
import TerraformLogo from '~/assets/opensource/terraform_logo.svg?inline'
import GithubStar from '~/assets/images/github-star.svg?inline'
import ArrowDownload from '~/assets/images/arrow-download.svg?inline'
import JamLogo from '~/assets/images/jam.svg?inline'

const data = {
  posts: [],
  headlessRecorderStargazers: 0,
  terraformProviderStargazers: 0,
  jamstackStargazers: 0,
}
data.posts = await getLatestPosts()
data.headlessRecorderStargazers = await getStargazers(
  'checkly/headless-recorder'
)
data.terraformProviderStargazers = await getStargazers(
  'checkly/terraform-provider-checkly'
)
data.jamstackStargazers = await getStargazers('checkly/jamstack-deploy')
async function getLatestPosts() {
  const res = await fetch('https://theheadless.dev/rss.xml')
  const data = await res.text()
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(data, 'text/xml')
  const items = xmlDoc.getElementsByTagName('item')
  return Array.from(items).reduce((articles, item) => {
    articles.push({
      title: item.children[0].textContent,
      link: item.children[1].textContent,
      guid: item.children[2].textContent,
      pubdate: item.children[3].textContent,
      description: item.children[4].textContent,
    })
    return articles
  }, [])
}
async function getStargazers(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}`)
  const data = await res.json()
  let stars = ''
  if (data.stargazers_count > 1000) {
    stars = (data.stargazers_count / 1000).toFixed(1) + 'k'
  } else {
    stars = data.stargazers_count
  }
  return stars
}
</script>
