<template>
  <div class="layout-runner">
    <div class="layout-runner-navigator">
      <div></div>
      <div class="address-wrapper">https://helloword.com/sdfsfsdf/sggwefwfsdfsdfsdfsdfsf</div>
      <PreviewModeSwitcher :preview-mode="props.previewMode" @preview-mode-change="greet" />
    </div>
    <div class="layout-runner-content-wrapper">
      <div class="layout-runner-content-header">
        <div class="layout-runner-content-navigator"></div>
        <div class="layout-runner-content-title">Byelide</div>
      </div>
      <div class="layout-runner-content">
        <SmoothDndContainer
          group-name="blocks"
          orientation="vertical"
          tag="div"
          class="blocks-list"
          @drop="
            (payload) => {
              const newBlocks = applyDrop(blocks, payload)
              // console.log(newBlocks)
              editorStore.updateBlocks(newBlocks)
            }
          "
        >
          <smooth-dnd-draggable v-for="block in blocks" :key="block">
            <div class="blocks-item">
              <!-- <div class="block-icon-wrapper">
                <component :is="d.icon" />
              </div> -->
              <!-- <span class="block-label">{{ block }}</span> -->
              <BlockRenderer :block="block" />
            </div>
          </smooth-dnd-draggable>
        </SmoothDndContainer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SmoothDndDraggable, SmoothDndContainer } from '../SmoothDnd/main'
import { useEditorStore } from '@/stores/editor'
import { storeToRefs } from 'pinia'
import PreviewModeSwitcher from './PreviewModeSwitcher.vue'
import type { PreviewType } from './type'
import { DropResult } from 'smooth-dnd'
import { arrayMove } from '@/utils/array'

import BlockRenderer from '@/blocks/BlockRenderer.vue'

const editorStore = useEditorStore()
const { blocks } = storeToRefs(editorStore)

const props = defineProps<{
  previewMode?: PreviewType
}>()

const emit = defineEmits<{
  'preview-mode-change': [mode: PreviewType]
}>()

function greet(mode: PreviewType) {
  emit('preview-mode-change', mode)
}

const applyDrop = <T extends any[]>(arr: T, dropResult: DropResult) => {
  const { removedIndex, addedIndex, payload } = dropResult
  const result = [...arr]
  if (addedIndex === null) {
    return result
  }
  if (addedIndex !== null && removedIndex === null) {
    result.splice(addedIndex, 0, payload)
  }
  if (addedIndex !== null && removedIndex !== null) {
    return arrayMove(result, removedIndex, addedIndex)
  }

  return result
}
</script>

<style scoped>
.layout-runner {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  margin: 8px 40px;
  background-color: var(--color-white);
  border-radius: 8px;
  box-shadow:
    0 0 1px rgb(62 65 86 / 37.5%),
    0 12px 24px rgb(62 65 86 / 15%),
    0 20px 40px rgb(62 65 86 / 10%);
}
.layout-runner-navigator {
  flex-shrink: 0;
  height: 42px;
  display: grid;
  font-size: var(--font-size-normal);
  align-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0 16px;
  border-bottom: 1px solid var(--color-gray-200);
  background-color: var(--color-gray-100);
}
.address-wrapper {
  grid-column: span 2 / span 2;
  border-radius: 6px;
  background-color: var(--color-gray-200);
  color: var(--color-gray-800);
  padding: 2px 32px 2px 12px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
}

.layout-runner-content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
}
.layout-runner-content-header {
  position: sticky;
  top: 0;
  z-index: 2;
}

.layout-runner-content-navigator {
  height: 56px;
  font-size: var(--font-size-normal);
  align-items: center;
  padding: 0 16px;
  background-color: var(--color-primary);
  border-bottom: 1px solid rgb(31 41 55 / 8%);
}

.layout-runner-content-title {
  display: flex;
  align-items: center;
  padding: 0 90px;
  height: 90px;
  font-size: 24px;
  font-weight: var(--font-weight-bolder);
  color: var(--color-white);
  background-color: var(--color-primary);
}
/* 内容区域 */
.layout-runner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 90px;
}
</style>

function storeToRefs(editorStore: any): { blocks: any } { throw new Error('Function not
implemented.') }
