---
title: E2E Login
subTitle: Automating one of the most common scenarios
date: 2020-06-25
author: Giovanni Rago
githubUser: ragog
tags:
  - e2e
  - login

icon: e2e.svg
menu:
  learn:
    parent: 'E2E'
---

import { Tab, Tabs, ReadFile } from '~/components/global'

When automating key site transactions, we inevitably stumble into login scenarios. In most cases, users need to be able to access accounts on a platform to get any value out of it. If they suddenly become unable to do so, we need to be informed as quickly as possible.

<!-- more -->

## Steps

In its simplest form, a login procedure requires the user to:

1. Navigate to the login form
2. Fill in a username/email field
3. Fill in a password field
4. Click a button to finalise the login

At the end of our test, we need to check if our login procedure has been successful. For example, we could verify that an element is shown that we know only appears for logged-in users.

On our [test site](https://danube-webshop.herokuapp.com/) this could look like the following:

<Tabs>
<Tab title="Puppeteer">

<ReadFile filename="samples/puppeteer/login.js" />

</Tab>
<Tab title="Playwright">

<ReadFile filename="samples/playwright/login.js" />

</Tab>
</Tabs>

Run this example as follows. Replace the username and password placeholder with your own credentials.

<Tabs>
<Tab title="MacOS">

```sh
USER_EMAIL=user@email.com USER_PASSWORD=supersecure1 node login.js
```

</Tab>
<Tab title="Windows">

```sh
SET USER_EMAIL=user@email.com
SET USER_PASSWORD=supersecure1
node login.js
```

</Tab>
</Tabs>

## Takeaways

1. Use environment variables to inject secrets.
2. You might need to wait for the navigation as you are redirected to the login screen/modal.
