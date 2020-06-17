// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '~/assets/sass/styles.scss'
// import '@creativebulma/bulma-divider/dist/bulma-divider.min.css'
import 'bulma-timeline/dist/css/bulma-timeline.min.css'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
      rel: 'stylesheet',
      href: 'https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css'
  })

  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'has-navbar-fixed-top' }
  
  Vue.use(Buefy)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
