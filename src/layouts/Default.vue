<template>
  <div class="bg-white">
    <Header />
    <transition name="fade" appear>
      <div>
        <slot />
      </div>
    </transition>
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

<style scoped>
.fade-enter-active {
  transition: all 0.5s ease;
}

.fade-enter {
  transform: translateY(20px);
  opacity: 0;
}
</style>
