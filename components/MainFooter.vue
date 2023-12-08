<template>
  <footer v-if="data" class="footer">
    <MDC :value="data.outro" tag="div" class="small prose" />
  </footer>
</template>

<script setup lang="ts">
import type { MainContent } from '~/types/content';

const { data } = await useAsyncData('home', () => queryContent<MainContent>('/', 'main').findOne())

</script>

<style lang="scss">
.footer {
  margin: 6rem 0;
  display: grid;
  gap: 1rem;

  @media(min-width: $lg) {
    grid-template-columns: 2fr 1fr 1fr;
  }
}
</style>