<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="hero-card">
    <div class="hero-card__icon">{{ icon }}</div>
    <h3 class="hero-card__title">{{ title }}</h3>
    <p class="hero-card__description">{{ description }}</p>
  </div>
</template>

<style scoped>
.hero-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 32px 32px 32px;
  border: 1px solid var(--border);
  border-radius: 12px;
}

.hero-card:last-child {
  border: 1px solid var(--border);
}

.hero-card__icon {
  font-size: 48px;
  margin-bottom: 16px;
  line-height: 1;
}

.hero-card__title {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-h);
  margin: 0 0 10px 0;
  line-height: 1.3;
}

.hero-card__description {
  font-size: 15px;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
  max-width: 220px;
}

@media (max-width: 768px) {
  .hero-card {
    flex-direction: row;
    text-align: left;
    padding: 20px 24px;
    align-items: flex-start;
    gap: 16px;
  }

  .hero-card__icon {
    font-size: 36px;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  .hero-card__description {
    max-width: none;
  }
}

@media (max-width: 480px) {
  .hero-card {
    padding: 16px 16px;
    gap: 12px;
  }

  .hero-card__icon { font-size: 30px; }
  .hero-card__title { font-size: 15px; }
  .hero-card__description { font-size: 13px; }
}

@media (max-width: 370px) {
  .hero-card { padding: 12px; gap: 10px; }
  .hero-card__icon { font-size: 26px; }
  .hero-card__title { font-size: 14px; }
}
</style>
