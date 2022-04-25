---
title: Intercepting requests
subTitle: Monitoring and manipulating web traffic
date: 2020-09-03
author:
  - Giovanni Rago
  - Jonathan Thompson
githubUser:
  - ragog
  - thompsonjonm
tags:
  - network

icon: best-practices.svg
menu:
  learn:
    parent: 'Best Practices'
---

import { Tab, Tabs, ReadFile, RunInCheckly } from '~/components/global'

When we browse the web, a series of HTTP requests and responses are exchanged between our browser and the pages we are visiting. There are scenarios in which it is useful to monitor or manipulate this traffic, instead of letting it happen as-is.

<!-- more -->

## Request interception

Request interception enables us to observe which requests and responses are being exchanged as part of our script's execution. For example, this is how we could print them out when we load our [test website](https://danube-webshop.herokuapp.com):

<Tabs>
<Tab title="Puppeteer" >

<ReadFile filename="samples/puppeteer/request-interception-read.js" />
<RunInCheckly script="/samples/puppeteer/request-interception-read.js" framework="puppeteer" />

</Tab>
<Tab title="Playwright">

<ReadFile filename="samples/playwright/request-interception-read.js" />
<RunInCheckly script="/samples/playwright/request-interception-read.js" framework="playwright" />

</Tab>
</Tabs>

We might want to intervene and filter the outgoing requests. For example, when [scraping web pages](/learn/headless/basics-scraping/), we might want to block unnecessary elements from loading in order to speed up the procedure and lower bandwidth usage.

In the following snippet we are going to abort all requests for images on our test website. We will identify them based off of their [`resourceType`](https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-httprequestresourcetype), while letting all other requests through without modification.

<Tabs>
<Tab title="Puppeteer" >

<ReadFile filename="samples/puppeteer/request-interception-block.js" />
<RunInCheckly script="/samples/puppeteer/request-interception-block.js" framework="puppeteer" />

</Tab>
<Tab title="Playwright">

<ReadFile filename="samples/playwright/request-interception-block.js" />
<RunInCheckly script="/samples/playwright/request-interception-block.js" framework="playwright" />

</Tab>
</Tabs>

As a result, you will see the website logo not being loaded.

![test site without images](/samples/images/request-interception-image.png)

Similarly, switching the `resourceType` to `stylesheet` would result in the target website loading without any CSS styling.

![test site without css](/samples/images/request-interception-css.png)

## Response interception

Isolating one or more software components from their dependencies makes them easier to test. We can do so by substituting interactions with such dependencies with simulated, simplified ones. This is also known as _stubbing_.

Both Playwright and Puppeteer make it easy for us, as for every request we can intercept we also can stub a response.

Every time we load it, our test website is sending a request to its backend to fetch a list of best selling books. For our example, we are going to intercept this response and modify it to return a single book we define on the fly.

<Tabs>
<Tab title="Puppeteer" >

<ReadFile filename="samples/puppeteer/response-interception.js" />

</Tab>
<Tab title="Playwright">

<ReadFile filename="samples/playwright/response-interception.js" />

</Tab>
</Tabs>

Here is what the homepage will look like with our stubbed response:

![test site with stubbed response](/samples/images/response-interception.png)

Run the above examples as follows:

```sh
node request-interception.js
```

## Takeaways

1. Puppeteer and Playwright give us control over outgoing HTTP requests.
2. Puppeteer and Playwright can easily stub HTTP responses.

## Further reading

1. Official documentation on this topic from [Puppeteer](https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-class-httprequest) and [Playwright](https://playwright.dev/#version=v1.3.0&path=docs%2Fnetwork.md&q=handle-requests).
2. [Mocks Aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html) by Martin Fowler.
