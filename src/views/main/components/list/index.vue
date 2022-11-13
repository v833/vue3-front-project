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
        :picturePreReading="true"
      >
        <template v-slot="{ item, width }">
          <item-vue :data="item" :width="width"></item-vue>
        </template>
      </m-waterfall>
    </m-infinite>
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

const loading = ref(false)
const isFinished = ref(false)

const pexelsList: any = ref([])

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
  const data: any = await getPexelsList(query)
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
</script>

<style lang="scss" scoped></style>
