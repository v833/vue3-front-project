<template>
  <div>
    <item-vue v-for="item in pexelsList" :key="item.id" :data="item"></item-vue>
  </div>
</template>

<script setup lang="ts">
import itemVue from './item.vue'
import { getPexelsList } from '@/api/pexels'
import { onMounted, ref } from 'vue'

let query = {
  page: 1,
  size: 20
}

const pexelsList: any = ref([])

const getPexelsData = async () => {
  const res = await getPexelsList(query)
  pexelsList.value = res || []
}

getPexelsData()
</script>

<style lang="scss" scoped></style>
