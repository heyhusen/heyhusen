<template>
  <header>
    <Navbar />
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
    Navbar: () => import('~/components/Navbar'),
  },
}
</script>
