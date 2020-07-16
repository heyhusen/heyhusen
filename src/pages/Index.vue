<template>
  <Layout>

    <template slot="topdesc">
      <h1 class="title">
        Hi, I'm Husen<span class="has-text-danger">_</span>
      </h1>
      <h2 class="subtitle">
        A backend developer and OSS enthusiast.
      </h2>
    </template>

    <div class="columns">
      <div class="column is-two-thirds">
        <About />
      </div>
      <div class="column">
        <section class="hero is-white has-text-centered">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Skills<span class="has-text-primary">_</span></h1>
              <b-tag type="is-php" rounded>PHP</b-tag> <b-tag type="is-mysql" rounded>MySQL</b-tag>  <b-tag type="is-codeigniter" rounded>CodeIgniter</b-tag> <b-tag type="is-laravel" rounded>Laravel</b-tag> <b-tag type="is-dark" rounded>Microservice</b-tag> <b-tag type="is-git" rounded>Git</b-tag> <b-tag type="is-linux" rounded>Linux</b-tag>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">2016</span>
      </header>
      <div class="timeline-item">
        <div class="timeline-marker is-icon">
          <b-icon icon="account-tie" size="is-small"></b-icon>
        </div>
        <div class="timeline-content">
          <p class="heading">Juny 2016</p>
          <p>Web Developer for Intern at PT. Mabito Karya</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker is-icon">
          <b-icon icon="account-tie" size="is-small"></b-icon>
        </div>
        <div class="timeline-content">
          <p class="heading">September 2016</p>
          <p>Web Developer Staff at PT. Mabito Karya</p>
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag is-primary">2018</span>
      </header>
      <div class="timeline-item">
        <div class="timeline-marker is-icon">
          <b-icon icon="account" size="is-small"></b-icon>
        </div>
        <div class="timeline-content">
          <p class="heading">July 2018</p>
          <p>Freelance Web Developer</p>
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag is-primary">2020</span>
      </header>
      <div class="timeline-item">
        <div class="timeline-marker is-icon">
          <b-icon icon="account-tie" size="is-small"></b-icon>
        </div>
        <div class="timeline-content">
          <p class="heading">April 2020</p>
          <p>Resign from PT. Mabito Karya</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker is-icon">
          <b-icon icon="account-clock" size="is-small"></b-icon>
        </div>
        <div class="timeline-content">
          <p class="heading">May 2020</p>
          <p>Fulltime Remote Backend Developer</p>
        </div>
      </div>
      <div class="timeline-header">
        <span class="tag is-medium is-primary">Now</span>
      </div>
    </div>

    <section class="hero is-white has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle">
            It is all about me. How about you? Do you have a project that you want to talk about?
          </h2>
          <h1 class="title">
            <b-button tag="router-link"
              to="/contact"
              type="is-info">
              Contact Me
            </b-button>
          </h1>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
import About from '~/components/About.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    About
  }
}
</script>
