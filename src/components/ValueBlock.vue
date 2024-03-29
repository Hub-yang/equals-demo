<script setup lang='ts'>
import type { BlockState } from '~/types'

defineProps<{ block: BlockState }>()
function getBlockClass(block: BlockState) {
  const { x, y } = block
  if (rowValue[x] === colValue[y])
    return 'color-red i-ic:round-equals'
  // eslint-disable-next-line eqeqeq
  if (rowValue[x] == colValue[y])
    return 'color-blue i-mdi:approximately-equal'
  return 'color-green i-ic:round-not-equal'
}
</script>

<template>
  <div border="2" m=".25" flex items-center justify-center border-color-gray rounded-1 bg-gray:20 dark:border-color-gray:50 dark:bg-gray:10 hover:bg-black:50 dark:hover:bg-black:70>
    <span min-h-6 min-w-6 :class="getBlockClass(block)" />
  </div>
</template>
