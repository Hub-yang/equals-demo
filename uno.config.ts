import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
    ['flex-end', 'flex items-center justify-end'],
    ['value-normal', 'flex-end whitespace-nowrap text-3 font-bold'],
  ],
  rules: [
    ['vertical-text', {
      /* 从左到右的垂直书写 */
      'writing-mode': 'vertical-lr',
      /* 文字朝向，使得文字保持正向 */
      'text-orientation': 'sideways',
      /* 防止文字换行 */
      'white-space': 'nowrap',
    }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
