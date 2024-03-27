<template>
  <div class="layout-wrapper">
    <AppLeftPanel />
    <AppPreviewer />
    <AppRightPanel />
  </div>
</template>

<script lang="ts" setup>
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue'
import AppRightPanel from '@/components/AppRightPanel.vue'
import AppPreviewer from '@/components/AppPreviewer/AppPreviewer.vue'
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.layout-setting {
  position: relative;
  z-index: 6;
  width: var(--panel-width);
  box-shadow: var(--color-gray-300) -1px 0 0;
}
</style>
