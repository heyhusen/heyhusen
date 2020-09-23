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
  metaInfo: {
    title: 'Blog',
  },
  components: {
    BlogPost: () => import('~/components/Blog/Post.vue'),
  },
}
</script>
