<script setup lang='ts'>
// #region ruler
const horizontalLine = ref<HTMLDivElement | null>()
const verticalLine = ref<HTMLDivElement | null>()
const main = ref<HTMLDivElement | null>()

const { x, y } = useMouse()
const { left, top } = useElementBounding(main)

const onMouseMove = useThrottleFn(handleMouseMove, 16)
function handleMouseMove() {
  ;(horizontalLine.value as HTMLDivElement).style.top = `${y.value - top.value}px`
  // ;(horizontalLine.value as HTMLDivElement).style.width = `${mouseX - boxRect.left}px`
  ;(verticalLine.value as HTMLDivElement).style.left = `${x.value - left.value}px`
  // ;(verticalLine.value as HTMLDivElement).style.height = `${mouseY - boxRect.top}px`
}
// #endregion
</script>

<template>
  <div ref="main" class="h-full w-full" relative @mousemove="handleMouseMove">
    <div ref="horizontalLine" display-none pointer-events-none absolute left-0 right-0 h-1 bg-red />
    <div ref="verticalLine" display-none pointer-events-none absolute bottom-0 top-0 w-1 bg-red />
  </div>
</template>
