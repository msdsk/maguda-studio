<template>
  <div>
    {{ data?.description }}
    <h1>{{ data?.title }}</h1>
  </div>
</template>

<script setup lang="ts">
import type { MainContent } from '~/types/content';

const { data } = await useAsyncData('home', () => queryContent<MainContent>('/', 'main').findOne())
</script>

<style lang="scss"></style>
