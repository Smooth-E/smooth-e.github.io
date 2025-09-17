---
layout: mobile-app
title: NotABug Mobile
description: >-
    (Unmaintained) Material Design 3 compliant Android frontend application for notabug.org
screenshots:
  - anonymous-code.png
  - anonymous-people.png
  - anonymous-search.png
  - dialog-anonymous-browsing.png
  - dialog-credentials.png
  - dialog-login-failure.png
  - dialog-registration.png
  - login-screen-credentials.png
  - login-screen.png
  - login-screen-progress.png
  - login-screen-warning.png
  - mirror-gimp.png
  - mirror-scrolled.png
  - personal-loading-repositories.png
  - personal-mirrors.png
  - personal-organizations.png
  - repository.png
color_light: "82E4FF"
color_dark: "003155"
source_code: https://github.com/Smooth-E/notabug-mobile
---

This application was intended to be a nice Material Design 3 compliant frontend for the notabug.org website. It was my first attempt to write an application using Kotlin.

## Project's Fate

As it turns out, [notabug.org](https://notabug.org) uses Gogs as their hosting system, and every Gogs website should have a proper API, right? Even though I am not aware of how to use such API against [notabug.org](htttps://notabug.org), it's clearly certain that using the API directly is much more appropriate and reliable than parsing the contents of web pages (this is how the app currently works). Therefore, I decided to take a break in development of this app, seeing how its code gets more and more cluttered with tangled inheritance involving generics.

Recently I had discovered an application called [GitTouch](https://f-droid.org/repo/io.github.pd4d10.gittouch), the concept of which I really liked. So, maybe some time in the future I will create a similar frontend for several code-hosting platforms at once, using the knowledge I gained and designs I created during the development of NotABug Mobile.

## Implemented Features

- Browse anonymously or while logged in, the app will save your credentials if needed
- Personalized browsing
- Anonymous browsing
- Review individual repositories and mirrors
