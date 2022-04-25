---
title: E2E Account Settings
subTitle: Modifying account settings with a file upload
date: 2020-07-22
author: Giovanni Rago
githubUser: ragog
tags:
  - e2e
  - file upload

icon: e2e.svg
menu:
  learn:
    parent: 'E2E'
---

import { Tab, Tabs, ReadFile } from '~/components/global'

Most services allow users to manage their account settings. These oftentimes have far-reaching implications on how the user experiences the platform. Verifying that the account settings can be viewed and modified is key in making sure we are offering a smooth service.

<!-- more -->

## Steps

Account properties to verify can run the gamut from simple text to connected third party services. In this example, we will focus on a popular case: changing a profile image by uploading one of our own.

On our [test site](https://danube-webshop.herokuapp.com/), such a test could look as follows:

<Tabs>
<Tab title="Puppeteer">

<ReadFile filename="samples/puppeteer/file-upload.js" />

</Tab>
<Tab title="Playwright">

<ReadFile filename="samples/playwright/file-upload.js" />

</Tab>
</Tabs>

<Tabs>
<Tab title="MacOS">

```sh
USER_EMAIL=user@email.com USER_PASSWORD=supersecure1 FILE_PATH=file.jpg node file-upload.js
```

</Tab>
<Tab title="Windows">

```sh
SET USER_EMAIL=user@email.com
SET USER_PASSWORD=supersecure1
SET FILE_PATH=file.jpg
node file-upload.js
```

</Tab>
</Tabs>

Here, we are simply checking for a message giving us feedback on the status of the upload. Depending on the website we are testing, it might be possible to also download the profile image afterwards to run a comparison locally for a more robust check.

## Takeaways

1. Use environment variables to inject secrets.
2. Use `uploadFile` (Puppeteer) or `setInputFiles` (Playwright) to upload the file.
3. If possible, download the file from the platform and compare it with the one that was just uploaded.

## Further reading

1. Official documentation on file upload with [Puppeteer](https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-elementhandleuploadfilefilepaths) and [Playwright](https://playwright.dev/#version=v1.3.0&path=docs%2Fapi.md&q=elementhandlesetinputfilesfiles-options).
