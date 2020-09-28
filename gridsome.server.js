// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const md5 = require('md5')
const fs = require('fs')
const { registerFont, createCanvas } = require('canvas')
const slugify = require('slugify')
const CanvasTextWrapper = require('canvas-text-wrapper').CanvasTextWrapper

module.exports = function (api) {
  api.onCreateNode((options) => {
    // Create blog post og:image
    registerFont('./src/assets/fonts/Raleway-Regular.ttf', {
      family: 'Raleway',
    })
    const width = 1200
    const height = 630

    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    context.fillStyle = 'rgba(0, 0, 0, 0)'
    context.fillRect(0, 0, width, height)

    context.fillStyle = '#14335E'
    context.fillRect(0, 0, width - 30, height - 30)

    context.fillStyle = '#22559C'
    context.fillRect(30, 30, width - 30, height - 30)

    context.strokeStyle = '#FFF'
    context.strokeRect(60, 60, width - 90, height - 90)

    context.fillStyle = '#fff'
    context.font = 'bold 40px Raleway'
    context.fillText('https://husen.id/blog', 740, 570)

    if (options.internal.typeName === 'BlogPost') {
      context.fillStyle = '#fff'
      CanvasTextWrapper(canvas, options.title, {
        font: 'bold 90px Raleway',
        paddingX: 90,
        paddingY: 90,
      })

      const buffer = canvas.toBuffer('image/png')
      fs.writeFileSync(
        `./static/img/blog/post/${slugify(options.title.toLowerCase())}.png`,
        buffer
      )

      return {
        ...options,
        og_image: `/img/blog/post/${slugify(options.title.toLowerCase())}.png`,
      }
    }
    if (options.internal.typeName === 'BlogTag') {
      context.fillStyle = '#fff'
      CanvasTextWrapper(canvas, options.title, {
        font: 'bold 90px Raleway',
        paddingX: 90,
        paddingY: 90,
      })

      const buffer = canvas.toBuffer('image/png')
      fs.writeFileSync(
        `./static/img/blog/tag/${slugify(options.title.toLowerCase())}.png`,
        buffer
      )

      return {
        ...options,
        og_image: `/img/blog/tag/${slugify(options.title.toLowerCase())}.png`,
      }
    }
  })

  api.loadSource(async ({ addCollection }) => {
    // Gravatar
    const {
      data: { entry: gravatar },
    } = await axios.get(
      `https://secure.gravatar.com/${md5(process.env.EMAIL)}.json`
    )
    addCollection('Gravatar').addNode({
      ...gravatar[0],
      thumbnailUrl: `${gravatar[0].thumbnailUrl}?s=512`,
    })
  })
}
