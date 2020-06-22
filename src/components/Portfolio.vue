<template>
    <div class="container">
        <div class="columns">
            <div v-for="work in works" :key="work.id" class="column is-one-third">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-16by9">
                            <img :src="url + '/storage/' + work.photo">
                        </figure>
                    </div>
                    <div class="card-content is-overlay">
                        <a :href="work.url" :title="work.name" target="_blank"><span class="tag is-primary">{{ work.name }}</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Portfolio',
    data () {
        return {
            works: null,
            url: process.env.GRIDSOME_API_URL
        }
    },
    async mounted () {
        try {
            const results = await axios({
                method: 'get',
                url: process.env.GRIDSOME_API_URL + '/api/work',
                headers: {
                    'Accept': 'application/json'
                }
            })

            this.works = results.data.data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>