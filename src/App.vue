<script setup>

import { ref, provide, reactive } from 'vue'
import Hero from './views/Hero/Hero.vue';

import { useRouter } from 'vue-router'

const router = useRouter()

if (!sessionStorage.getItem('appLoaded')) {
  router.replace('/')
}
sessionStorage.setItem('appLoaded', 'true')

const bottle = reactive({
  Tappo: 'rosso',
  Corpo: 'rosso',
  Fondo: 'rosso',
})

provide('bottle', bottle)

const currentSelecting = ref("Tappo");
provide("currentSelecting", currentSelecting);

const colors = ref([
  { id: 'rosso',     name: 'Rosso',     hex: '#B92B2B', hue: 'hue-rotate(0deg)' },

  { id: 'arancione', name: 'Arancione', hex: '#D76423', hue: 'hue-rotate(48deg) saturate(1.5) brightness(1.2)' },

  { id: 'giallo',    name: 'Giallo',    hex: '#C8AA10'},

  { id: 'verde',     name: 'Verde',     hex: '#1A8A40', hue: 'hue-rotate(143deg)' },

  { id: 'blu',       name: 'Blu',       hex: '#1A5AAA', hue: 'hue-rotate(214deg)' },

  { id: 'violetto',  name: 'Violetto',  hex: '#7030B0', hue: 'hue-rotate(277deg)' },

  { id: 'grigio',    name: 'Grigio',    hex: '#808080', hue: 'grayscale(100%)' },

  {
    id: 'marrone',
    name: 'Marrone',
    hex: '#8A4015',
  },

  {
    id: 'nero',
    name: 'Nero',
    hex: '#282828',

  },

  {
    id: 'bianco',
    name: 'Bianco',
    hex: '#E8E8E8',

  },
])

provide("colors", colors);

</script>

<template>

<Hero />

<RouterView :key="$route.fullPath" />

</template>
