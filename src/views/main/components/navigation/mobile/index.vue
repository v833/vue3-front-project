<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
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
        <m-svg-icon
          @click="onHamburgerClick"
          class="w-1.5 h-1.5"
          name="hamburger"
        ></m-svg-icon>
      </li>
      <!-- items -->

      <li
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        :class="{ 'text-zinc-100': currentCategoryIndex === index }"
        :ref="refs.set"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <m-popup v-model="isOpenPopup">
    <menuVue @onItemClick="onItemClick"></menuVue>
  </m-popup>
</template>

<script setup>
import { ref, watch } from 'vue'
import MenuVue from '../../menu/index.vue'
import { useScroll, useTemplateRefsList } from '@vueuse/core'

const sliderStyle = ref({
  transform: 'translateX(0)',
  width: '52px'
})

const ulTarget = ref()
const currentCategoryIndex = ref(0)
const { x: scrollWidth } = useScroll(ulTarget)

const refs = useTemplateRefsList()

watch(currentCategoryIndex, (val) => {
  const item = refs.value[val]
  const { left, width } = item.getBoundingClientRect()
  sliderStyle.value = {
    transform: `translateX(${scrollWidth.value + left - 10}px)`,
    width: `${width}px`
  }
  item.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' })
})

const onItemClick = (index) => {
  currentCategoryIndex.value = index
  isOpenPopup.value = false
}

const isOpenPopup = ref(false)
const onHamburgerClick = () => {
  isOpenPopup.value = true
}
</script>

<style lang="scss" scoped></style>
