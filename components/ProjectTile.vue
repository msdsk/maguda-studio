<template>
  <div class="tile">
    <nuxt-img class="tile__image" :src="project.image" :alt="project.title" :sizes="`lg:${small ? 34 : 67}vw sm:100vw`" />
    <div class="tile__text">
      <h3>{{ project.title }}</h3>
      <p>{{ project.client }}</p>
      <p class="small">
        {{ project.location }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectContent } from '@/types/content'

interface ProjectTileProps {
  project: ProjectContent;
  small: boolean;
}

defineProps<ProjectTileProps>()
</script>

<style lang="scss">
.tile {
  display: flex;
  flex-direction: column;

  &__image {
    height: 100%;
    flex-grow: 1000;
    flex-shrink: 1000;
    object-fit: cover;
  }

  &__text {
    margin-top: .5rem;

    &>*+* {
      margin-top: 0.1em;
    }
  }
}
</style>
