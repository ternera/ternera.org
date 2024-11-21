---
title: Easiest Way to Install Nextcloud on TrueNAS
date: 2024-10-21 00:00:00 -0800
featured_image: '/images/posts/nextcloud.png'
---

I was recently searching for a simple and straightforward solution to try out Nextcloud, an open source file-sharing platform that can be selfhosted. Interestingly, I observed that TrueNAS has an “Apps” section that allows you to install a variety of apps in your TrueNAS instance.

![TrueNAS sidebar.](https://miro.medium.com/v2/resize:fit:504/format:webp/1*sf2Uhs5UH19ZelYjc_u81Q.png)

Apparently there are 107 apps that can be installed!

![TrueNAS app discovery page.](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JR230nOWdnibz6XPlZxyxA.png)

Searching for “nextcloud” brings up the app in the search results.

![Seaching for Nextcloud.](https://miro.medium.com/v2/resize:fit:1130/format:webp/1*PTB4Wsy9vqMTugsm6uFlhw.png)

After clicking on the icon, all I had to do was click the “Install” button.

![Nextcloud on the applications page.](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*w8zBuNguTpAXz6QYIYVU9g.png)

During the install process, there are a variety of fields to look through. I kept everything default, including the port at 9001.

![Nextcloud installation fields.](https://miro.medium.com/v2/resize:fit:932/format:webp/1*FRsBq4-xb5ibvxOY2EiDLQ.png)![Keeping Nextcloud at the default port: 9001.](https://miro.medium.com/v2/resize:fit:918/format:webp/1*i0hcjvtIfvR_i2tZGfSNQA.png)

Once this was completed, I clicked the “Install” button at the bottom of the screen. This began a quick installation and deployment process.

![Nextcloud is installing.](https://miro.medium.com/v2/resize:fit:784/format:webp/1*arm_mD6e94MPPX4XqvHalw.png)

After the deployment finished, I was able to open a new browser tab and type in the IP address followed by the port. It appears that it is also possible to click the “Web Portal” button on the page.

![Nextcloud Application Info.](https://miro.medium.com/v2/resize:fit:880/format:webp/1*cZNht1JfcFz7YI8-pNRe3A.png)

I was then greeted by the Nextcloud login screen and was able to log in with the credentials I configured during the install!

![Nextcloud login page.](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*T6LtqeytKh6fUl_seqXDRg.png)![Nextcloud interface.](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UZS_Ki94prlx9pj-dz5acw.png)

Something to note is that the default files are stored in the following path:

```
/mnt/Homer/ix-applications/releases/nextcloud/volumes/ix_volumes/html/core/skeleton
```

From there, the default files and folders can be changed or removed so they are not generated when creating new users.

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*89OYB3fdCcqWu71rnnVpxw.png)

And that’s it! If you need any details about the newly installed app, you can see them from the installed applications tab. If you have any questions, please drop a comment below!

![Application details.](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*e9jk1NCui3bhZEuyXoDgnA.png)