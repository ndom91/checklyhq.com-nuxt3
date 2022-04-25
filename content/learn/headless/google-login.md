---
title: Login with Google
subTitle: An example of social login
date: 2020-06-22
author: Tim Nolet
githubUser: tnolet
tags:
  - login
  - e2e

icon: e2e.svg
menu:
  learn:
    parent: 'E2E'
---

import { Tab, Tabs, ReadFile } from '~/components/global'

Social login using your personal Google or Google Gsuite account is a common use case for many login scenarios.

<!-- more -->

## Steps

1. We start at a site that offers Google as an authentication provider. In this case we use [Stack Overflow](https://stackoverflow.com/).
2. We fetch the login page and click the "Login with Google" button.
3. We are redirect to Google.
4. We provide the username and password, injected by using environment variables.
5. We are redirected back to the starting.

<Tabs>
<Tab title="Puppeteer">

<ReadFile filename="samples/puppeteer/google-login.js" />

</Tab>
<Tab title="Playwright">

<ReadFile filename="samples/playwright/google-login.js" />

</Tab>
</Tabs>

Run this example as follows. Replace the username and password placeholder with your own credentials.

<Tabs>
<Tab title="MacOS">

```sh
GOOGLE_USER=username GOOGLE_PWD=password node mslive-login.js
```

</Tab>
<Tab title="Windows">

```sh
SET GOOGLE_USER=username
SET GOOGLE_PWD=password
node google-login.js
```

</Tab>
</Tabs>

> This example does not work when you have 2-factor authentication enabled, and you might trigger a recaptcha check.

## Takeaways

1. Use environment variables to inject secrets.
2. Wait for the navigation as your are redirected to Google.
3. Wait for the navigation as you are redirected back to the start site.
