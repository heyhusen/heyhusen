<template>
  <article
    class="p-4 flex flex-col space-y-4 group transition duration-200 ease-in-out transform sm:hover:-translate-y-1 hover:bg-gray-200 sm:flex-row sm:items-center sm:shadow sm:space-x-4 sm:space-y-0 sm:rounded"
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
