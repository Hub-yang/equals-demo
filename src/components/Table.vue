<script setup lang='ts'>
import type { Block } from '~/types'

const emit = defineEmits(['onMouseEnter'])
const cellList = ref<Block[][]>([])
cellList.value = Array.from({ length: 21 }, (_, x) => Array.from({ length: 21 }, (_, y) => ({ x, y })))
function checkEquality(x: number, y: number) {
  if (xValue[x] === yValue[y])
    return 0
    // eslint-disable-next-line eqeqeq
  if (xValue[x] == yValue[y])
    return 1
  return 2
}

function getBlockClass(x: number, y: number) {
  if (checkEquality(x, y) === 0)
    return 'border-color-black bg-black:50 text-4.5'
  if (checkEquality(x, y) === 1)
    return 'border-color-gray bg-gray:50 text-3'
  if (checkEquality(x, y) === 2)
    return 'border-color-gray:50 bg-gray:10 text-3'
}

function getIcon(x: number, y: number) {
  if (checkEquality(x, y) === 0)
    return 'i-ic:round-equals'
  if (checkEquality(x, y) === 1)
    return 'i-mdi:approximately-equal'
  if (checkEquality(x, y) === 2)
    return 'i-ic:round-not-equal'
}

function onMouseEnter(x: number, y: number) {
  emit('onMouseEnter', x, y)
}
</script>

<template>
  <div v-for="(row, y) in cellList" :key="y" flex-center>
    <div v-for="(_, x) in row" :key="x" class="min-h-8 min-w-8 flex-center text-2">
      <div h-7 w-7 flex-center border-2 rounded-1 hover:bg-black:70 :class="getBlockClass(x, y)" @mouseenter="onMouseEnter(x, y)">
        <span :class="getIcon(x, y)" />
      </div>
    </div>
  </div>
</template>
