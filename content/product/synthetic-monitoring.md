---
title: Synthetic Monitoring
alias:
  - transaction-monitoring
---

<h1 class="text-center hero-text width-645">Synthetic monitoring for your vital click flows</h1>

<p class="text-center hero-sub hero-sub-center mb-lg-5">
Broken signup forms and flaky shopping carts are extremely frustrating to your customers.
With Checkly's Browser checks you can accurately simulate interaction with your site and validate the
correctness and performance of all your crucial click paths.
</p>

<div class="row justify-content-center text-center">
<alternative-picture 
    className="text-center hero-image big-drop-shadow" 
    img="/product/transaction-monitoring/browser-check-editor-screenshot@2x.webp" 
    alt="synthetic monitoring" 
    sizes="sm:600px md:820px lg:910px"
  ></alternative-picture>
</div>

<section class="grid-section">
  <div class="row">
    <sm-4-col-item 
      header="Real browsers" 
      body="Your checks are run in actual Chrome browsers to achieve a 100% match with real world conditions. We run each session in a sealed off sandbox for extra security." 
    ></sm-4-col-item>
    <sm-4-col-item 
      header="Validate all the things" 
      body="In a Browser check you can check for specific content items, browser responses, visibility and error responses." 
    ></sm-4-col-item>
    <sm-4-col-item 
      header="Screenshots" 
      body="Take a screenshot at any stage in your transaction for quick and easy reference. You can take full page shots, or just a specific page element for more focus." 
    ></sm-4-col-item>
    <sm-4-col-item 
      header="Monitor globally" 
      body="We monitor your transactions from data center locations around the world." 
    ></sm-4-col-item>
    <sm-4-col-item 
      header="CI/CD integration" 
      body="Integrate your Browser checks into your QA or continuous delivery process by triggering adhoc runs from GitHub or the command line." 
    ></sm-4-col-item>
    <sm-4-col-item 
      header="Coding optional" 
      body="Use our browser plugin to record a script and import it into Checkly. Want more control? Dive into the code and tweak your script to perfection." 
    ></sm-4-col-item>
  </div>
</section>

<h2 class="text-center section-header mt-8">How it works</h2>

<p class="text-center hero-sub hero-sub-center mb-5">
Checkly uses the Puppeteer & Playwright frameworks to accurately simulate interactions with a Chrome browser. Getting a monitoring script going is a lot easier than you might think. Just follow the steps below and you'll be up in no time.
</p>

<feature-row
header="Create a script"
img="/product/transaction-monitoring/synthetic-howitworks-1@2x.webp"
format="webp"> Pick one of the examples from our built-in library as your starting point. Alternatively, you can install and fire up the <NuxtLink to="/docs/headless-recorder/">Headless Recorder</NuxtLink> browser extension and record a script in real-time as you click through your site.

  <div class="cta">
    <cta-link text="Learn more" link="/docs/browser-checks/" />
  </div>
</feature-row>

<feature-row
header="Tweak it"
img="/product/transaction-monitoring/synthetic-howitworks-2@2x.webp"
format="webp"> Use our in app debugger to iterate on your script and directly see the results. Add extra assertions, screenshots and navigation actions. Add the industry standard <b>Mocha and Chai libraries</b> for a familiar workflow.

  <div class="cta">
    <cta-link text="Learn more" link="/docs/browser-checks/using-mocha/"/>
  </div>
</feature-row>

<feature-row
header="Run it every ten minutes"
img="/product/transaction-monitoring/synthetic-howitworks-3@2x.webp"
format="webp" > Schedule your script to run as often as every ten minutes. A regular interval gives you an accurate insight into how your vital transactions are performing over time. We also give you <b>full access to the log files</b> for each run in case an alert is triggered.

  <div class="cta">
    <cta-link text="Learn more" link="/docs/browser-checks/quickstart/" />
  </div>
</feature-row>

<div class="gray-section two-grid">
  <div class="row justify-content-center header-part">
    <div class="col-sm-12 col-md-8">
      <h2 class="section-header mt-1">Learn from the community</h2>
      <p class="lead-text">
      Checkly helps you create scripts every step of the way. With our <strong>free & open source</strong> Chrome Extension you can get started without writing any code. Want to dive deeper? Dive into our open source knowledge base with practical coding tips and examples.
      </p>
    </div>
  </div>

<div class="row mt-7">

<div class="col-md-6">
  <div class="flex-wrap">
    <h3 class="section-header" style="margin-right: 1rem;">Headless Recorder</h3>
    <a class="github-button" href="https://github.com/checkly/headless-recorder" data-show-count="true" aria-label="Star checkly/headless-recorder on GitHub" rel="noopener">Star</a>
  </div>
  <p>Install the Headless Recorder browser extension in your Chrome browser and start recording scripts in under a minute. This extension has a ton of options for tweaking your scripts as you click through your site and fill out web forms. </p>
  <div class="cta">
    <cta-link text="Learn more" link="/docs/headless-recorder/basic-usage/" />
  </div>
  <alternative-picture 
    className="img-440 big-drop-shadow" 
    img="/product/transaction-monitoring/puppeteer@2x.webp" 
    alt="puppeteer screenshot" 
    sizes="sm:440px"
  ></alternative-picture>
</div>
<div class="col-md-6">
  <div>
    <h3 class="section-header">The Headless Automation Guides</h3>
  </div>
  <p>Learning headless automation for testing or monitoring from scratch, or improving on existing expertise? The Headless Automation Guides</p>
  <div class="cta">
    <cta-link text="Learn more" link="/learn/headless" />
  </div>
  <alternative-picture 
    className="img-440 big-drop-shadow" 
    img="/product/transaction-monitoring/thehd@2x.webp" 
    alt="thehd screenshot"
    sizes="sm:440px"
  ></alternative-picture>
</div>
</div>
</div>

<div class="mt-4 pb-9">
  <div class="row justify-content-center header-part">
    <div class="col-sm-12 col-md-8">
      <h2 class="section-super-header">alerting</h2>
      <div class="lead-text">
        <nuxt-img class="alerting-top-image" src="/product/synthetic-monitoring/alerting-options@2x.webp" alt="checkly alerting options" width="750" height="45" />
      </div>
      <h2 class="section-header mt-1">Alerting for any situation</h2>
      <p class="lead-text mb-lg-2">
      When a check fails, you and your team need timely and actionable insights to address any down time.
      Add Slack, SMS, email or Pagerduty: Checkly's alerts give you the right information whatever alerting medium you choose. Need more control? Webhooks give you full access to the JSON data we use ourselves for alerting.
      </p>
      <p class="lead-text mt-2">
      <cta-link text="Learn more" link="/product/alerting/" />
      </p>
    </div>
  </div>
</div>

<div class="gray-section">
  <div class="row justify-content-center header-part">
    <div class="col-sm-12 col-md-8">
      <h2 class="section-header mt-1">Global coverage</h2>
      <p class="lead-text mb-lg-2">
      Get a clear picture of how your services perform for all your users around the world. Run your check from any of twenty
      data center locations spread over the Americas, EMEA and Asia Pacific.
      </p>
      <p class="lead-text mt-2">
      <cta-link text="Learn more" link="/docs/monitoring/global-locations/" />
      </p>
    </div>
    <div class="lead-text mt-5 text-center">
      <alternative-picture 
        className="text-center hero-image big-drop-shadow" 
        img="/product/api-monitoring/global-coverage-screenshot@2x.webp" 
        alt="data centerlocations" 
        sizes="sm:600px md:875px"
      ></alternative-picture>
    </div>
  </div>
</div>
