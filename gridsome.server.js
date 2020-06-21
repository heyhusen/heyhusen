// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (api) {
  api.configureServer(app => {
    app.use(
      '/api',
      createProxyMiddleware({
        target: process.env.API_URL,
        changeOrigin: true
      })
    )

    app.use(
      '/gravatar',
      createProxyMiddleware({
        target: process.env.GRAVATAR_URL,
        changeOrigin: true,
        pathRewrite: {
          '/gravatar': ''
        },
      })
    )

    app.use(
      '/devto',
      createProxyMiddleware({
        target: process.env.DEVTO_URL,
        changeOrigin: true,
        pathRewrite: {
          '/devto': '/api'
        },
      })
    )
  })

  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(async store => {
    store.addMetadata('datakramaUrl', 'https://github.com/datakrama')
  })
}
