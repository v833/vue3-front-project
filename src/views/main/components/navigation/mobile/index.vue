<template>
  <div>mobile</div>
</template>

<script setup lang="ts">
import { getCategory } from '@/api/category'
import { onMounted } from 'vue'

onMounted(async () => {
  const data = await getCategory()
  console.log(data)
})
</script>

<style lang="scss" scoped></style>
