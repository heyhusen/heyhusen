<template>
  <Layout>

    <template slot="topdesc">
      <h1 class="title">
        Contact<span class="has-text-danger">_</span>
      </h1>
      <h2 class="subtitle">
        Want to talk about your project? Or just chatting with me? Let's meet up.
      </h2>
    </template>

    <p>You can contact me using the form below or my social media account with the link above.</p>
    <br>

    <ContactForm />
  </Layout>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'

export default {
  metaInfo: {
    title: 'Contact'
  },
  components: {
    ContactForm
  }
}
</script>
