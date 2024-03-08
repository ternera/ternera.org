---
title: A little something to get you started CTF by Hackerone
date: 2023-12-13 00:00:00 -0800
featured_image: '/images/posts/hackerone-ctf.png'
---

Welcome to my writeup series about the Hacker101 CTF by Hackerone! This challenge is called “A little something to get you started” and it is in the trivial category.

Upon launching this challenge, we are met with the text “Welcome to level 0. Enjoy your stay.”

![Image 1](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*YFPnNl41MyRx53if153thw.png)

Checking the page source reveals some CSS that uses a background image called background.png.

```sh
<style> body { background-image: url(“background.png”); } </style>
```

We can manually append /background.png to the URL, which reveals the flag.

![Image 2](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*j78sG9rMVnVWdeR7pG4-0Q.png)

We may make a small commission from affiliate links and purchases using the link.
PS: While working on this, I listened to music from these sweet headphones from Amazon. You should check them out [here](https://amzn.to/4bCsb0Y)!
