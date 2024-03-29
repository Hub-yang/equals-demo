export function useGuidesStyle() {
  const main = ref<HTMLDivElement | null>()
  const { x, y } = useMouse()
  const { left, top } = useElementBounding(main)
  const horizontalTop = computed(() => `${y.value - top.value}px`)
  const horizontalWidth = computed(() => `${x.value - left.value}px`)
  const verticalleft = computed(() => `${x.value - left.value}px`)
  const verticalHeight = computed(() => `${y.value - top.value}px`)

  const isGuideLineShow = ref(false)
  function onBoxMouseLeave() {
    isGuideLineShow.value = false
  }

  function onBoxMouseEnter() {
    isGuideLineShow.value = true
  }
  return {
    main,
    horizontalTop,
    horizontalWidth,
    verticalleft,
    verticalHeight,
    isGuideLineShow,
    onBoxMouseEnter,
    onBoxMouseLeave,
  }
}
