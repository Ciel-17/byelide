<template>
  <div class="layout-content">
    <LaptopPreviewer
      v-if="previewMode === 'laptop'"
      :preview-mode="previewMode"
      @preview-mode-change="handleModeChange"
    />
    <MobilePreviewer
      v-if="previewMode === 'mobile'"
      :preview-mode="previewMode"
      @preview-mode-change="handleModeChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LaptopPreviewer from './LaptopPreviewer.vue'
import MobilePreviewer from './MobilePreviewer.vue'
import type { PreviewType } from './type'

const previewMode = ref<PreviewType>('laptop')

const handleModeChange = (mode: PreviewType) => {
  previewMode.value = mode
}
</script>

<style scoped>
.layout-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--color-gray-100);
  overflow: auto;
}
.layout-content::-webkit-scrollbar {
  display: none;
}
</style>
