<template>
  <nav>
    <div
      class="border-b border-gray-300 flex justify-between items-center xl:container xl:mx-auto"
    >
      <div
        class="py-3 px-4 sm:flex sm:justify-start sm:items-center sm:space-x-4 md:py-5"
      >
        <g-link
          class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
          to="/"
        >
          <svg
            class="inline-block stroke-current stroke-2 text-primary-500 h-10 w-10 hover:text-primary-700 sm:h-16 sm:w-16"
            width="157.98mm"
            height="157.98mm"
            version="1.1"
            viewBox="0 0 157.98 157.98"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          >
            <metadata>
              <rdf:RDF>
                <cc:Work rdf:about="">
                  <dc:format>image/svg+xml</dc:format>
                  <dc:type
                    rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                  />
                  <dc:title />
                </cc:Work>
              </rdf:RDF>
            </metadata>
            <g transform="translate(-24.378 3.3108)">
              <path
                d="m42.425 23.493s36.567-19.999 56.566 0c19.999 19.999 26.666 72.553 0 99.219-13.333 13.333-56.566 13.913-56.566 13.913s0.58068-43.233 13.913-56.566c26.666-26.666 79.22-19.999 99.219 0s0 56.566 0 56.566"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="20"
                style="paint-order: normal"
              />
            </g>
          </svg>
        </g-link>

        <div
          class="bg-white text-xs px-4 py-1 border-t border-solid border-gray-400 z-20 fixed inset-x-0 bottom-0 flex justify-between sm:text-base sm:p-0 sm:border-0 sm:z-0 sm:static sm:space-x-4 sm:justify-start sm:items-center md:text-lg lg:text-xl xl:text-2xl"
        >
          <g-link
            class="inline-block sm:hidden sm:hover:text-gray-900 sm:hover:underline"
            :class="{
              'text-primary-500 hover:no-underline': $route.path == '/',
            }"
            to="/"
          >
            <svg
              class="h-8 w-8 mx-auto stroke-current text-gray-800"
              :class="{
                'block sm:hidden': $route.path !== '/',
                hidden: $route.path == '/',
              }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <svg
              class="h-8 w-8 mx-auto fill-current text-primary-500"
              :class="{
                hidden: $route.path !== '/',
                'block sm:hidden': $route.path == '/',
              }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            Home
          </g-link>
          <g-link
            class="inline-block sm:hover:text-gray-900 sm:hover:underline"
            :class="{
              'text-primary-500 hover:no-underline': $route.path == '/about',
            }"
            to="/about"
          >
            <svg
              class="h-8 w-8 mx-auto stroke-current text-gray-800"
              :class="{
                'block sm:hidden': $route.path !== '/about',
                hidden: $route.path == '/about',
              }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <svg
              class="h-8 w-8 mx-auto fill-current text-primary-500"
              :class="{
                hidden: $route.path !== '/about',
                'block sm:hidden': $route.path == '/about',
              }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            About
          </g-link>
          <g-link
            class="inline-block sm:hover:text-gray-900 sm:hover:underline"
            :class="{
              'text-primary-500 hover:no-underline': $route.path == '/work',
            }"
            to="/work"
          >
            <svg
              class="h-8 w-8 mx-auto stroke-current text-gray-800"
              :class="{
                'block sm:hidden': $route.path !== '/work',
                hidden: $route.path == '/work',
              }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <svg
              class="h-8 w-8 mx-auto fill-current text-primary-500"
              :class="{
                hidden: $route.path !== '/work',
                'block sm:hidden': $route.path == '/work',
              }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Portfolio
          </g-link>
          <g-link
            class="inline-block sm:hover:text-gray-900 sm:hover:underline"
            :class="{
              'text-primary-500 hover:no-underline': $route.path == '/blog',
            }"
            to="/blog"
          >
            <svg
              class="h-8 w-8 mx-auto stroke-current text-gray-800"
              :class="{
                'block sm:hidden': $route.path !== '/blog',
                hidden: $route.path == '/blog',
              }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <svg
              class="h-8 w-8 mx-auto fill-current text-primary-500"
              :class="{
                hidden: $route.path !== '/blog',
                'block sm:hidden': $route.path == '/blog',
              }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clip-rule="evenodd"
              />
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
            </svg>
            Blog
          </g-link>
          <g-link
            class="inline-block sm:hidden sm:hover:text-gray-900 sm:hover:underline"
            :class="{
              'text-primary-500 hover:no-underline':
                $route.path == '/#contact-form',
            }"
            to="/#contact-form"
          >
            <svg
              class="h-8 w-8 mx-auto stroke-current text-gray-800"
              :class="{
                'block sm:hidden': $route.path !== '/#contact',
                hidden: $route.path == '/#contact',
              }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <svg
              class="h-8 w-8 mx-auto fill-current text-primary-500"
              :class="{
                hidden: $route.path !== '/#contact',
                'block sm:hidden': $route.path == '/#contact',
              }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
            Contact
          </g-link>
        </div>
      </div>
      <div class="px-4">
        <g-link
          class="bg-secondary-500 text-white py-1 px-2 rounded hover:bg-secondary-600 md:py-2 md:px-3"
          to="/#contact-form"
          >Contact me</g-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menus: [
        {
          name: 'Home',
          route: '/',
        },
        {
          name: 'About',
          route: '/about',
        },
        {
          name: 'Portfolio',
          route: '/work',
        },
        {
          name: 'Blog',
          route: '/blog',
        },
        {
          name: 'Contact',
          route: '/#contact-form',
        },
      ],
    }
  },
}
</script>
