<template>
  <div>
    <mobile-navigation-vue v-if="isMobileTerminal"></mobile-navigation-vue>
    <pc-navigation-vue v-else></pc-navigation-vue>
  </div>
</template>

<script setup lang="ts">
import MobileNavigationVue from './mobile/index.vue'
import PcNavigationVue from './pc/index.vue'
import { isMobileTerminal } from '@/utils/flexible'
import { useStore } from 'vuex'

const store = useStore()
// 触发 category 数据获取动作
store.dispatch('category/useCategoryData')
</script>

<style lang="scss" scoped></style>
