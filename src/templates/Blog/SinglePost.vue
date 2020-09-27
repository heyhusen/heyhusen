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
            <div>
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
                :href="`https://github.com/${page.post.author.github}`"
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
  post: blogPost(id: $id) {
    id
    title
    path
    date
    excerpt
    content
    featuredImage
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
export default {
  name: 'BlogPostTemplate',
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
  components: {
    LatestBlogPost: () => import('~/components/Blog/LatestPost'),
  },
}
</script>
