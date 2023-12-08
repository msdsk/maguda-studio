<template>
  <div class="main-wrapper">
    <main>
      <NuxtPage />
    </main>
    <MainFooter />
  </div>
</template>

<script setup>

useHead({
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
  ]
})

</script>

<style lang="scss">
.main-wrapper {
  max-width: $lg;
  margin: 5rem auto;
  padding: 0 2rem;
}
</style>
