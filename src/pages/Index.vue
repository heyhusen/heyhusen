<template>
  <Layout>
    <main>
      <div
        class="p-4 sm:px-10 sm:py-10 sm:flex sm:flex-col xl:container xl:mx-auto"
      >
        <div class="sm:flex sm:flex-row sm:space-x-10 sm:items-center">
          <div
            class="w-40 h-40 mx-auto rounded overflow-hidden sm:mx-0 sm:flex-none md:h-56 md:w-56 lg:w-64 lg:h-64"
          >
            <g-image
              :src="$page.gravatar.thumbnailUrl + '?s=512'"
              :alt="$page.gravatar.name.formatted"
            />
          </div>
          <div>
            <div
              class="prose prose-sm max-w-none sm:prose sm:max-w-none md:prose-lg lg:prose-xl xl:prose-2xl"
            >
              <header class="py-4 custom">
                <h2>
                  Hello! My name is {{ $page.gravatar.name.givenName }}
                  <span class="text-primary-500">{{
                    $page.gravatar.name.familyName
                  }}</span
                  >.
                </h2>
                <h2>
                  I am a
                  <span class="text-primary-500">Web Developer</span>.
                </h2>
                <h4>
                  I write
                  <span class="text-primary-500 underline hover:text-gray-800"
                    ><g-link to="/work" title="Portfolio">code</g-link></span
                  >, and
                  <span class="text-primary-500 underline hover:text-gray-800"
                    ><g-link to="/blog" title="Blog">blog</g-link></span
                  >. I like to make things run fast.
                </h4>
              </header>
              <p class="mt-10">
                {{ $page.gravatar.aboutMe }}
              </p>
            </div>
            <div class="mt-10 flex justify-center sm:justify-start">
              <g-link
                class="no-underline bg-primary-500 text-gray-300 py-2 px-3 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:bg-primary-700 hover:text-gray-400 xl:py-3 xl:px-4"
                to="/about"
                >More about me</g-link
              >
            </div>
          </div>
        </div>
      </div>

      <div id="contact-form" class="bg-white text-gray-800">
        <div class="px-4 xl:container xl:mx-auto">
          <div
            class="px-4 prose prose-sm max-w-none sm:prose sm:max-w-none md:prose-lg lg:prose-xl"
          >
            <header class="custom flex text-lg md:text-2xl lg:text-3xl">
              <span
                class="w-auto font-bold border-b-2 border-primary-500 pb-2 px-4 mx-auto"
              >
                Don't be a stranger
              </span>
            </header>
            <div class="md:flex md:items-center">
              <div class="md:w-3/5 lg:w-1/2">
                <p>
                  <ContactForm />
                </p>
              </div>
              <div class="hidden p-4 md:block md:w-2/5 lg:w-1/2">
                <g-image src="~/assets/img/undraw_contact_us_15o2.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
query {
  gravatar(id: "187660235") {
    name {
      formatted
      givenName
      familyName
    }
    currentLocation
    thumbnailUrl
    aboutMe
    accounts {
      shortname
      display
      url
    }
  }

  metadata {
    siteName
    siteDescription
  }
}
</page-query>

<script>
export default {
  name: 'Home',
  metaInfo() {
    return {
      title: this.$page.metadata.siteName,
      titleTemplate: `%s - ${this.$page.metadata.siteDescription}`,
    }
  },
  components: {
    ContactForm: () => import('~/components/ContactForm'),
  },
  data() {
    return {
      skills: [
        {
          name: 'PHP',
        },
        {
          name: 'MySQL',
        },
        {
          name: 'Laravel',
        },
        {
          name: 'RestAPI',
        },
        {
          name: 'Vue.js',
        },
        {
          name: 'Git',
        },
        {
          name: 'Linux',
        },
      ],
    }
  },
}
</script>
