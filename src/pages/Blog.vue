<template>
  <Layout>

    <template slot="topdesc">
      <h1 class="title">
        Blog
      </h1>
      <h2 class="subtitle">
        Sometimes I also share something about this coding world.
      </h2>
    </template>

    <p>These are some of the latest articles on my blog. You can find more at <a href="https://blog.husenis.me" target="_blank" title="Husen Blog">https://blog.husenis.me</a>.</p>
    <br>
    
    <BlogPost/>

  </Layout>
</template>

<script>
import BlogPost from '~/components/BlogPost.vue'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    BlogPost
  }
}
</script>
