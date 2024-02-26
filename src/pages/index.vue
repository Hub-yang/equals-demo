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
  <div class="min-h-100vh min-w-100vw flex-center overflow-auto bg-gray:10 font-mono">
    <div min-w-240 flex flex-col items-end>
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
    <div ml-2 min-w-30 flex flex-col gap-2>
      <div flex items-center justify-start gap-2>
        <div h-7 w-7 flex-center border-2 border-color-gray:50 rounded-1 bg-gray:10 text-3>
          <span i-ic:round-not-equal />
        </div>
        <span text-sm font-bold>不相等</span>
      </div>
      <div flex items-center justify-start gap-2>
        <div h-7 w-7 flex-center border-2 border-color-gray rounded-1 bg-gray:50 text-3>
          <span i-mdi:approximately-equal />
        </div>
        <span text-sm font-bold>宽松相等</span>
      </div>
      <div flex items-center justify-start gap-2>
        <div h-7 w-7 flex-center border-2 border-color-black rounded-1 bg-black:50 text-4.5>
          <span i-ic:round-equals />
        </div>
        <span text-sm font-bold>严格相等</span>
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
