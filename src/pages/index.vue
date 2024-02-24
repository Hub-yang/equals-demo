<script setup lang='ts'>
interface Block { x: number, y: number }
const cellList = ref<Block[][]>([])

// const xValue = ref<string[]>([

// ])
// const yValue = ref<string[]>([])

cellList.value = Array.from({ length: 21 }, (_, x) => Array.from({ length: 21 }, (_, y) => ({ x, y })))
</script>

<template>
  <div flex="~" h-full w-full items-center justify-center bg-gray:10>
    <div h-200 w-200 rounded-2>
      <div v-for="(row, y) in cellList" :key="y" ma w-max flex items-center justify-center>
        <div v-for="(block, x) in row" :key="x" border=".5 gray-400/10" m=".5" min-h-9 min-w-9 flex items-center justify-center bg="gray-500/10" text-2 hover:bg="gray-500/50">
          {{ block.x }}-{{ block.y }}
        </div>
      </div>
    </div>
  </div>
</template>
