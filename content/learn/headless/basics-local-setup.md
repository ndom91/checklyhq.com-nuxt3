---
title: Setting up Puppeteer or Playwright locally
date: 2020-06-20
author: Giovanni Rago
githubUser: ragog
tags:
  - basics

weight: 3
icon: getting-started.svg

menu:
  learn:
    parent: 'Getting Started'
---

import { Tab, Tabs, ReadFile, RunInCheckly } from '~/components/global'

Let's start by creating a new directory and navigating to it. Assuming you already have [Node.js](https://nodejs.org/) available in your local environment, installing Puppeteer or Playwright is achieved with just one instruction:

<!-- more -->

<Tabs>
<Tab title="Puppeteer">

```sh
$ npm i puppeteer
```

</Tab>
<Tab title="Playwright">

```sh
$ npm i playwright
```

</Tab>
</Tabs>

Puppeteer and Playwright come bundled with their respective browsers, so we now have all we need to run our first script. Let's create a script to navigate to our [test website](https://danube-webshop.herokuapp.com):

<Tabs>
<Tab title="Puppeteer">

<ReadFile filename="samples/puppeteer/basic-navigation.js" />

</Tab>
<Tab title="Playwright">

<ReadFile filename="samples/playwright/basic-navigation.js" />

</Tab>
</Tabs>

Run this example as follows:

```sh
$ node hello-world.js
```

Nothing much has happened, right? Remember: by default, Puppeteer and Playwright will run in headless mode! That means we won't see anything of what is happening in the browser when our script runs.

> Puppeteer/Playwright creates its own browser user profile, which it cleans up on every run. In other words: all runs will be sandboxed and not interfere with one another, as state is always fully reset at the end of a session.

When you are first writing and debugging your scripts, it is a good idea to disable headless mode so you can have a look at what your script is doing:

<Tabs>
<Tab title="Puppeteer">

```js
const browser = await puppeteer.launch({ headless: false })
```

<RunInCheckly script="/samples/puppeteer/basic-navigation.js" framework="puppeteer" />

</Tab>
<Tab title="Playwright">

```js
const browser = await chromium.launch({ headless: false })
```

<RunInCheckly script="/samples/playwright/basic-navigation.js" framework="playwright" />

</Tab>
</Tabs>

After executing the updated file, you will see Chromium starting up, only to shut down after an instant. Everything is working as expected! Our script is just so short, it runs almost instantaneously.

## Further reading

1. Getting started guides for [Puppeteer](https://pptr.dev) and [Playwright](https://playwright.dev/docs/intro#installation)
