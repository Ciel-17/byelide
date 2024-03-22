<script setup lang="ts">
// import { computed } from 'vue'
// import { RouterLink, RouterView, useRoute } from 'vue-router'

// const route = useRoute()
// const activeTab = computed(() => route.name)

// const routes = [
//   {
//     name: 'dataSource',
//     path: '/dataSource'
//   },
//   {
//     name: 'layout',
//     path: '/layout'
//   },
//   {
//     name: 'actions',
//     path: '/actions'
//   }
// ]
</script>

<template>
  <!-- 方法一： -->
  <!-- <RouterLink to="/dataSource">
    <div :style="{ background: activeTab === 'dataSource' ? 'pink' : '' }">dataSource</div>
  </RouterLink>
  <RouterLink to="/layout">
    <div :style="{ background: activeTab === 'layout' ? 'pink' : '' }">layout</div>
  </RouterLink>
  <RouterLink to="/actions">
    <div :style="{ background: activeTab === 'actions' ? 'pink' : '' }">actions</div>
  </RouterLink> -->
  <!-- 方法二： -->
  <!-- <RouterLink v-for="route in routes" :key="route.name" :to="route.name">
    <div :style="{ background: activeTab === route.name ? 'pink' : '' }">{{ route.name }}</div>
  </RouterLink> -->

  <!-- 方法三：最优解 -->
  <!-- <div class="tabs">
    <RouterLink v-for="route in routes" :key="route.name" :to="route.name">
      <div
        class="tab"
        :class="{ active: activeTab === route.name }"
        :style="{ background: activeTab === route.name ? 'pink' : '' }"
      >
        {{ route.name }}
      </div>
    </RouterLink>
  </div> -->

  <RouterView />
</template>

<style>
/* 类名切换的方式一定比动态样式好 */
/* .active {
  background: pink;
} */
</style>
