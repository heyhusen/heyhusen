<template>
  <div class="bg-white">
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  components: {
    Header: () => import('~/components/Header'),
    Footer: () => import('~/components/Footer'),
  },
}
</script>
