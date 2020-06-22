<template>
    <div class="box">
        <article class="media" v-if="about">
            <figure class="media-left">
                <p class="image is-128x128">
                    <img class="is-rounded" :src="about.thumbnailUrl + '?s=200'">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>{{ about.name.formatted }}</strong> &middot; <a :href="'mailto:' + about.emails[0].value" target="_blank">{{ about.emails[0].value }}</a> <small><b-icon icon="map-marker" size="is-small"></b-icon> {{ about.currentLocation }}</small>
                        <br>
                        {{ about.aboutMe }}
                    </p>
                </div>
                <nav class="level is-mobile">
                    <div class="level-left">
                        <a class="level-item">
                            <b-icon icon="reply"></b-icon>
                        </a>
                        <a class="level-item">
                            <b-icon icon="twitter-retweet"></b-icon>
                        </a>
                        <a class="level-item">
                            <b-icon icon="heart"></b-icon>
                        </a>
                    </div>
                </nav>
            </div>
        </article>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'About',
    data () {
        return {
            about: null
        }
    },
    async mounted () {
        try {
            const results = await axios.get(process.env.GRIDSOME_GRAVATAR_URL + '/' + process.env.GRIDSOME_GRAVATAR_HASH + '.json?callback=?')

            this.about = results.data.entry[0]
        } catch (error) {
            console.log(error)
        }
    }
}
</script>