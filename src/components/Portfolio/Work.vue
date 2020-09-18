<template>
  <article
    class="p-4 flex flex-col space-y-4 sm:flex-row sm:items-center sm:shadow sm:space-x-4 sm:space-y-0 group sm:rounded"
  >
    <div class="overflow-hidden flex-none w-full sm:w-2/5">
      <g-image
        :src="work.node.featuredImage"
        width="500"
        height="500"
        fit="contain"
        :alt="work.node.title"
      />
    </div>
    <div
      class="prose prose-sm max-w-none sm:prose sm:max-w-none md:prose-lg lg:prose-xl"
    >
      <header class="custom">
        <h2>{{ work.node.title }}</h2>
      </header>
      <div class="-my-4 sm:-my-6" v-html="work.node.content"></div>
      URL:
      <a
        :href="work.node.url"
        target="_blank"
        rel="nofollow"
        :title="work.node.title"
        >{{ work.node.url }}</a
      >
    </div>
  </article>
</template>

<script>
export default {
  name: 'PortfolioWork',
  props: {
    work: {
      type: Array,
      default: () => [],
    },
    index: {
      type: Number,
      default: 1,
    },
  },
}
</script>
