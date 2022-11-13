<template>
  <div>
    <m-waterfall
      class="px-1 w-full"
      :data="pexelsList"
      :nodeKey="'id'"
      :column="isMobileTerminal ? 2 : 5"
      :picturePreReading="true"
    >
      <template v-slot="{ item, width }">
        <item-vue :data="item" :width="width"></item-vue>
      </template>
    </m-waterfall>
  </div>
</template>

<script setup lang="ts">
import itemVue from './item.vue'
import { getPexelsList } from '@/api/pexels'
import { onMounted, ref } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'

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
