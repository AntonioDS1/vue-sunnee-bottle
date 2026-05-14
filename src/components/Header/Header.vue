<template>
  <header class="header">
    <div class="logo">
      <span>Sunnee</span>
      <img class="wave" src="../../assets/images/favicon.png">
    </div>

    <nav class="nav">
      <a href="#">Shop</a>
      <a href="#">Materiali</a>
      <a href="#">La nostra missione</a>
      <a href="#">Blog</a>
      <a href="#">Contatti</a>
    </nav>

    <div class="actions">
      <button class="icon-btn"><img src="../../assets/images/carrello.svg"></button>
      <button class="icon-btn"><img src="../../assets/images/profilo.svg"></button>
      <div class="badge">🌱 Carbon Neutral</div>

      <button class="hamburger" @click="toggleMenu" :class="{ open: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav class="nav-mobile" :class="{ open: menuOpen }">
      <a href="#" @click="closeMenu">Shop</a>
      <a href="#" @click="closeMenu">Materiali</a>
      <a href="#" @click="closeMenu">La nostra missione</a>
      <a href="#" @click="closeMenu">Blog</a>
      <a href="#" @click="closeMenu">Contatti</a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

// Chiude cliccando fuori
function handleClickOutside(e) {
  if (!e.target.closest('.header')) {
    menuOpen.value = false
  }
}

// Chiude al resize sopra 768px
function handleResize() {
  if (window.innerWidth > 768) {
    menuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
@import "./Header.css";

</style>
