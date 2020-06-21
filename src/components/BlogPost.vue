<template>
  <div class="container">
      <div class="columns">
        <div v-for="article in articles" :key="article.id" class="column is-one-quarter">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-2by1">
                      <a :href="blogUrl + '/' + article.slug" target="_blank" :title="article.title"><img :src="article.cover_image" :alt="article.title"></a>
                    </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <a :href="blogUrl + '/' + article.slug" target="_blank" :title="article.title"><p class="title is-4">{{ article.title }}</p></a>
                    <p class="subtitle is-7">Published on {{ article.published_at | dateParse('YYYY-MM-DD HH:mm:ss') | dateFormat('MMM D, YYYY') }}</p>
                    <p>{{ article.description }}</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogPost',
  data () {
    return {
      articles: null,
      blogUrl: process.env.GRIDSOME_BLOG_URL
    }
  },
  async mounted () {
    try {
      const results = await axios({
        method: 'get',
        url: process.env.GRIDSOME_DEVTO_URL + '/articles/?username=husenisme'
      })

      this.articles = results.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
