<script setup lang='ts'>
const { main, horizontalTop, horizontalWidth, verticalleft, verticalHeight } = useGuidesStyle()
const currentX = ref()
const currentY = ref()

function onMouseEnter(x: number, y: number) {
  currentX.value = x
  currentY.value = y
}

const isGuideLineShow = ref(false)
function onBoxMouseLeave() {
  isGuideLineShow.value = false
}

function onBoxMouseEnter() {
  isGuideLineShow.value = true
}
</script>

<template>
  <div class="h-full w-full flex-center overflow-auto bg-gray:10 font-mono">
    <div flex flex-col items-end>
      <div flex>
        <ValueRow :value="xValue" row-type="x" :current-idx="currentX" />
      </div>
      <div flex>
        <div>
          <ValueRow :value="yValue" row-type="y" :current-idx="currentY" />
        </div>
        <div ref="main" relative @mouseenter="onBoxMouseEnter" @mouseleave="onBoxMouseLeave">
          <TransitionGroup>
            <div v-if="isGuideLineShow" :style="{ top: horizontalTop, width: horizontalWidth }" display-none pointer-events-none absolute left-0 right-0 h-.5 bg-red />
            <div v-if="isGuideLineShow" :style="{ left: verticalleft, height: verticalHeight }" display-none pointer-events-none absolute bottom-0 top-0 w-.5 bg-red />
          </TransitionGroup>
          <Table @on-mouse-enter="onMouseEnter" />
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
</style>
