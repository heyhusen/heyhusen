<template>
  <div>
    <header>
      <b-navbar wrapper-class="container is-fullhd" shadow spaced fixed-top>
        <template slot="brand">
          <b-navbar-item tag="g-link" to="/">
            <g-image src="~/assets/img/logo.png" width="124" :title="$static.metadata.siteName" :alt="$static.metadata.siteDescription"/>
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item tag="g-link" to="/">About</b-navbar-item>
          <b-navbar-item tag="g-link" to="/work">Works</b-navbar-item>
          <b-navbar-item tag="g-link" to="/open-source">Open Source</b-navbar-item>
          <b-navbar-item tag="g-link" to="/blog">Blog</b-navbar-item>
          <b-navbar-item tag="g-link" to="/contact">Contact</b-navbar-item>
        </template>
      </b-navbar>
      <section class="hero is-medium is-bold" :class="heroType">
        <div class="hero-body">
          <div class="container is-fullhd">
            <div class="topdesc" v-if="$slots.topdesc">
              <slot name="topdesc" />
            </div>
          </div>
        </div>
      </section>
    </header>
    <section>
      <div class="container is-fullhd">
        <div class="has-text-right has-text-left-mobile">
          <br>
            <!-- <a :href="$static.metadata.datakramaUrl" target="_blank">Datakrama</a> -->
            <a href="https://github.com/husenisme" target="_blank"><b-icon icon="github" type="is-github"></b-icon></a>
            <a href="https://dev.to/husenisme" target="_blank"><b-icon icon="dev-to" type="is-devto"></b-icon></a>
            <a href="https://www.linkedin.com/in/husenisme/" target="_blank"><b-icon icon="linkedin" type="is-linkedin"></b-icon></a>
            <a href="https://twitter.com/husenisme" target="_blank"><b-icon icon="twitter" type="is-twitter"></b-icon></a>
            <a href="https://instagram.com/husenism" target="_blank"><b-icon icon="instagram" type="is-instagram"></b-icon></a>
          <hr>
        </div>
        <slot />
      </div>
    </section>
    <footer class="footer">
      <div class="container is-fullhd">
        <div class="content has-text-centered">
          <p class="is-size-7">
            Copyright &copy; 2020 &middot; {{ $static.metadata.siteName }}
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName, siteDescription, datakramaUrl
  }
}
</static-query>

<script>
  export default {
    data() {
      return {
        heroType: 'is-primary'
      };
    }
  }
</script>