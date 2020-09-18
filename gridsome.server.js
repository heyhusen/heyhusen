// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const md5 = require('md5')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Gravatar
    const {
      data: { entry: gravatar },
    } = await axios.get(
      `https://secure.gravatar.com/${md5(process.env.EMAIL)}.json`
    )
    addCollection('Gravatar').addNode(gravatar[0])
  })

  api.loadSource(async (store) => {
    store.addMetadata('datakramaUrl', 'https://github.com/datakrama')
  })
}
