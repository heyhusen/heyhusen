<template>
  <Layout>
    <main>
      <div class="sm:p-4 max-w-4xl mx-auto">
        <div class="px-4 py-10 prose max-w-none sm:prose-lg lg:prose-xl">
          <div>
            <span class="custom">
              <h1 class="font-mono">
                Works<span class="text-secondary-500">_</span>
              </h1></span
            >
            Some of the projects I've worked on. For other projects, you can
            check out my
            <a :href="$page.profile.github" title="Github" target="_blank"
              >github repository</a
            >.
          </div>
        </div>
        <div class="grid grid-cols-1 p-4 sm:space-y-4">
          <PortfolioWork
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
  metadata {
    siteName
    siteDescription
    siteUrl
  }

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
        tag {
          id
          title
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Portfolio',
  metaInfo() {
    return {
      title: 'Portfolio',
      meta: [
        // Meta Tag
        {
          name: 'description',
          content: 'My latest portfolio',
        },
        {
          name: 'keywords',
          content: 'Portfolio, Project, Laravel, Vue',
        },
        // Open Graph
        {
          property: 'og:title',
          content: 'Portfolio',
          vmid: 'og:title',
        },
        {
          property: 'og:url',
          content: `${this.$page.metadata.siteUrl}/work`,
          vmid: 'og:url',
        },
        {
          property: 'og:type',
          content: 'website',
          vmid: 'og:type',
        },
        {
          property: 'og:description',
          content: 'My latest portfolio',
          vmid: 'og:description',
        },
        {
          property: 'og:image',
          content: `${this.$page.metadata.siteUrl}/img/Work.webp`,
          vmid: 'og:image',
        },
        {
          property: 'og:image:alt',
          content: 'Portfolio',
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
    PortfolioWork: () => import('~/components/Portfolio/Work'),
  },
}
</script>
