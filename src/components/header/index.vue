<template>
  <div
    class="w-full duration-500 bg-white dark:bg-zinc-800 border-b border-b-zinc-200 dark:border-b-zinc-700 px-2 py-1 h-header"
  >
    <div class="flex items-center">
      <img
        class="h-4 cursor-pointer mr-2"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        @click="$router.push('/')"
        alt=""
      />
      <header-search class="w-full guide-search mr-1" />
      <header-theme class="relative mr-1" />
      <header-my />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderSearch from './header-search/index.vue'
import HeaderTheme from './header-theme.vue'
import HeaderMy from './header-my.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// const onLogoClick = () => {
//   router.push('/')
// }
</script>

<style lang="scss" scoped></style>
