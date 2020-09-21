<template>
  <Layout>
    <main>
      <div class="sm:p-4 xl:container xl:mx-auto">
        <div
          class="px-4 py-10 prose prose-sm max-w-none sm:px-0 sm:prose sm:max-w-none md:prose-lg lg:prose-xl"
        >
          <h1 class="font-mono">
            Blog Tag: {{ $page.tag.title
            }}<span class="text-secondary-500">_</span>
          </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
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
  }
}
</page-query>

<script>
export default {
  name: 'BlogTag',
  metaInfo() {
    return {
      title: `Blog Tag: ${this.$page.tag.title}`,
    }
  },
  components: {
    BlogPost: () => import('~/components/Blog/Post.vue'),
  },
}
</script>
