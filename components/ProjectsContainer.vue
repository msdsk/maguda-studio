<template>
  <div>
    <h2 class="text-right margin-bottom">
      WORKS
    </h2>
    <div class="projects">
      <project-tile v-for="(project, i) in projects" :key="project.id" :project="project" class="projects__item"
        :small="i % 4 === 0 || i % 4 === 3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectContent } from '~/types/content'

const { data: projects } = await useAsyncData('projects', () => queryContent<ProjectContent>('/projects').find())
</script>

<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.5rem 1rem;

  &__item {
    height: 40rem;
    max-height: 50vh;

    &:nth-child(4n+3),
    &:nth-child(4n+2) {
      grid-column: auto / span 2;
    }
  }
}
</style>
