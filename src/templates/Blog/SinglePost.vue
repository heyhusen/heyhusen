<template>
  <Layout :hero="false">
    <main>
      <div
        class="divide-y divide-gray-400 space-y-4 lg:flex lg:divide-y-0 lg:space-x-4 xl:container xl:mx-auto"
      >
        <section class="divide-y divide-gray-400 lg:pl-4">
          <g-image
            class="object-cover h-48 sm:h-64 w-full"
            :src="
              require(`!!assets-loader?width=700!~/assets/${$page.post.featuredImage}`)
            "
          ></g-image>
          <article
            class="px-4 pb-1 divide-y divide-gray-400 prose max-w-none sm:prose-lg lg:prose-xl"
          >
            <header class="py-4 custom">
              <h1>{{ $page.post.title }}</h1>
              <p>
                Published at
                {{ new Date($page.post.date).toLocaleString() }}
              </p>
            </header>
            <div class="pt-4">
              <div class="custom text-base space-x-1">
                Share:
                <ShareNetwork
                  network="facebook"
                  :url="$page.metadata.siteUrl + $page.post.path"
                  :title="$page.post.title"
                  :quote="$page.post.excerpt"
                  :hashtags="tags"
                  class="cursor-pointer sm:bg-gray-300 sm:py-2 sm:pr-3 sm:pl-1 sm:rounded sm:hover:bg-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-facebook inline-block h-6 w-6 fill-current text-facebook"
                  >
                    <path
                      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    ></path>
                  </svg>
                  <span class="hidden sm:inline-block">Facebook</span>
                </ShareNetwork>
                <ShareNetwork
                  network="twitter"
                  :url="$page.metadata.siteUrl + $page.post.path"
                  :title="$page.post.title"
                  :description="$page.post.excerpt"
                  :hashtags="tags"
                  :twitter-user="$page.post.author.twitter"
                  class="cursor-pointer sm:bg-gray-300 sm:py-2 sm:pr-3 sm:pl-1 sm:rounded sm:hover:bg-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-twitter inline-block h-6 w-6 fill-current text-twitter"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    ></path>
                  </svg>
                  <span class="hidden pl-1 sm:inline-block">Twitter</span>
                </ShareNetwork>
                <ShareNetwork
                  network="linkedin"
                  :url="$page.metadata.siteUrl + $page.post.path"
                  :title="$page.post.title"
                  :description="$page.post.excerpt"
                  class="cursor-pointer sm:bg-gray-300 sm:py-2 sm:pr-3 sm:pl-1 sm:rounded sm:hover:bg-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-linkedin inline-block h-6 w-6 fill-current text-linkedin"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    ></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span class="hidden pl-1 sm:inline-block">LinkedIn</span>
                </ShareNetwork>
              </div>
              <div>
                <div v-html="$page.post.content"></div>
              </div>
              <p
                class="text-gray-100 flex flex-wrap text-xs sm:text-sm md:text-base xl:text-lg"
              >
                <g-link
                  v-for="label in $page.post.tag"
                  :key="label.id"
                  :to="label.path"
                  class="bg-secondary-500 hover:bg-secondary-600 py-1 px-2 rounded m-1"
                  >#{{ label.title }}</g-link
                >
              </p>
            </div>
          </article>
          <div
            class="mt-4 p-4 flex flex-col space-y-1 space-x-1 sm:flex-row md:space-x-4"
          >
            <g-image
              class="h-16 w-auto mx-auto md:h-24 sm:mx-0 lg:h-32 rounded-full"
              :src="
                require(`!!assets-loader?width=150&height=150&quality=90!~/assets/${$page.post.author.image}`)
              "
            ></g-image>
            <div class="text-center block sm:text-left lg:text-xl">
              <a
                class="underline block"
                :href="$page.post.author.link"
                :title="$page.post.author.name"
                target="_blank"
                ><h4 class="font-bold">{{ $page.post.author.title }}</h4></a
              >
              <a
                class="block underline"
                :href="'mailto:' + $page.post.author.email"
              >
                {{ $page.post.author.email }}
              </a>
              <p class="block">{{ $page.post.author.blurb }}</p>
            </div>
          </div>
          <div class="p-4">
            <Disqus shortname="husenblog" :identifier="$page.post.id" />
          </div>
        </section>
        <aside
          class="flex-none divide-y divide-gray-400 lg:divide-y-0 lg:space-y-4 lg:w-2/5 lg:pr-4 lg:text-xl xl:w-1/3"
        >
          <div class="lg:rounded lg:shadow">
            <header class="px-4 prose max-w-none sm:prose-lg lg:prose-xl">
              <h3 class="py-3 w-auto font-bold border-b-2 border-secondary-500">
                Find me
              </h3>
            </header>
            <div class="p-4 space-x-2">
              <a
                :href="`https://github.com/${$page.post.author.github}`"
                target="_blank"
                title="Gtihub"
                rel="nofollow"
              >
                <span class="bg-gray-200 py-1 px-2 rounded hover:bg-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github stroke-current text-gray-800 inline-block h-5 w-5"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                  </svg>
                  Github
                </span>
              </a>
              <a
                :href="`https://twitter.com/${$page.post.author.twitter}`"
                target="_blank"
                title="Twitter"
                rel="nofollow"
              >
                <span class="bg-gray-200 py-1 px-2 rounded hover:bg-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-twitter stroke-current text-gray-800 inline-block h-5 w-5"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    ></path>
                  </svg>
                  Twitter
                </span>
              </a>
            </div>
          </div>
          <LatestBlogPost />
        </aside>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query($id: ID) {
  metadata {
    siteName
    siteDescription
    siteUrl
  }

  post: blogPost(id: $id) {
    id
    title
    path
    date
    excerpt
    content
    featuredImage
    og_image
    tag {
      id
      title
      path
    }
    author {
      id
      title
      blurb
      email
      link
      github
      twitter
      image
      content
    }
  }
}
</page-query>

<script>
import map from 'lodash.map'

export default {
  name: 'BlogPostTemplate',
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        // Meta Tag
        {
          name: 'description',
          content: this.$page.post.excerpt,
        },
        {
          name: 'keywords',
          content: this.tags,
        },
        // Open Graph
        {
          property: 'og:title',
          content: this.$page.post.title,
          vmid: 'og:title',
        },
        {
          property: 'og:url',
          content: `${this.$page.metadata.siteUrl}/${this.$page.post.path}`,
          vmid: 'og:url',
        },
        {
          property: 'og:type',
          content: 'article',
          vmid: 'og:type',
        },
        {
          property: 'og:article:published_time ',
          content: this.$page.post.date,
          vmid: 'og:article:published_time ',
        },
        {
          property: 'og:article:author',
          content: this.$page.post.author.title,
          vmid: 'og:article:author',
        },
        {
          property: 'og:article:tag',
          content: this.tags,
          vmid: 'og:article:tag',
        },
        {
          property: 'og:description',
          content: this.$page.post.excerpt,
          vmid: 'og:description',
        },
        {
          property: 'og:image',
          content: `${this.$page.metadata.siteUrl}${this.$page.post.og_image}`,
          vmid: 'og:image',
        },
        {
          property: 'og:image:alt',
          content: this.$page.post.title,
          vmid: 'og:image:alt',
        },
        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ],
    }
  },
  components: {
    LatestBlogPost: () => import('~/components/Blog/LatestPost'),
  },
  data() {
    return {
      tags: '',
    }
  },
  mounted() {
    this.tags = map(this.$page.post.tag, 'title').join(', ')
  },
}
</script>
