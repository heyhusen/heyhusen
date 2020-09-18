<template>
  <nav>
    <div :class="{ 'bg-blue-800': $route.path === '/' }">
      <div
        class="py-4 px-4 sm:py-10 sm:flex sm:justify-between sm:items-center xl:container xl:mx-auto"
      >
        <div class="flex justify-between items-center">
          <div>
            <g-link
              class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
              to="/"
            >
              <svg
                class="inline-block stroke-current stroke-2 text-yellow-300 h-10 w-10 sm:h-16 sm:w-16"
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
          </div>

          <!-- Mobile menu button -->
          <div class="flex sm:hidden">
            <button
              type="button"
              class="text-gray-300 hover:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
              @click="toggleMenu"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-8 w-8 fill-current text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="mt-2 text-gray-400 items-center sm:mt-0 sm:flex"
          :class="{ hidden: mobileMenu == false, block: mobileMenu }"
        >
          <div
            class="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center"
          >
            <g-link
              v-for="(menu, key) in menus"
              :key="key"
              class="inline-block no-underline hover:text-gray-500"
              :class="{
                'bg-yellow-300 text-gray-800 rounded-lg py-1 px-2 sm:py-2 sm:px-3':
                  $route.path == menu.route,
              }"
              :to="menu.route"
              >{{ menu.name }}</g-link
            >
          </div>
        </div>
      </div>
    </div>
    <svg
      class="fill-current text-blue-800"
      :class="{ hidden: $route.path !== '/' }"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        class="shape-fill"
      ></path>
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        class="shape-fill"
      ></path>
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        class="shape-fill"
      ></path>
    </svg>
    <svg
      class="fill-current text-yellow-400 h-4 w-full transform rotate-180 md:h-6 lg:h-8"
      :class="{ hidden: $route.path === '/' }"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
        class="shape-fill"
      ></path>
    </svg>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenu: false,
      menus: [
        {
          name: 'Home',
          route: '/',
        },
        {
          name: 'Work',
          route: '/work',
        },
        {
          name: 'Blog',
          route: '/blog',
        },
        {
          name: 'About',
          route: '/about',
        },
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.mobileMenu = !this.mobileMenu
    },
  },
}
</script>
