<template>
  <Layout>
    <main>
      <div class="sm:p-4 xl:container xl:mx-auto">
        <div class="px-4 py-10 prose max-w-none sm:prose-lg lg:prose-xl">
          <div class="custom">
            <h1 class="font-mono">
              Blog<span class="text-secondary-500">_</span>
            </h1>
            Sometimes I also share something about this coding world, or just a
            random technology stuff.
          </div>
        </div>
        <div
          class="grid px-4 pb-4 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <BlogPost
            v-for="(article, index) in $page.articles.edges"
            :key="article.node.id"
            :index="index"
            :article="article"
          />
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

  articles: allBlogPost {
    edges {
      node {
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
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Blog',
  metaInfo() {
    return {
      title: 'Blog',
      meta: [
        // Meta Tag
        {
          name: 'description',
          content: 'My blog about coding and other stuff',
        },
        {
          name: 'keywords',
          content: 'Blog, Article, Laravel, Vue',
        },
        // Open Graph
        {
          property: 'og:title',
          content: 'Blog',
          vmid: 'og:title',
        },
        {
          property: 'og:url',
          content: `${this.$page.metadata.siteUrl}/blog`,
          vmid: 'og:url',
        },
        {
          property: 'og:type',
          content: 'website',
          vmid: 'og:type',
        },
        {
          property: 'og:description',
          content: 'My latest article',
          vmid: 'og:description',
        },
        {
          property: 'og:image',
          content: `${this.$page.metadata.siteUrl}/img/Blog.webp`,
          vmid: 'og:image',
        },
        {
          property: 'og:image:alt',
          content: 'Blog',
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
    BlogPost: () => import('~/components/Blog/Post.vue'),
  },
}
</script>
