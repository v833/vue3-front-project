<template>
  <div>
    <m-infinite
      v-model="loading"
      :isFinished="isFinished"
      @onLoad="getPexelsData"
    >
      <m-waterfall
        class="px-1 w-full"
        :data="pexelsList"
        :nodeKey="'id'"
        :column="isMobileTerminal ? 2 : 5"
        :picturePreReading="false"
      >
        <template v-slot="{ item, width }">
          <item-vue :data="item" :width="width" @click="onToPins"></item-vue>
        </template>
      </m-waterfall>
    </m-infinite>

    <!-- 详情内容展示 -->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <pins-vue v-if="isVisiblePins" :id="currentPins.id"></pins-vue>
    </transition>
  </div>
</template>

<script setup>
import { useEventListener } from '@vueuse/core'
import itemVue from './item.vue'
import { getPexelsList } from '@/api/pexels'
import { onMounted, ref, watch } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'
import { useStore } from 'vuex'
import pinsVue from '@/views/pins/components/pins.vue'
import gsap from 'gsap'

const store = useStore()

let query = {
  page: 1,
  size: 20
}

const loading = ref(false)
const isFinished = ref(false)

const pexelsList = ref([])

const getPexelsData = async () => {
  // 数据全部加载完成则 return
  if (isFinished.value) {
    return
  }

  // 完成第一次请求之后，后续请求让 page 自增
  if (pexelsList.value.length) {
    query.page += 1
  }

  // 触发接口请求
  const data = await getPexelsList(query)
  // 初始请求清空数据源
  if (query.page === 1) {
    pexelsList.value = data
  } else {
    pexelsList.value.push(...data)
  }
  // 判断数据是否全部加载完成
  if (query.page === 4) {
    isFinished.value = true
  }
  // 修改 loading 标记
  loading.value = false
}

const resetQuery = () => {
  let page = Math.ceil(Math.random() * 3)
  if (page === query.page) {
    if (query.page === 4) {
      page--
    } else {
      page++
    }
  }
  query = {
    page,
    size: 20
  }
  // 重置请求参数
  isFinished.value = false
  pexelsList.value = []
}

/**
 * 监听 currentCategory 的变化
 */
watch(() => store.getters.currentCategory, resetQuery)

/**
 * 监听搜索内容项的变化
 */
watch(() => store.getters.searchText, resetQuery)

const isVisiblePins = ref(false)
// 当前选中的 pins 属性
const currentPins = ref({})
/**
 * 进入 pins
 */
const onToPins = (item) => {
  history.pushState(null, null, `/pins/${item.id}`)
  currentPins.value = item
  isVisiblePins.value = true
}

/**
 * 监听浏览器后退按钮事件
 */
useEventListener(window, 'popstate', () => {
  isVisiblePins.value = false
})

/**
 * 进入动画开始前
 */
const beforeEnter = (el) => {
  gsap.set(el, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: '0 0',
    translateX: currentPins.value.localtion?.translateX,
    translateY: currentPins.value.localtion?.translateY,
    opacity: 0
  })
}
/**
 * 进入动画执行中
 */
const enter = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    onComplete: done
  })
}
/**
 * 离开动画执行中
 */
const leave = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 0,
    scaleY: 0,
    x: currentPins.value.localtion?.translateX,
    y: currentPins.value.localtion?.translateY,
    opacity: 0
  })
}
</script>

<style lang="scss" scoped></style>
