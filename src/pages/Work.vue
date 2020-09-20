<template>
  <Layout>
    <main class="bg-white text-gray-700">
      <div class="sm:p-8 max-w-4xl mx-auto">
        <div
          class="px-4 py-10 prose prose-sm max-w-none sm:px-0 sm:prose sm:max-w-none md:prose-lg lg:prose-xl"
        >
          <div class="custom">
            <h1 class="font-mono">
              Works<span class="text-secondary-500">_</span>
            </h1>
            Some of the projects I've worked on. For other projects, you can
            check out my
            <a :href="$page.profile.github" title="Github" target="_blank"
              >github repository</a
            >.
          </div>
        </div>
        <div class="grid grid-cols-1 sm:space-y-4">
          <Portfolio
            v-for="(work, index) in $page.works.edges"
            :key="work.node.id"
            :work="work"
            :index="index"
          />
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query {
  profile: blogAuthor(id: "1599831417602-hY18hTewn") {
    id
    github
  }

  works: allPortfolioWork {
    edges {
      node {
        id
        title
        path
        url
        featuredImage
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Work',
  metaInfo: {
    title: 'Work',
  },
  components: {
    Portfolio: () => import('~/components/Portfolio/Work'),
  },
}
</script>
