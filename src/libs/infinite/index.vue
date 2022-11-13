<template>
  <div>
    <slot></slot>
    <div ref="loadingTarget" class="h-6 py-4">
      <m-svg-icon
        v-show="loading"
        class="w-4 h-4 mx-auto animate-spin"
        name="infinite-load"
      ></m-svg-icon>
      <p v-if="isFinished" class="text-center text-base text-zinc-400">
        已经没有更多数据了!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useVModel, useIntersectionObserver } from '@vueuse/core'
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  isFinished: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['onLoad', 'update:modelValue'])
const loading = useVModel(props)

const loadingTarget = ref(null)
useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
  if (isIntersecting && !loading.value && !props.isFinished) {
    loading.value = true
    emits('onLoad')
  }
})
</script>

<style lang="scss" scoped></style>
