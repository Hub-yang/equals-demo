<script setup lang='ts'>
import type { Value } from '~/types'

const props = defineProps(['value', 'rowType', 'currentIdx'])
const value = toValue(props.value)
function getActiveClass(i: number) {
  let classList = ''
  props.rowType === 'x' && (classList += 'rotate-90 ')
  props.currentIdx === i && (classList += 'text-red text-4')
  return classList
}

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
</script>

<template>
  <div v-for="(val, i) in value" :key="i" value-normal transition-font-80 :class="getActiveClass(i)">
    {{ matchVal(val) }}
  </div>
</template>
