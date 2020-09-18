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
                  Hello! My name is {{ $page.gravatar.name.formatted }}. You can
                  call me
                  <span class="text-yellow-400">{{
                    $page.gravatar.name.familyName
                  }}</span
                  >.
                </h2>
                <h4>
                  I write
                  <span class="text-yellow-400 hover:text-gray-600"
                    ><g-link to="/work" title="Portfolio">code</g-link></span
                  >, and
                  <span class="text-yellow-400 hover:text-gray-600"
                    ><g-link to="/blog" title="Blog">blog</g-link></span
                  >. I like to make things run fast.
                </h4>
              </header>
              <p class="mt-10 indent-sm md:indent-md lg:indent-lg">
                {{ $page.gravatar.aboutMe }}
              </p>
            </div>
            <div class="mt-10 flex justify-center sm:justify-start">
              <g-link
                class="no-underline bg-blue-800 text-gray-500 py-2 px-3 rounded hover:bg-blue-900 xl:py-3 xl:px-4"
                to="/about"
                >More about me</g-link
              >
            </div>
          </div>
        </div>
      </div>

      <svg
        class="mt-10 fill-current text-white"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
      <div class="bg-white text-gray-800">
        <div class="px-4 xl:container xl:mx-auto">
          <div
            class="px-4 pb-2 prose prose-sm max-w-none sm:prose sm:max-w-none md:prose-lg lg:prose-xl"
          >
            <header class="flex text-lg md:text-2xl lg:text-3xl">
              <span
                class="w-auto font-bold border-b-2 border-yellow-500 pb-2 px-4 mx-auto"
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
