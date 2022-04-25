---
title: E2E Checkout
subTitle: Filling a basket and completing the transaction
date: 2020-07-02
author: Giovanni Rago
githubUser: ragog
tags:
  - e2e

icon: e2e.svg
menu:
  learn:
    parent: 'E2E'
---

import { Tab, Tabs, ReadFile } from '~/components/global'

Another key website flow that needs to be closely monitored is any sort of checkout. You want to be 100% sure your users are able to pay for goods or services you might be offering, at any given time.

<!-- more -->

## Steps

Checkout procedures can vary dramatically depending on what is being bought or sold. A few constants will be:

1. a shopping basket page / section, in cases where multiple items can be bought - this is normally where the checkout procedure starts
2. a page to enter or edit billing and, where applicable, shipping information
3. a summary to review all the different parameters of the purchase

Modelled on the above structure is the following example running against our test website. We will add a few products to the shopping cart, then proceed until the summary screen shows up and verify that the transaction has been confirmed. Here we can get creative and, for example, iterate through a number of products to fill the cart:

<Tabs>
<Tab title="Puppeteer">

<ReadFile filename="samples/puppeteer/checkout.js" />

</Tab>
<Tab title="Playwright">

<ReadFile filename="samples/playwright/checkout.js" />

</Tab>
</Tabs>

Run this example as follows:

<Tabs>
<Tab title="MacOS">

```sh
PRODUCTS_NUMBER=3 node checkout.js
```

</Tab>
<Tab title="Windows">

```sh
SET PRODUCTS_NUMBER=3
node checkout.js
```

</Tab>
</Tabs>

Note: In some cases, users will need to [log in](e2e-login/) before they can proceed to a purchase. When users are allowed to buy both with and without having a pre-existing account on the platform, it might be worthwhile to test both flows separately.

## Limitations

Checkout is a peculiar flow: unlike Login and others, it almost always involves an actual exchange of currency. This is usually not an issue in pre-production environments, as payment providers are not yet involved or are set up in sandbox/test mode. For Production, low-value transactions can be performed with low frequency and immediately voided after the test has been completed.

## Takeaways

1. Checkout flows will vary depending on what is being purchased.
2. Remember to check different flows (e.g. with and without login) if needed.
3. Additional care is needed on production systems as real transactions will take place.
