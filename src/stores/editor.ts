import { defineStore } from 'pinia'
import { ref } from 'vue'
import { blocks as blocksData } from '@/mocks/blocks'
import type { BlockInfo } from '@/type/block'

export const useEditorStore = defineStore('editor', () => {
  const blocks = ref(blocksData)

  const addBlocks = (block: BlockInfo) => {
    blocks.value.push(block)
  }

  const updateBlocks = (newBlocks: BlockInfo[]) => {
    blocks.value = newBlocks
  }
  return {
    blocks,

    addBlocks,
    updateBlocks
  }
})
