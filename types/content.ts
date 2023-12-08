import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ProjectContent extends ParsedContent {
  title: string
  client: string
  location: string
  image: string
  images: string[]
  date: Date
  description: string
}

export interface MainContent extends ParsedContent {
  mainTitle: string
  description: string
  more: string
  outro: string
}
