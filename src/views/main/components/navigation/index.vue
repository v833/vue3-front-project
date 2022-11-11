<template>
  <div>
    <mobile-navigation-vue
      v-if="isMobileTerminal"
      :data="categorys"
    ></mobile-navigation-vue>
    <pc-navigation-vue v-else></pc-navigation-vue>
  </div>
</template>

<script setup lang="ts">
import MobileNavigationVue from './mobile/index.vue'
import PcNavigationVue from './pc/index.vue'
import { isMobileTerminal } from '@/utils/flexible'
import { getCategory } from '@/api/category'
import { ref } from 'vue'

const categorys: any = ref([])
const getCategoryData = async () => {
  const res = await getCategory()
  categorys.value = res
}

getCategoryData()
</script>

<style lang="scss" scoped></style>
