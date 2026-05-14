<script setup>
import CurrentPreview from '../../components/CurrentPreview/CurrentPreview.vue';
import { useRouter } from 'vue-router';

import { inject } from 'vue';

const currentSelecting = inject("currentSelecting");

const router = useRouter();

const goBack = () => {
  currentSelecting.value = "Tappo"
  router.push('/');
};
</script>

<template>
  <section class="thank-view">

    <div class="thank-card">

      <div class="thank-copy">

        <span class="thank-badge">
          Configurazione completata
        </span>

        <p class="thank-overline">
            Grazie per aver creato la tua Sunnee
        </p>

        <h1 class="thank-title">
          La tua bottiglia <strong>Sunnee</strong> è pronta
        </h1>

        <p class="thank-description">
          Una combinazione unica di colori e dettagli pensata per accompagnarti
          al mare rispettando l'ambiente.
        </p>

        <div class="thank-actions">

          <button
            class="btn-cta"
          >
            Aggiungi al carrello
          </button>

          <button
            class="btn-ghost"
            @click="goBack"
          >
            Personalizza ancora
          </button>

        </div>

      </div>

      <div class="thank-preview">

        <div class="preview-glow"></div>

        <CurrentPreview />

      </div>

    </div>

  </section>
</template>

<style>
@import "./ThankView.css";
</style>
