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
</script>

<style lang="scss" scoped></style>
