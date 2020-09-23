<template>
  <article
    class="bg-secondary-200 overflow-hidden flex flex-col shadow rounded group transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-center"
  >
    <div class="flex-none w-full md:w-2/5 md:py-4 lg:w-1/3">
      <g-image :src="work.node.featuredImage" :alt="work.node.title" />
    </div>
    <div class="p-4 prose max-w-none sm:prose-lg lg:prose-xl">
      <header class="custom">
        <h2>{{ work.node.title }}</h2>
      </header>
      <div class="custom">
        <div v-html="work.node.content"></div>
      </div>
      URL:
      <a
        :href="work.node.url"
        target="_blank"
        rel="nofollow"
        :title="work.node.title"
        >{{ work.node.url }}</a
      >
      <div class="custom space-x-1">
        <span
          v-for="workTag in work.node.tag"
          :key="workTag.id"
          class="py-1 px-2 bg-secondary-500 text-gray-100 rounded"
          >#{{ workTag.title }}</span
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PortfolioWork',
  props: {
    work: {
      type: [Array, Object],
      default: () => [],
    },
    index: {
      type: Number,
      default: 1,
    },
  },
}
</script>
