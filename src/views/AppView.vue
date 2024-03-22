<template>
  <div class="app-wrapper">
    <header>
      <AppNavigator msg="Hello" />
    </header>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppNavigator from '@/components/AppNavigator.vue'
</script>

<style scoped>
.app-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
main {
  height: calc(100% - 48px);
}
</style>
