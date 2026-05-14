<script setup>
import { ref, reactive, computed, provide, inject } from 'vue'

import PreviewTappo from '../../components/PreviewTappo/PreviewTappo.vue'
import PreviewCorpo from '../../components/PreviewCorpo/PreviewCorpo.vue';
import PreviewFondo from '../../components/PreviewFondo/PreviewFondo.vue';

import CurrentPreview from '../../components/CurrentPreview/CurrentPreview.vue';

import { useRouter } from 'vue-router'

const router = useRouter()

const bottle = inject("bottle")

const currentSelecting = inject("currentSelecting")

const previewHeightMap = {
  Tappo: "1",
  Corpo: "0.5",
  Fondo: "1.5"
}

const previewHeight = computed(() =>
  previewHeightMap[currentSelecting.value]
)

const selectedColor = ref('rosso');
provide("selectedColor", selectedColor);

const currentColor = computed(() =>
  colors.value.find(c => c.id === selectedColor.value)
);

const colors = inject("colors")


const selectColor = (id) => {
  selectedColor.value = id;
  if (currentSelecting.value === "Tappo") {
    bottle.Tappo = id;
  }
  else if ((currentSelecting.value === "Corpo")) {
    bottle.Corpo = id;
  }
  else if ((currentSelecting.value === "Fondo")) {
    bottle.Fondo = id;
  };
}



const goNextStep = () => {
  selectedColor.value = "rosso";
  if (currentSelecting.value === "Tappo") {
    currentSelecting.value = "Corpo"
  }
  else if ((currentSelecting.value === "Corpo")) {
    currentSelecting.value = "Fondo"
  }
  else if ((currentSelecting.value === "Fondo")) {
    currentSelecting.value = "Default"
    router.push("/thank");
  };
}

const goPreviousStep = () => {
  if (currentSelecting.value === "Tappo") {
    router.push("/")
  }
  else if ((currentSelecting.value === "Corpo")) {
    currentSelecting.value = "Tappo"
  }
  else if ((currentSelecting.value === "Fondo")) {
    currentSelecting.value = "Corpo"
  };
}
</script>

<template>
  <section class="configurator">

    <!-- ── COLONNA SINISTRA: selezione colore ── -->
    <div class="selector-panel">

      <div class="selector-header">
        <span class="step-badge">
  {{
            currentSelecting === "Tappo"
              ? '01'
              : currentSelecting === "Corpo"
                ? '02'
                : '03'
          }}
        </span>
        <div>
          <p class="step-label">Personalizza la tua bottiglia</p>
          <h2 class="step-title">Scegli il colore del <strong>  {{
            currentSelecting === "Tappo"
              ? 'tappo'
              : currentSelecting === "Corpo"
                ? 'corpo'
                : 'fondo'
          }}</strong></h2>
        </div>
      </div>

      <!-- Anteprima della parte corrente -->
      <div class="part-preview-box">
        <div class="part-preview-inner">
          <CurrentPreview
            src="../../assets/images/tappi/tappo_rosso-removebg-preview.png"
            alt="Tappo selezionato"
            class="part-preview-img"
            :style="{ transform: `scale(${previewHeight})`, filter: currentColor.hue }"
          />
          <div class="part-preview-shine" />
        </div>
        <p class="part-preview-label">Tappo · <span class="color-name">{{ currentColor.name }}</span></p>
      </div>

      <!-- Pallini colore -->
      <div class="color-swatches">
        <button
          v-for="color in colors"
          :key="color.id"
          class="swatch"
          :class="{ active: selectedColor === color.id }"
          :style="{ '--swatch-color': color.hex }"
          :title="color.name"
          @click="selectColor(color.id)"
        >
          <span class="swatch-dot" />
          <span class="swatch-tooltip">{{ color.name }}</span>
        </button>
      </div>

      <p class="selected-color-name">{{ colors.find(c => c.id === selectedColor)?.name }}</p>

      <!-- Navigazione parti -->
      <div class="part-nav">
        <button class="btn-back" @click="goPreviousStep">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          Indietro
        </button>
        <div class="part-dots">
          <span
            class="part-dot"
            :class="{ active: currentSelecting === 'Tappo' }"
            title="Tappo"
          />
          <span
            class="part-dot"
            :class="{ active: currentSelecting === 'Corpo' }"
            title="Corpo"
          />
          <span
            class="part-dot"
            :class="{ active: currentSelecting === 'Fondo' }"
            title="Fondo"
          />
        </div>
        <button class="btn-next" @click="goNextStep">
          Avanti
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- CTA finale (visibile all'ultimo step) -->
      <button class="btn-cta" style="display:none">
        Aggiungi al carrello
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

    </div>

    <!-- ── COLONNA DESTRA: bottiglia assemblata ── -->
    <div class="preview-panel">

      <div class="bottle-stage">
        <div class="bottle-glow" />

        <div class="bottle-assembly">
          <!-- Tappo -->
          <PreviewTappo
            class="bottle-part part-cap"
            :style="{
              filter: colors.find(c => c.id === bottle.Tappo)?.hue
            }"

          />
          <!-- Corpo -->
          <PreviewCorpo
            class="bottle-part part-body"
            :style="{
              filter: colors.find(c => c.id === bottle.Corpo)?.hue
            }"

          />
          <!-- Fondo -->
          <PreviewFondo
            class="bottle-part part-base"
            :style="{
              filter: colors.find(c => c.id === bottle.Fondo)?.hue
            }"

          />
        </div>

        <!-- Badge combinazione -->
        <div class="combo-badge">
          <span class="combo-icon">✦</span>
          <span>1.000 combinazioni possibili</span>
        </div>
      </div>

      <!-- Etichette parti -->
      <div class="part-labels">
        <div
          v-for="(part, index) in ['Tappo', 'Corpo', 'Fondo']"
          :key="part"
          class="part-label-item"
        >
          <span
            class="label-dot"
            :style="{
              '--dot-color':
                colors.find(c => c.id === bottle[part])?.hex
            }"
          />

          <span>
            {{ part }} ·
            {{ colors.find(c => c.id === bottle[part])?.name }}
          </span>
        </div>
      </div>

    </div>

  </section>
</template>

<style>
@import "./BottleSelector.css";

</style>
