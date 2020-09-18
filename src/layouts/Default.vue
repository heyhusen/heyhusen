<template>
  <div class="bg-gradient-to-br from-blue-600 to-purple-900">
    <Header />
    <div class="w-full px-0">
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
