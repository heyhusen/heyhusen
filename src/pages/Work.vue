<template>
  <Layout>

    <template slot="topdesc">
      <h1 class="title">
        Works<span class="has-text-danger">_</span>
      </h1>
      <h2 class="subtitle">
        Some of the published works I have done.
      </h2>
    </template>

    <p>Here are some of my works that I can show. But, not all of these have a Git repository.</p>
    <br>

    <Portfolio />
  </Layout>
</template>

<script>
import Portfolio from '~/components/Portfolio.vue'

export default {
  metaInfo: {
    title: 'Works'
  },
  components: {
    Portfolio
  }
}
</script>
