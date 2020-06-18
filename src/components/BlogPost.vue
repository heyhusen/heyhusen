<template>
  <div class="container">
      <div class="columns">
        <div v-for="edge in $static.posts.edges" :key="edge.node.id" class="column is-one-quarter">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-2by1">
                      <a :href="edge.node.url" target="_blank" :title="edge.node.title"><img :src="edge.node.thumbnail" :alt="edge.node.title"></a>
                    </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <a :href="edge.node.url" target="_blank" :title="edge.node.title"><p class="title is-4">{{ edge.node.title }}</p></a>
                    <p class="subtitle is-7">Published on {{ edge.node.time | dateParse('YYYY-MM-DD HH:mm:ss') | dateFormat('MMM D, YYYY') }}</p>
                    <p>{{ edge.node.description }}</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<static-query>
query {
  posts: allBlogPosts {
    edges {
      node {
        id
        title
        description
        url
        time
        creator
        thumbnail
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'BlogPost'
}
</script>
