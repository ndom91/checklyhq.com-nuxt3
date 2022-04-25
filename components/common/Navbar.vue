<template>
  <nav class="px-8 z-100 bg-white">
    <div class="flex">
      <button
        class="block w-4 h-4 mb-1"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span /><span /><span />
      </button>
      <NuxtLink class="navbar-brand mr-2" to="/" aria-label="Home">
        <TextRaccoonLogo alt="Checkly Logo" />
      </NuxtLink>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li
            id="dropdown-li"
            class="nav-item dropdown"
            :class="{ show: isHoveringProduct }"
            @mouseover="isHoveringProduct = true"
            @mouseout="isHoveringProduct = false"
          >
            <a
              id="navbarDropdownMenuLink"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              >Product</a
            >
            <div
              id="dropdown-menu"
              class="dropdown-menu big-drop-shadow product-dropdown"
            >
              <div class="dropmenu-triangle"></div>
              <div class="d-flex">
                <NuxtLink class="dropdown-item" to="/product/api-monitoring/">
                  <div class="d-flex">
                    <div class="menu-icon">
                      <ApiLogo alt="Api monitoring" width="32" height="32" />
                    </div>
                    <div>
                      <div class="menu-title">API Monitoring</div>
                      <div class="menu-text">
                        Powerful HTTP-based checks to monitor all your APIs
                        endpoints easily.
                      </div>
                    </div>
                  </div>
                </NuxtLink>
                <NuxtLink
                  class="dropdown-item"
                  aria-label="Synthetic Monitoring Page"
                  to="/product/synthetic-monitoring/"
                >
                  <div class="d-flex">
                    <div class="menu-icon">
                      <ChromeLogo
                        alt="Synthetic Monitoring"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div>
                      <div class="menu-title">Synthetic Monitoring</div>
                      <div class="menu-text">
                        Open Source based E2E automation to monitor your web app
                        continuously.
                      </div>
                    </div>
                  </div>
                </NuxtLink>
                <NuxtLink class="dropdown-item" to="/product/alerting/">
                  <div class="d-flex">
                    <div class="menu-icon">
                      <AlertLogo alt="Alerting" width="32" height="32" />
                    </div>
                    <div>
                      <div class="menu-title">Alerting</div>
                      <div class="menu-text">
                        Deep and reliable alerting to wake you up if things go
                        wrong.
                      </div>
                    </div>
                  </div>
                </NuxtLink>
                <NuxtLink class="dropdown-item" to="/integrations/">
                  <div class="d-flex">
                    <div class="menu-icon">
                      <IntegrationLogo alt="Alerting" width="32" height="32" />
                    </div>
                    <div>
                      <div class="menu-title">Integrations</div>
                      <div class="menu-text">
                        Checkly natively integrates with your workflow and the
                        tools you love.
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
              <NuxtLink class="dropdown-item why-checkly" to="/why-checkly/">
                <div class="d-flex">
                  <div>
                    <div class="menu-title">Why Checkly?</div>
                    <div class="menu-text">
                      Increase reliability with less effort!
                    </div>
                  </div>
                  <div class="menu-icon">
                    <ArrowRightLogo alt="Alerting" width="16" height="16" />
                  </div>
                </div>
              </NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/pricing"> Pricing </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/docs"> Docs </NuxtLink>
          </li>
          <li
            id="dropdown-li-learn"
            class="nav-item dropdown"
            :class="{ show: isHoveringLearn }"
            @mouseover="isHoveringLearn = true"
            @mouseout="isHoveringLearn = false"
          >
            <a
              id="navbarDropdownMenuLinkLearn"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              >Learn</a
            >
            <div id="dropdown-menu" class="dropdown-menu big-drop-shadow">
              <div class="dropmenu-triangle"></div>
              <NuxtLink class="dropdown-item" to="/learn/headless/">
                <div class="d-flex">
                  <div class="menu-icon">
                    <LearnAutomationLogo
                      alt="Api monitoring"
                      width="32"
                      height="32"
                    />
                  </div>
                  <div>
                    <div class="menu-title">Puppeteer & Playwright</div>
                    <div class="menu-text">
                      Tips, tricks, and in-depth guides for headless browser
                      automation.
                    </div>
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/guides/">
                <div class="d-flex">
                  <div class="menu-icon">
                    <GuidesLogo alt="Guides" width="32" height="32" />
                  </div>
                  <div>
                    <div class="menu-title">Guides</div>
                    <div class="menu-text">
                      Learn about API & E2E monitoring and testing.
                    </div>
                  </div>
                </div>
              </NuxtLink>
              <a class="dropdown-item" href="https://blog.checklyhq.com">
                <div class="d-flex">
                  <div class="menu-icon">
                    <BlogLogo alt="Blog" width="32" height="32" />
                  </div>
                  <div>
                    <div class="menu-title">Blog</div>
                    <div class="menu-text">
                      Product updates and long content on engineering, DevOps,
                      and SaaS.
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </li>
          <li style="display: flex">
            <form class="form-inline my-2 my-lg-0 ml-md-3">
              <a
                v-if="hasAccount"
                id="dashboard-button"
                class="btn btn-outline-secondary my-2 my-sm-0 mr-3 ml-md-3"
                href="https://app.checklyhq.com/"
                rel="noopener"
              >
                Dashboard
                <div class="ion-arrow-right-c d-inline ml-2" />
              </a>
              <a
                v-else
                id="login-button"
                class="btn btn-outline-secondary my-2 my-sm-0 mr-3 ml-md-3"
                href="https://app.checklyhq.com/"
                rel="noopener"
              >
                Log in
              </a>
              <a
                class="signup-button btn btn-success my-2 my-sm-0"
                data-signup="data-signup"
                href="https://app.checklyhq.com/signup"
                rel="noopener"
              >
                Start for free
              </a>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import TextRaccoonLogo from '~/assets/images/text_racoon_logo.svg'
import ApiLogo from '~/assets/images/icons/api.svg'
import ChromeLogo from '~/assets/images/icons/chrome.svg'
import AlertLogo from '~/assets/images/icons/alert.svg'
import LearnAutomationLogo from '~/assets/images/icons/learn-puppeteer-playwright.svg'
import BlogLogo from '~/assets/images/icons/blog-icon.svg'
import GuidesLogo from '~/assets/images/icons/guides.svg'
import IntegrationLogo from '~/assets/images/icons/integration.svg'
import ArrowRightLogo from '~/assets/images/icons/arrow-right.svg'

const isHoveringProduct = false
const isHoveringLearn = false

function hasAccount() {
  if (typeof document === 'undefined') return false
  return document.cookie.match('(^|;) ?checkly_has_account=([^;]*)(;|$)')
}
</script>
