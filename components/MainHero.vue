<template>
  <div class="hero" ref="container">
    <div class="hero__grid">
      <div>{{ data?.description }}</div>
      <div class="small">{{ data?.more }}</div>
    </div>
    <h1 :style="{ fontSize: `${fontSize}rem` }">
      <span ref="h1">{{ data?.mainTitle }}</span>
    </h1>
  </div>
</template>

<script setup lang="ts">
import type { MainContent } from '~/types/content';

const { data } = await useAsyncData('home', () => queryContent<MainContent>('/', 'main').findOne())

const fontSize = ref(1)
const container = ref<HTMLElement | null>(null)
const h1 = ref<HTMLElement | null>(null)

onMounted(() => {
  const containerWidth = container.value?.offsetWidth
  const titleWidth = h1.value?.offsetWidth
  if (containerWidth && titleWidth) {
    console.log(containerWidth, titleWidth, containerWidth / titleWidth)
    fontSize.value = containerWidth / titleWidth
  }
})
</script>

<style lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3.5rem 10vw;
  }

  h1 {
    font-size: 1rem;
    font-weight: 200;
    min-height: 30vh;
    margin: auto 0;
    display: flex;
    align-items: center;
  }
}
</style>
