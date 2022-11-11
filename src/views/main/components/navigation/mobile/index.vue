<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <!-- items -->

      <li
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        v-for="item of data"
        :key="item.id"
        @click=""
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  data: {
    type: Array as any,
    default: () => []
  }
})

const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})
</script>

<style lang="scss" scoped></style>
