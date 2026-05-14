<script setup>
import { inject, computed } from 'vue'

const bottle = inject('bottle')

const src = computed(() => {
  const color = bottle?.Corpo

  if (color === 'nero') {
    return new URL('../../assets/images/corpi/corpo_nero-removebg-preview.png', import.meta.url).href
  }

  if (color === 'bianco') {
    return new URL('../../assets/images/corpi/corpo_bianco-removebg-preview.png', import.meta.url).href
  }

  if (color === 'marrone') {
    return new URL('../../assets/images/corpi/corpo_marrone-removebg-preview.png', import.meta.url).href
  }

  if (color === 'giallo') {
    return new URL('../../assets/images/corpi/corpo_giallo-removebg-preview.png', import.meta.url).href
  }

  return new URL('../../assets/images/corpi/corpo_rosso-removebg-preview.png', import.meta.url).href
})
</script>

<template>
  <img :src="src" alt="Corpo" />
</template>
