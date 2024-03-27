<template>
  <div>
    <component :is="blockComp"></component>
  </div>
</template>

<script setup lang="ts">
import ChartBlock from './basic/ChartBlock.vue'
import HeroTitleBlock from './basic/HeroTitleBlock.vue'
import ImageBlock from './basic/ImageBlock.vue'
import QuoteBlock from './basic/QuoteBlock.vue'
import ViewBlock from './basic/ViewBlock.vue'
import ErrorBlock from './basic/ErrorBlock.vue'
import type { BlockInfo } from '@/type/block'

const props = defineProps<{ block: BlockInfo }>()
console.log(props, '...............')
let blockComp: any = null

switch (props.block.type) {
  case 'chart':
    blockComp = ChartBlock
    break
  case 'hero':
    blockComp = HeroTitleBlock
    break
  case 'image':
    blockComp = ImageBlock
    break
  case 'quote':
    blockComp = QuoteBlock
    break
  case 'view':
    blockComp = ViewBlock
    break
  default:
    blockComp = ErrorBlock
}
</script>

<style scoped></style>
