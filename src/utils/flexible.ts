import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

export const isMobileTerminal = computed(() => {
  // 根据设备的宽度判断是否是移动端 1280px 以上是 PC 端
  return width.value < PC_DEVICE_WIDTH
})

// 动态指定rem的值 最大40px
export const useREM = () => {
  const MAX_FONT_SIZE = 40
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement
    const fontSize = html.clientWidth / 10
    html.style.fontSize = `${
      fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    }px`
  })
}
