<script setup>
import HeroCard from '../HeroCard/HeroCard.vue'

const cards = [
  {
    icon: '♻️',
    title: 'Tessuto 100% riciclato',
    description: 'Realizzato con materiali rigenerati di alta qualità.',
  },
  {
    icon: '🌊',
    title: "Plastica recuperata dall'oceano",
    description: 'Trasformiamo rifiuti marini in nuovi costumi.',
  },
  {
    icon: '🐢',
    title: 'Certificazione OEKO-TEX®',
    description: 'Sicuro per la tua pelle, rispettoso del pianeta.',
  },
]
</script>

<template>
  <div class="hero-cards">
    <HeroCard
      v-for="(card, index) in cards"
      :key="index"
      :icon="card.icon"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<style scoped>
.hero-cards {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 230px);
  display: flex;
  gap: 10px;
  background: #FAEBD7;
  height: 350px;
  border: none;          /* ← rimuovi il border del container */
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 28px 40px;
  width: min(1300px, 90%);
}

@media (max-width: 768px) {
  .hero-cards {
    flex-direction: column;
    height: auto;
    width: min(460px, 92%);
    transform: translate(-50%, 100px); /* avvicina alla sezione */
    padding: 20px 24px;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .hero-cards {
    width: 92%;
    transform: translate(-50%, 80px);
    padding: 16px 16px;
    gap: 10px;
    border-radius: 12px;
  }
}

@media (max-width: 370px) {
  .hero-cards {
    width: 94%;
    transform: translate(-50%, 60px);
    padding: 12px;
  }
}
</style>
