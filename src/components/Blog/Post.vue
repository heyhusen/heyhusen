<template>
  <article
    class="flex flex-row items-center overflow-hidden group transition duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-1 rounded shadow sm:items-stretch"
    :class="{
      'sm:col-span-2 lg:col-span-3 xl:col-span-4': index === 0,
      'sm:flex-col': index !== 0,
    }"
  >
    <div class="relative overflow-hidden flex-none pl-2 py-2 sm:p-0">
      <g-link :to="article.node.path" :title="article.node.title">
        <g-image
          class="object-cover h-20 w-20"
          :class="{
            'sm:h-full sm:w-48 md:w-64 lg:w-84 xl:w-96': index === 0,
            'sm:w-full sm:h-40 md:h-48 xl:h-56': index !== 0,
          }"
          :src="
            require(`!!assets-loader?width=500&height=500!~/assets/${article.node.featuredImage}`)
          "
          :alt="article.node.title"
        />
      </g-link>
    </div>
    <div
      class="p-2 prose max-w-none sm:prose-lg lg:prose-xl"
      :class="{ 'lg:prose-xl': index === 0 }"
    >
      <header class="custom">
        <g-link
          class="no-underline group-hover:underline"
          :title="article.node.title"
          :to="article.node.path"
          ><h2>
            {{ article.node.title }}
          </h2></g-link
        >
        <span
          class="text-xs sm:absolute sm:top-0 sm:left-0 sm:mt-2 sm:ml-2 sm:py-1 sm:px-2 sm:bg-blue-700 sm:text-gray-100 sm:rounded"
          >{{
            article.node.date
              | dateParse('YYYY-MM-DD HH:mm:ss')
              | dateFormat('MMM D, YYYY')
          }}</span
        >
      </header>
      <div
        v-if="index === 0"
        class="custom flex flex-row space-x-1 mt-2 hidden sm:block"
      >
        <g-link
          v-for="blogTag in article.node.tag"
          :key="blogTag.id"
          :to="blogTag.path"
        >
          <span
            class="py-1 px-2 bg-secondary-500 text-gray-100 rounded hover:bg-secondary-600"
            >#{{ blogTag.title }}</span
          ></g-link
        >
      </div>
      <div class="custom">
        <div
          v-if="index === 0"
          class="hidden sm:block"
          v-html="article.node.content.slice(0, 130)"
        ></div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    article: {
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
