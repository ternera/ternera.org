---
title: Deep Dive Into G2A Crypto Scams
date: 2024-10-21 00:00:00 -0800
featured_image: '/images/posts/g2a-bitcoin.png'
---

In this article, we will be taking a closer look into a G2A scam that I’ve seen on the internet. If you’re not familiar with the site, they provide game keys and skins for prices that are usually lower than the retail price. Please note that I do not condone purchasing from this website as their methods of obtaining keys is considered sketchy by some.

![G2A’s website.](https://miro.medium.com/v2/resize:fit:700/1*wHFryKLNE3WGTvq5_8krOw.png)

This does not change the fact that their site has an estimated visitor count of 35.34 million visitors every month, which means scammers will make attempts to scam its users.

![g2a.com website stats.](https://miro.medium.com/v2/resize:fit:465/1*F-88U37deHi5iEOmLhfNBw.png)

While browsing Reddit, I recently came across a post that claimed to be a “method” for obtaining free items on G2A by using a script to change your timezone and using Bitcoin as payment.

![Reddit post talking about the “method”.](https://miro.medium.com/v2/resize:fit:700/1*OyXxq-xs9OKozt8qafGZDw.png)

I was intrigued that such an exploit would be unpatched, so I decided to take a look at the script.

At first glance, the script suspiciously is using obfuscated Javascript.

![Obfuscated Javascript code.](https://miro.medium.com/v2/resize:fit:700/1*x6a6ZM4gjY4YIvlLdkm-fg.png)

Dropping the obfuscated code into a Javascript deobfuscator revealed that one of the variables contained a Bitcoin address! That seems suspicious for a script that is supposed to change your timezone.

![Deobfuscated Javascript code.](https://miro.medium.com/v2/resize:fit:700/1*W0s_kyqbfKFxkItwi2R0ZQ.png)

Further examination shows that this script simply changes the Bitcoin address on the G2A checkout page so your cryptocurrency is sent to the scammer/script creator instead of G2A. Upon checking the wallet’s recent transactions on the blockchain, I was relieved to see it has only received $20.

![Bitcoin scam wallet.](https://miro.medium.com/v2/resize:fit:700/1*ab8f3Y4Zn_TuBANVSfX6LA.png)

Let this be a lesson. Don’t try to use scripts or programs that claim to abuse bugs in systems. Behavior like that is dishonest and only will give you more problems to deal with down the line. While I find it comical that scammers are scamming people who are attempting to scam websites, this concept was fascinating to me and I thought I would share my findings. Stay honest!

![G2A checkout page using the extension “method”.](https://miro.medium.com/v2/resize:fit:700/1*E4l0MeXMNLqA9MkvU5cEqw.png)

![Report these posts to Reddit when you see them!](https://miro.medium.com/v2/resize:fit:519/1*aDvkmW8VC5RCCd0je-Bf-g.png)