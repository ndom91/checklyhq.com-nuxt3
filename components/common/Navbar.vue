<template>
  <nav class="">
    <div class="container w-full max-w-7xl">
      <div
        x-data="{ open: false }"
        class="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
      >
        <div
          class="flex flex-row items-center justify-between lg:justify-start"
        >
          <NuxtLink to="/" aria-label="Home">
            <TextRaccoonLogo
              class="mr-8"
              viewBox="0 0 260 80"
              height="80"
              width="120"
              alt="Checkly Logo"
            />
          </NuxtLink>

          <button
            class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                style="display: none"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          :class="{ flex: open, hidden: !open }"
          class="flex-col items-center flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row lg:pl-2"
        >
          <div class="relative">
            <button
              @click="productOpen = !productOpen"
              class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm text-left text-gray-500 md:w-auto md:inline md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
            >
              <span>Product</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                :class="{ 'rotate-180': open, 'rotate-0': !open }"
                class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 rotate-0"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              v-if="productOpen"
              class="absolute right-0 z-30 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
            >
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
            </div>
          </div>
          <NuxtLink
            class="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
            href="#"
          >
            Pricing
          </NuxtLink>
          <NuxtLink
            class="px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
            href="#"
          >
            Docs
          </NuxtLink>
          <div class="relative">
            <button
              @click="learnOpen = !learnOpen"
              class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm text-left text-gray-500 md:w-auto md:inline md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
            >
              <span>Learn</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                :class="{ 'rotate-180': open, 'rotate-0': !open }"
                class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 rotate-0"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              v-if="learnOpen"
              class="absolute right-0 z-30 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
            >
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
          </div>
          <div class="inline-flex items-center gap-2 list-none lg:ml-4">
            <button
              class="items-center block px-10 py-2.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Dashboard
            </button>
            <button
              class="items-center block px-10 py-3 text-base font-medium text-center text-gray-800 transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start for Free
            </button>
          </div>
        </nav>
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

let productOpen = ref(false)
let learnOpen = ref(false)

function hasAccount() {
  if (typeof document === 'undefined') return false
  return document.cookie.match('(^|;) ?checkly_has_account=([^;]*)(;|$)')
}
</script>
