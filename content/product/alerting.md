---
title: Alerting
---

<h1 class="text-center hero-text width-645"> We hope you'll never see this message... </h1>

<p class="text-center hero-sub hero-sub-center mb-lg-5">
...but things fail all the time. It's how you respond that makes the difference. Get quick and contextful alerts on any channel
you want. Know when your service fails before your customers do.
</p>

<div class="row justify-content-center text-center">
  <alternative-picture 
    className="text-center hero-image big-drop-shadow" 
    img="/product/alerting/error-screenshot@2x.webp" 
    alt="api error screenshot" 
    format="webp"
    sizes="sm:700px md:865px"
  ></alternative-picture>
</div>

<div class="gray-section">
<div class="container">
<div class="row justify-content-center">

<h2 class="text-center section-header">How it works</h2>

<feature-row
header="Set up your thresholds"
img="/product/alerting/error-howitworks-1@2x.webp"
format="webp">
The internet can be flaky. Sometimes a failing service is just fine 2 seconds later. **Dodge false positives** by specifying exactly when you should be alerted and how often you want to be reminded.

<div class="cta">
<cta-link text="Learn more" link="/docs/alerting/" />
</div>
</feature-row>

<feature-row
header="Pick your channels"
img="/product/alerting/error-howitworks-2@2x.webp"
format="webp">
Choose one or more of the available alerting channels. We have everything from **email, to Pagerduty, Opsgenie and SMS**. Need something custom? Use the webhooks or hook up <NuxtLink to="/docs/integrations/prometheus/">our Prometheus integration</NuxtLink> and roll your own alerting.

  <div class="cta">
    <cta-link text="Learn more" link="/docs/alerting/" />
  </div>
</feature-row>
</div>
</div>
</div>

<div class="row justify-content-center header-part mt-8 pb-9">
	<div class="col-sm-12 col-md-8">
	  <h2 class="section-header mt-1">About our webhooks...</h2>
	  <p class="lead-text mb-lg-2">
		We take webhooks very seriously. That's why we give you a full blown editor so you can hook up Checkly's alerts to basically any (legacy) system out there.
		</p>
		<p class="lead-text mt-1 mb-4">
		<cta-link text="Learn more" link="/docs/alerting/webhooks/" />
		</p>
	</div>
	<div class="img-w768">
		<alternative-picture 
      className="big-drop-shadow" 
      img="/product/alerting/webhooks-screenshot@2x.webp" 
      alt="webhooks editor" 
      format="webp"
      sizes="sm:700px"
    />
	</div>
</div>

<section class="grid-section">
  <div class="row">
    <sm-4-col-item header="No limits" body="We don't put any limits on the amount of email, Slack, Pagerduty or webhooks alerts you can send."></sm-4-col-item>
    <sm-4-col-item header="SSL alerting" body="We check your domain's SSL certificates for expiry and follow the exact same alerting patterns as all the other checks."></sm-4-col-item>
    <sm-4-col-item header="Double checking" body="By default, we retry any failing check from another data center location, just to be sure. "></sm-4-col-item>
  </div>
</section>
