<script setup>
import PreviewTappo from '../PreviewTappo/PreviewTappo.vue';
import PreviewCorpo from '../PreviewCorpo/PreviewCorpo.vue';
import PreviewFondo from '../PreviewFondo/PreviewFondo.vue';

import { inject, computed, h } from 'vue';

const currentSelecting = inject("currentSelecting");
const colors = inject("colors");
const bottle = inject("bottle");

const DefaultComponent = {
  render() {
    return h('div', { class: 'bottle-assembly' }, [

      h(PreviewTappo, {
        class: 'bottle-part part-cap',
        style: {
          filter: colors.value.find(c => c.id === bottle.Tappo)?.hue
        }
      }),

      h(PreviewCorpo, {
        class: 'bottle-part part-body',
        style: {
          filter: colors.value.find(c => c.id === bottle.Corpo)?.hue
        }
      }),

      h(PreviewFondo, {
        class: 'bottle-part part-base',
        style: {
          filter: colors.value.find(c => c.id === bottle.Fondo)?.hue
        }
      })

    ]);
  }
};

const currentComponent = computed(() => {
  if (currentSelecting.value === "Tappo") return PreviewTappo;
  if (currentSelecting.value === "Corpo") return PreviewCorpo;
  if (currentSelecting.value === "Fondo") return PreviewFondo;

  return DefaultComponent;
});
</script>

<template>
  <div class="preview-wrapper">
    <component :is="currentComponent" />
  </div>
</template>
