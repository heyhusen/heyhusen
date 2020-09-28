<template>
  <Layout>
    <main>
      <div class="sm:p-4 xl:container xl:mx-auto">
        <div class="px-4 py-10 prose max-w-none sm:prose-lg lg:prose-xl">
          <h1 class="font-mono">
            Blog Tag: {{ $page.tag.title
            }}<span class="text-secondary-500">_</span>
          </h1>
        </div>
        <div
          class="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
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
query($id: ID) {
  metadata {
    siteName
    siteDescription
    siteUrl
  }

  articles: allBlogPost(filter: { tag: { contains: [$id] } }) {
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
        }
      }
    }
  }

  tag: blogTag(id: $id) {
    id
    title
    path
    og_image
  }
}
</page-query>

<script>
export default {
  name: 'BlogTag',
  metaInfo() {
    return {
      title: `Blog Tag: ${this.$page.tag.title}`,
      meta: [
        // Meta Tag
        {
          name: 'description',
          content: `All article tagged with ${this.$page.tag.title}`,
        },
        {
          name: 'keywords',
          content: `Blog, Article, ${this.$page.tag.title}`,
        },
        // Open Graph
        {
          property: 'og:title',
          content: `Blog Tag: ${this.$page.tag.title}`,
          vmid: 'og:title',
        },
        {
          property: 'og:url',
          content: `${this.$page.metadata.siteUrl}/${this.$page.tag.path}`,
          vmid: 'og:url',
        },
        {
          property: 'og:type',
          content: 'website',
          vmid: 'og:type',
        },
        {
          property: 'og:description',
          content: `All article tagged with ${this.$page.tag.title}`,
          vmid: 'og:description',
        },
        {
          property: 'og:image',
          content: `${this.$page.metadata.siteUrl}${this.$page.tag.og_image}`,
          vmid: 'og:image',
        },
        {
          property: 'og:image:alt',
          content: this.$page.tag.title,
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
