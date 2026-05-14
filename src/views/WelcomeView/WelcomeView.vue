<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const startConfigurator = () => {
  router.push('/home')
}
</script>

<template>
  <section class="welcome-view">

    <!-- OUTER FRAME -->
    <div class="welcome-shell">

      <!-- TOP BAR -->
      <header class="topbar">

        <div class="topbar-left">

          <div class="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span class="topbar-label">
            Bottle Studio
          </span>

        </div>

        <div class="topbar-status">
          ready
        </div>

      </header>

      <!-- MAIN -->
      <div class="welcome-layout">

        <!-- LEFT -->
        <div class="welcome-content">

          <span class="mini-badge">
            configuratore interattivo
          </span>

          <h1 class="welcome-title">
            Crea la tua
            <span>bottiglia</span>
          </h1>

          <p class="welcome-description">
            Scegli colori, combina le parti e visualizza
            la bottiglia in tempo reale.
          </p>

          <!-- CTA SUBITO VISIBILE -->
          <button
            class="start-button"
            @click="startConfigurator"
          >
            Apri configuratore

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </button>

        </div>

        <!-- RIGHT -->
        <div class="preview-zone">

          <div class="preview-frame">

            <div class="frame-grid"></div>

            <div class="bottle-preview">

              <div class="bottle-cap"></div>

              <div class="bottle-body"></div>

              <div class="bottle-base"></div>

            </div>

            <div class="floating-tag top">
              LIVE PREVIEW
            </div>

            <div class="floating-tag bottom">
              1000+ combinazioni
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<style>
@import "./WelcomeView.css";

</style>
