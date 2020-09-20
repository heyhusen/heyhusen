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
          class="px-4 pb-10 prose prose-sm max-w-none sm:px-0 sm:prose sm:max-w-none md:prose-lg lg:prose-xl"
        >
          <g-image
            class="float-right ml-4 h-full w-24 overflow-hidden sm:w-48 lg:w-64"
            :src="$page.gravatar.thumbnailUrl + '?s=512'"
            :alt="$page.gravatar.name.formatted"
          />
          <p>
            I am a web developer. I live in a beautiful little town,
            {{ $page.gravatar.currentLocation }}. In my spare time, I like to
            watch movies, play games, or ride motorbikes. Sometimes, I also
            write a <g-link to="/blog">blog</g-link>. And oh yes, I love cats
            too.
          </p>
          <h2>Nickname</h2>
          <p>
            As you know from my <g-link to="/">homepage</g-link>, my name is
            Ahmad Husen. My real nickname is Husen. Many people often call me
            Ahmad because of my name. Though Ahmad is only my first name. If I
            am with my brother in the same place, and someone calls me Ahmad, it
            will be confusing. Because we have the same first name, Ahmad. I
            just don't want this to become a habit. I would really appreciate it
            if I am called by my nickname, Husen. Only Husen, not Husein,
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
            blog using CSS. Yes, back then it was only CSS. From then on, I
            started learning CSS and fell in love with web development.
          </p>
          <p>
            Then, I created a new blog on Blogger and learned HTML syntax and
            simple JavaScript. My 'blogging journey' ended when I met WordPress.
            A very popular CMS which is used for most of the websites out there.
            In WordPress, I finally learned my first programming language, PHP.
            I even learned jQuery and simple SEO tricks while creating a
            WordPress theme for my blog.
          </p>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query {
  gravatar(id: "187660235") {
    name {
      formatted
      familyName
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
  metaInfo: {
    title: 'About me',
  },
}
</script>
