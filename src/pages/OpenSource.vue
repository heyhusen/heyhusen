<template>
  <Layout>

    <template slot="topdesc">
      <h1 class="title">
        Open Source
      </h1>
      <h2 class="subtitle">
        This is how I contribute to this community.
      </h2>
    </template>

    <p>All my open source projects are published under the name <a :href="$static.metadata.datakramaUrl" target="_blank" title="Datakrama">Datakrama</a>. You can find more at the repository on <a href="https://github.com/datakrama" target="_blank">Github</a>.</p>
  </Layout>
</template>

<static-query>
query {
  metadata {
    datakramaUrl
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: 'Open Source'
  }
}
</script>
