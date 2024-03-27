<template>
  <div class="left-wrapper-panel">
    <div class="left-panel-bar">
      <div
        :class="['left-panel-bar-item', isDrawerShown === 'outline' && 'active']"
        @click="toggleDrawer('outline')"
      >
        <Page />
      </div>
      <div
        :class="['left-panel-bar-item', isDrawerShown === 'blocks' && 'active']"
        @click="toggleDrawer('blocks')"
      >
        <SmartOptimization />
      </div>
    </div>
    <transition name="left-panel-drawer">
      <div v-if="!!isDrawerShown" class="left-panel-drawer">
        <div class="left-panel-drawer-content">
          <component
            v-if="!!isDrawerShown"
            :is="isDrawerShown === 'outline' ? OutlineDrawer : BlocksDrawer"
          ></component>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { Page, SmartOptimization } from '@icon-park/vue-next'
import { ref } from 'vue'
import OutlineDrawer from './OutlineDrawer.vue'
import BlocksDrawer from './BlocksDrawer.vue'

type DrawerShown = 'outline' | 'blocks' | null

const isDrawerShown = ref<DrawerShown>('outline')

const toggleDrawer = (drawerMode: DrawerShown = null) => {
  if (drawerMode === isDrawerShown.value) {
    isDrawerShown.value = null
    return
  }
  isDrawerShown.value = drawerMode
}
</script>

<style scoped>
.left-wrapper-panel {
  position: relative;
  display: flex;
  z-index: 4;
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
}

.left-panel-bar {
  width: 60px;
  height: 100%;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

.left-panel-bar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-700);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  user-select: none;
}

.left-panel-bar-item.active {
  color: #fff;
  background-color: var(--color-primary);
}

.left-panel-bar-item:hover {
  transition: all 0.2s ease-in-out;
  color: var(--color-gray-100);
  background-color: var(--color-primary);
}

.left-panel-drawer {
  width: calc(var(--panel-width) - 60px);
  height: 100%;
  box-shadow: var(--color-gray-300) 1px 0 0;
  overflow: hidden;
}
.left-panel-drawer-content {
  height: 100%;
  padding: 16px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}
</style>
