<template>
  <div>
    <header>
      <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <g-link class="navbar-item" to="/">
            <img src="~@/assets/img/logo.png" width="168" :title="$static.metadata.siteName" :alt="$static.metadata.siteDescription"/>
          </g-link>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <g-link class="navbar-item" to="/">About</g-link>
            <!--  <g-link class="navbar-item" to="/work">Works</g-link> -->
            <g-link class="navbar-item" to="/open-source">Open Source</g-link>
            <g-link class="navbar-item" to="/blog">Blog</g-link>
            <g-link class="navbar-item" to="/contact">Contact</g-link>
          </div>
        </div>
      </nav>
      <section class="hero is-medium is-bold" :class="heroType">
        <div class="hero-body">
          <div class="container">
            <div class="topdesc" v-if="$slots.topdesc">
              <slot name="topdesc" />
            </div>
          </div>
        </div>
      </section>
    </header>
    <section class="container">
      <div class="navbar">
        <div class="navbar-menu">
          <div class="navbar-end">
            <a :href="$static.metadata.datakramaUrl" class="navbar-item" target="_blank">Datakrama</a>
            <a href="https://github.com/husenisme" class="navbar-item" target="_blank"><b-icon icon="github" type="is-github"></b-icon></a>
            <a href="https://dev.to/husenisme" class="navbar-item" target="_blank"><b-icon icon="dev-to" type="is-devto"></b-icon></a>
            <a href="https://www.linkedin.com/in/husenisme" class="navbar-item" target="_blank"><b-icon icon="linkedin" type="is-linkedin"></b-icon></a>
            <a href="https://twitter.com/husenisme" class="navbar-item" target="_blank"><b-icon icon="twitter" type="is-twitter"></b-icon></a>
            <a href="https://instagram.com/husenism" class="navbar-item" target="_blank"><b-icon icon="instagram" type="is-instagram"></b-icon></a>
          </div>
        </div>
      </div>
      <slot />
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p class="is-size-7">
          Copyright &copy; 2020 &middot; {{ $static.metadata.siteName }}
        </p>
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