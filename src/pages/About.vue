<template>
  <Layout>
    <main>
      <div class="sm:p-8 max-w-4xl mx-auto">
        <div
          class="px-4 py-10 prose prose-sm max-w-none sm:px-0 sm:prose sm:max-w-none md:prose-lg lg:prose-xl"
        >
          <h1 class="font-mono">
            About me<span class="text-secondary-500">_</span>
          </h1>
        </div>
        <div
          class="px-4 pb-10 prose max-w-none sm:px-0 sm:prose-lg lg:prose-xl"
        >
          <g-image
            class="float-right ml-4 h-full w-24 overflow-hidden sm:w-48 lg:w-64"
            :src="
              require(`!!assets-loader?width=500&height=500!~/assets/img/avatar/${$page.gravatar.hash}.png`)
            "
            :alt="$page.gravatar.name.formatted"
          />
          <p>
            I am a web developer. I live in a beautiful little town,
            {{ $page.gravatar.currentLocation }}. Another scheduled job of mine
            is watching MotoGP races. Yes, I am a MotoGP fan. In my spare time,
            I like to watch movies, play games, or ride motorbikes. Sometimes, I
            also write a <g-link to="/blog">blog</g-link>.
          </p>
          <h2>Nickname</h2>
          <p>
            As you know from my <g-link to="/">homepage</g-link>, my name is
            Ahmad Husen. My real nickname is Husen. Many people often call me
            Ahmad because of my name. Though Ahmad is only my first name. If I
            am with my brother in the same place, and someone calls me Ahmad, it
            will be confusing. Because we have the same first name, Ahmad. I
            just don't want this to become a habit. I would really appreciate it
            if I am called by my (real) nickname, Husen. Only Husen, not Husein,
            especially Husain.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mood-happy inline-block stroke-current text-yellow-600 h-5 sm:h-8 xl:h-10"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
              <path d="M8 13a4 4 0 1 0 8 0m0 0H8" />
            </svg>
          </p>
          <h2>History</h2>
          <p>
            When I was in junior high school, I started my first blog on
            MyWapBlog. A mobile blogging platforms were very popular back then,
            at least in Indonesia. Until one day when I got bored with my blog
            theme, I found that MyWapBlog allows its users to customize their
            blog using CSS. From then on, I started learning CSS and fell in
            love with web development.
          </p>
          <p>
            Then, I created a new blog on Blogger and learned HTML syntax and
            simple JavaScript. My 'blogging journey' ended when I met WordPress.
            A very popular CMS which is used for most of the websites out there.
            In WordPress, I finally learned my first programming language, PHP.
            I even learned jQuery and simple SEO tricks while creating a
            WordPress theme for my blog.
          </p>
          <p>
            In 2016, I got my first contract at PT. Mabito Karya, a company
            based in Bandung, Indonesia. Then, I started my freelance career in
            2018, while still working as a staff at this company.
          </p>
          <h2>Web Development</h2>
          <p>
            Since 2016, I have always chosen
            <a href="https://www.php.net/" target="_blank" title="PHP">PHP</a>
            as my programming language, and
            <a href="https://laravel.com/" target="_blank" title="Laravel"
              >Laravel</a
            >
            for the framework. I usually build web applications using a
            monolithic stack with tools like
            <a href="https://www.php.net/" target="_blank" title="PHP">PHP</a>,
            HTML, CSS,
            <a href="https://jquery.com/" title="jQuery" target="_blank"
              >jQuery</a
            >, and
            <a href="https://www.mysql.com/" title="MySQL" target="_blank"
              >MySQL</a
            >. However, to keep up with the existing technology, I now choose
            <a href="https://vuejs.org/" title="Vue.js" target="_blank"
              >Vue.js</a
            >
            and
            <a
              href="https://tailwindcss.com/"
              title="Tailwind CSS"
              target="_blank"
              >Tailwind CSS</a
            >
            for the frontend. For future-proof purposes, I also always build
            APIs for my backend. It will make web applications run faster and
            easier to maintain.
          </p>
          <p>
            As a developer, I always keep my code clean, easier to read, and
            uncomplicated. I always thought that automated testing was a must.
            I'm also still trying to adapt to my TDD habits. To continue
            improving my skills, I always learn from reading articles and books
            or watching screencasts related to the latest technology.
          </p>
        </div>
        <div class="flex justify-center p-4">
          <g-link
            class="no-underline bg-primary-500 text-gray-300 py-2 px-3 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:bg-primary-700 hover:text-gray-400 xl:py-3 xl:px-4"
            to="/#contact-form"
            >More question?</g-link
          >
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
  }

  gravatar(id: "187660235") {
    id
    hash
    name {
      formatted
      familyName
      givenName
    }
    currentLocation
    thumbnailUrl
    aboutMe
    accounts {
      shortname
      display
      url
    }
  }
}
</page-query>

<script>
export default {
  name: 'About',
  metaInfo() {
    return {
      title: 'About me',
      meta: [
        // Meta Tag
        {
          name: 'description',
          content: 'About Ahmad Husen',
        },
        {
          name: 'keywords',
          content: 'Profile, About, Husen',
        },
        // Open Graph
        {
          property: 'og:title',
          content: 'About me',
          vmid: 'og:title',
        },
        {
          property: 'og:url',
          content: `${this.$page.metadata.siteUrl}/about`,
          vmid: 'og:url',
        },
        {
          property: 'og:type',
          content: 'website',
          vmid: 'og:type',
        },
        {
          property: 'og:description',
          content: 'About me, my history, and my job.',
          vmid: 'og:description',
        },
        {
          property: 'og:image',
          content: `${this.$page.metadata.siteUrl}/img/About.webp`,
          vmid: 'og:image',
        },
        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ],
    }
  },
}
</script>
