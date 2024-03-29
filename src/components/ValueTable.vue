<script setup lang='ts'>
import type { BlockState, Value } from '~/types'

const state = ref<BlockState[][]>(Array.from({ length: 21 }, (_, y) => Array.from({ length: 21 }, (_, x) => ({ x, y }))))
const {
  main,
  horizontalTop,
  horizontalWidth,
  verticalleft,
  verticalHeight,
  isGuideLineShow,
  onBoxMouseEnter,
  onBoxMouseLeave,
} = useGuidesStyle()

function isString(value: Value) {
  return typeof value === 'string'
}

function matchVal(value: Value) {
  if (isString(value))
    return `"${value}"`
  if (value === undefined || value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY || Object.is(value, Number.NaN))
    return `${value}`
  return JSON.stringify(value)
}

const currentX = ref<number>()
const currentY = ref<number>()

function onBlockMouseEnter(x: number, y: number) {
  [currentX.value, currentY.value] = [x, y]
}
</script>

<template>
  <div ma w-fit flex items-end>
    <div flex="~ col items-end" mr-2.5>
      <span v-for="(value, i) in rowValue" :key="i" :class="[i === currentY && isGuideLineShow ? 'active' : '']" border="2 transparent" block min-h-6.5 min-w-6 transition-color-100 m=".25">{{ matchVal(value) }}</span>
    </div>
    <div>
      <div>
        <span v-for="(value, i) in rowValue" :key="i" :class="[i === currentX && isGuideLineShow ? 'active' : '']" border="2 transparent" inline-block min-h-6 min-w-6.5 transition-color-100 vertical-text m=".25">{{ matchVal(value) }}</span>
      </div>
      <div ref="main" relative w-fit @mouseenter="onBoxMouseEnter" @mouseleave="onBoxMouseLeave">
        <TransitionGroup>
          <div v-if="isGuideLineShow" :style="{ top: horizontalTop, width: horizontalWidth }" display-none pointer-events-none absolute left-0 right-0 h-.5 bg-red />
          <div v-if="isGuideLineShow" :style="{ left: verticalleft, height: verticalHeight }" display-none pointer-events-none absolute bottom-0 top-0 w-.5 bg-red />
        </TransitionGroup>
        <div w-fit overflow-auto>
          <div v-for="(row, y) in state" :key="y" ma w-max flex items-center justify-center>
            <ValueBlock v-for="(block, x) in row" :key="x" :block="block" @mouseenter="onBlockMouseEnter(x, y)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.active {
  color: rgba(248, 113, 113, 1);
}
</style>
