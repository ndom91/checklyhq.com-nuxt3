---
title: API Monitoring
description: "Checkly's deep but easy to use API
monitoring solution checks your mobile, webapp or IoT API for performance, uptime and correctness."
---

<h1 class="text-center hero-text">API monitoring correct and fast, 24x7</h1>

<p class="text-center hero-sub hero-sub-center">
Downtime caused by API performance has serious business impact. Use Checkly's deep but easy to use API
monitoring solution to check your mobile, webapp or IoT API for performance, uptime and correctness.
</p>

<div class="row justify-content-center text-center">
  <alternative-picture 
    className="text-center big-drop-shadow" 
    img="/product/api-monitoring/api-monitoring-hero@2x.png" 
    alt="api monitoring" 
    format="png"
    sizes="sm:700px md:865px"
  ></alternative-picture>
</div>

<section class="grid-section">
  <div class="row">
    <sm-4-col-item 
      header="Monitor for performance" 
      body="Checkly records the response time for each request, down to TCP, DNS and first byte times. Add assertions for maximum response time." 
    ></sm-4-col-item>
    <sm-4-col-item 
      header="Monitor for correctness" 
      body="Check payloads, return codes, headers, and authentication. Dive inside JSON payloads and validate specific items." 
    ></sm-4-col-item>
    <sm-4-col-item 
      header="Monitor globally" 
      body="Checkly can monitor your APIs from 20 global data center locations." 
    ></sm-4-col-item>
    <sm-4-col-item 
      header="Setup & Teardown scripts" 
      body="Run custom Javascript before and after your API check. Sign requests, get auth tokens and clean up test data." 
    ></sm-4-col-item>
    <sm-4-col-item 
      header="Import from tools you know" 
      body="Checkly's cUrl and Swagger API importers create fully fledged API checks with just a couple of clicks." 
    ></sm-4-col-item>
    <sm-4-col-item 
      header="CI/CD integration" 
      body="Integrate your API monitoring into your QA or continuous delivery process by triggering adhoc runs from GitHub or the command line." 
    ></sm-4-col-item>
  </div>
</section>

<h2 class="text-center section-header mt-8">How it works</h2>

<feature-row
header="Create an HTTP request"
img="/product/api-monitoring/api-howitworks-1@2x.webp"
format="webp">

Import your HTTP requests or assemble one by hand. Checkly gives you full control over all HTTP request options: <b>HTTP method, URL, query parameters, headers, and body</b>. Add credentials or a Bearer token for authentication.

  <div class="cta">
    <cta-link text="Learn more" link="/docs/api-checks/request-settings/" /></cta-link>
  </div>
</feature-row>

<feature-row
header="Add API check assertions"
img="/product/api-monitoring/api-howitworks-2@2x.png">

Checkly's assertion matrix helps you create as many assertions per check as you want. Monitor your API for correct response times, HTTP status code, plain text or JSON bodies and headers. <b>Drill into JSON payloads with JSON path</b> or user regular expression.

  <div class="cta">
    <cta-link text="Learn more" link="/docs/api-checks/assertions/" /></cta-link>
  </div>
</feature-row>

<feature-row
header="Customize setup & teardown"
img="/product/api-monitoring/api-howitworks-3@2x.png">

If needed, you can take full control of how your request executes. Use setup scripts to <b>cryptographically sign requests</b>, fetch OAuth tokens and update request attributes before any request is done. Use teardown scripts to clean up test data or <b>scrub sensitive data</b> from the response.

  <div class="cta">
    <cta-link text="Learn more" link="/docs/api-checks/setup-teardown-scripts/" /></cta-link>
  </div>
</feature-row>

<feature-row
header="Monitor your API every minute"
img="/product/api-monitoring/api-howitworks-4@2x.png">

We monitor your API as often as once per minute. This gives you a consistent and accurate view of your API performance. Next to aggregating metrics, we give you **access to each result** from each of the configured data centers.

  <div class="cta">
    <cta-link text="Learn more" link="/docs/api-checks/assertions/"></cta-link>
  </div>
</feature-row>

<div class="gray-section">
<div class="row justify-content-center header-part">
	<div class="col-sm-12 col-md-8">
		<h2 class="section-super-header">alerting</h2>
		<div class="lead-text">
      <nuxt-img class="alerting-top-image" src="/product/api-monitoring/alerting-options@2x.webp" alt="checkly alerting options" width="750" height="45"></nuxt-img>
		</div>
	  <h2 class="section-header mt-1">Alerting for any situation</h2>
	  <p class="lead-text mb-2">
		When a check fails, you and your team need timely and actionable insights to address any down time.
		Add Slack, SMS, email or Pagerduty: Checkly's alerts give you the right information whatever alerting medium you choose. Need more control? Webhooks give you full access to the JSON data we use ourselves for alerting.
		</p>
		<p class="lead-text mb-5">
		<cta-link text="Learn more" link="/product/alerting/" ></cta-link>
		</p>
	</div>
</div>
<div class="row justify-content-center header-part">
	<div class="col-sm-12 col-md-8">
	  <h2 class="section-header mt-1">Global coverage</h2>
	  <p class="lead-text mb-2">
		Get a clear picture of how your services perform for all your users around the world. Run your check from any of twenty data center locations spread over the Americas, EMEA and Asia Pacific.
		</p>
		<p class="lead-text mb-4">
		<cta-link text="Learn more" link="/product/alerting/" ></cta-link>
		</p>
	</div>
	<div class="justify-content-center lead-text text-center">
		<alternative-picture 
      className="text-center hero-image big-drop-shadow" 
      img="/product/api-monitoring/global-coverage-screenshot@2x.png" 
      alt="data centerlocations" 
      sizes="sm:700px md:865px"
    ></alternative-picture>
	</div>
</div>
</div>
