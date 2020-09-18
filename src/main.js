// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format'
import VueDisqus from 'vue-disqus'

export default function (Vue, { head }) {
  // Add an external CSS file
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Petrona:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&family=Raleway:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
  })

  // Add attributes to BODY tag
  head.bodyAttrs = {
    class:
      'text-gray-400 font-sans text-base leading-normal antialiased tracking-normal md:text-lg lg:text-xl',
  }

  Vue.use(VueFilterDateParse)
  Vue.use(VueFilterDateFormat)
  Vue.use(VueDisqus)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
