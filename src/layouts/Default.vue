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

  profile: blogAuthor(id: "1599831417602-hY18hTewn") {
    id
    title
    twitter
  }
}
</static-query>

<script>
export default {
  components: {
    Header: () => import('~/components/Header'),
    Footer: () => import('~/components/Footer'),
  },
  metaInfo() {
    return {
      meta: [
        // Meta Tag
        {
          name: 'author',
          content: this.$static.profile.title,
        },
        // Twitter Card
        {
          name: 'twitter:site',
          content: this.$static.profile.twitter,
        },
      ],
    }
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
