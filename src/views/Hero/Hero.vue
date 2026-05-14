<script setup>
import Header from '../../components/Header/Header.vue'
import HeroCards from "../../components/HeroCards/HeroCards.vue"
</script>

<template>
  <section class="hero">
    <div class="overlay"></div>

    <Header />

    <div class="contentHero">
      <h1>
        Andando al Mare
        <br />
        Rispettando il Pianeta.
      </h1>

      <p>
        Costumi realizzati con plastica
        <br />
        riciclata dall'oceano.
      </p>

      <div class="buttons">
        <button class="primary">
          Scopri la collezione
        </button>

        <button class="secondary">
          La nostra storia
        </button>
      </div>
    </div>

    <HeroCards />
  </section>
</template>



<style>
@import "./Hero.css";
</style>
