<template>
  <article
    class="flex flex-col items-stretch overflow-hidden group transition duration-200 ease-in-out hover:shadow-lg hover:border-gray-300 sm:rounded sm:shadow"
    :class="{
      'sm:flex-row sm:col-span-2 lg:col-span-3 xl:col-span-4': index === 0,
    }"
  >
    <div class="relative overflow-hidden flex-none">
      <g-link :to="article.node.path" :title="article.node.title">
        <g-image
          class="object-cover w-full transition duration-200 ease-in-out transform group-hover:scale-125"
          :class="{
            'h-40 sm:h-72 md:h-84 sm:w-64 md:w-84 lg:w-96 xl:w-128':
              index === 0,
            'h-40 sm:h-48 xl:h-56': index !== 0,
          }"
          :src="'/' + article.node.featuredImage"
          width="500"
          height="500"
          fit="contain"
          :alt="article.node.title"
        />
      </g-link>
      <span
        class="absolute text-xs top-0 left-0 mt-2 ml-2 py-1 px-2 bg-blue-700 text-gray-100 rounded"
        >{{
          article.node.date
            | dateParse('YYYY-MM-DD HH:mm:ss')
            | dateFormat('MMM D, YYYY')
        }}</span
      >
    </div>
    <div
      class="p-2 prose prose-sm max-w-none sm:p-4 sm:prose sm:max-w-none md:prose-lg"
      :class="{ 'lg:prose-xl': index === 0 }"
    >
      <header class="custom">
        <g-link
          class="no-underline"
          :title="article.node.title"
          :to="article.node.path"
          ><h3>
            {{ article.node.title }}
          </h3></g-link
        >
      </header>
      <div
        v-if="index === 0"
        class="flex flex-row space-x-1 mt-2 hidden sm:block"
      >
        <g-link
          v-for="blogTag in article.node.tag"
          :key="blogTag.id"
          :to="blogTag.path"
        >
          <span class="py-1 px-2 bg-gray-700 text-gray-200 rounded"
            >#{{ blogTag.title }}</span
          ></g-link
        >
      </div>
      <p
        v-if="index === 0"
        class="hidden sm:block"
        v-html="article.node.content.slice(0, 130)"
      ></p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    article: {
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
