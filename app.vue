<template>
  <main class="main">
    <NuxtPage />
  </main>
</template>

<script setup>

useHead({
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
  ]
})

</script>

<style lang="scss">
.main {
  max-width: 84rem;
  margin: 5rem auto;
  padding: 0 2rem;
}
</style>
