import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEnvStore = defineStore('debug', () => {
  const debug = ref(false)
  function toggle() {
    debug.value = !debug.value
  }

  return {
    debug,
    toggle
  }
})
