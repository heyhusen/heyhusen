---
title: 'My Journey to Build This Site'
tag:
  - Gridsome
  - Netlify CMS
  - Tailwind CSS
  - Vue
image: uploads/georgie-cobbs-muohbrfgeqy-unsplash.jpg
toc: false
images: []
date: 2021-07-08T16:00:44+07:00
draft: false
---

After a lot of trial and error, I finally decided on the right stack for this site. Here's the story.

Initially this site was built in a complicated way. Using multiple APIs as data sources. Even blogs are on separate domains. Here are the details that I attached:

1. Gridsome for Jamstack
2. Buefy for components
3. The profile part is taken from Gravatar
4. Portfolios are drawn from the Laravel backend
5. The blog section is taken from Dev.to and redirected to another domain for the blog

In fact, I don't keep my portfolio and blog sections static because I want real-time data. How ridiculous I was then. The design of this site in those days was not as simple as it is now.

Until in the end I decided to make this site a full Jamstack. Here are the changes:

1. I still use Gridsome, the difference is that now I use Tailwind as the CSS framework.
2. Profiles are still drawn from gravatar.
3. The blog and portfolio sections are made static from NetlifyCMS.

Now the site design is simpler, everything is completely static. Access time is also faster.
I've also worked on some UX basics to make the site everyone-friendly. If you feel something is missing or wrong with this site, please comment below.
