<template>
  <div class="custom">
    <div
      class="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
    >
      <a
        :href="$static.profile.linkedin"
        target="_blank"
        title="LinkedIn"
        rel="nofollow"
      >
        <span class="bg-gray-400 py-1 px-2 rounded hover:bg-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin stroke-current text-gray-800 inline-block h-5 w-5"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn
        </span>
      </a>
      <a
        :href="$static.profile.github"
        target="_blank"
        title="Gtihub"
        rel="nofollow"
      >
        <span class="bg-gray-400 py-1 px-2 rounded hover:bg-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github stroke-current text-gray-800 inline-block h-5 w-5"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
          Github
        </span>
      </a>
      <a
        :href="$static.profile.twitter"
        target="_blank"
        title="Twitter"
        rel="nofollow"
      >
        <span class="bg-gray-400 py-1 px-2 rounded hover:bg-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-twitter stroke-current text-gray-800 inline-block h-5 w-5"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            ></path>
          </svg>
          Twitter
        </span>
      </a>
    </div>

    <ValidationObserver v-slot="{ handleSubmit }">
      <form class="space-y-2" @submit.prevent="handleSubmit(submitForm)">
        <ValidationProvider
          v-slot="{ errors, valid }"
          name="E-Mail"
          rules="required|email"
        >
          <label class="block">
            <span class="text-gray-700">E-Mail</span>
            <input
              v-model="contact.email"
              type="email"
              class="form-input bg-gray-300 outline-none focus:shadow-outline my-1 block w-full"
              placeholder="Enter valid e-mail."
            />
            <span
              v-if="errors.length > 0"
              :class="{ ' text-pink-600': errors[0], 'text-green-600': valid }"
              >{{ errors.join('. ') }}</span
            >
          </label>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors, valid }"
          name="Message"
          rules="required"
        >
          <label class="block">
            <span class="text-gray-700">Message</span>
            <textarea
              v-model="contact.message"
              class="form-textarea bg-gray-300 outline-none focus:shadow-outline my-1 block w-full"
              rows="3"
              placeholder="Enter some message here."
            ></textarea>
            <span
              v-if="errors.length > 0"
              :class="{ ' text-pink-600': errors[0], 'text-green-600': valid }"
              >{{ errors.join('. ') }}</span
            >
          </label>
        </ValidationProvider>
        <div>
          <button
            type="submit"
            class="bg-primary-500 w-full hover:bg-primary-800 text-white font-bold py-2 px-4 rounded"
          >
            Contact me
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<static-query>
query {
  profile: blogAuthor(id: "1599831417602-hY18hTewn") {
    id
    github
    twitter
    linkedin
  }
}
</static-query>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import axios from 'axios'

extend('required', required)
extend('email', email)

export default {
  name: 'ContactForm',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      contact: {
        email: '',
        message: '',
      },
      result: '',
    }
  },
  methods: {
    async submitForm() {
      await axios
        .post('https://formspree.io/xqkylyoz', this.contact)
        .then(({ data }) => {
          if (data.ok) {
            this.result = 'Message delivered successfully.'
            this.email = ''
            this.message = ''
          }
        })
    },
  },
}
</script>
