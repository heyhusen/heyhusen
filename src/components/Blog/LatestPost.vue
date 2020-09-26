<template>
  <div class="lg:rounded lg:shadow">
    <header class="px-4 prose max-w-none sm:prose-lg lg:prose-xl">
      <h3 class="py-3 w-auto font-bold border-b-2 border-secondary-500">
        Latest Post
      </h3>
    </header>
    <ul class="px-4 list-none divide-y divide-gray-400 xl:text-xl">
      <li
        v-for="article in $static.articles.edges"
        :key="article.node.id"
        class="py-4 group sm:flex sm:justify-between sm:space-x-2"
      >
        <div>
          <g-link
            class="group-hover:underline"
            :to="article.node.path"
            :title="article.node.title"
            >{{ article.node.title }}</g-link
          >
          <span class="block text-sm"
            >{{ new Date(article.node.date).toLocaleString() }}
          </span>
        </div>
        <g-image
          class="hidden flex-none object-cover h-20 w-20 rounded sm:block"
          :src="
            require(`!!assets-loader?width=100&height=100!~/assets//${article.node.featuredImage}`)
          "
        />
      </li>
    </ul>
  </div>
</template>

<static-query>
query {
  articles: allBlogPost(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        date
        path
        featuredImage
      }
    }
  }
}
</static-query>

<script>
export default {
  name: 'LatestBlogPost',
}
</script>
