<template>
  <div class="w-full">
    <m-search v-model="searchValue"></m-search>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchValue = ref('')
</script>

<style lang="scss" scoped></style>
