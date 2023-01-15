<template lang="pug">
.statistic-count
  StatisticCountItemEl(v-for='item, idx in statistic' :key='idx' :params='item?.params' :path='item?.path')
</template>

<script setup>

const props = defineProps({
  statistic: { type: Array, default: [] }
})

</script>

<style lang="sass" scoped>
.statistic-count
  margin-top: em(60, 16)
  display: flex
  align-items: center
  gap: em(30, 16)
  max-width: 996px
  width: 100%
</style>