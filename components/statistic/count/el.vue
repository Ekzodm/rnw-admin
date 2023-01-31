<template lang="pug">
.count
  StatisticCountItemEl(v-for='item, idx in statistic' :key='idx' :params='item?.params' :path='item?.path')
</template>

<script setup>

const props = defineProps({
  statistic: { type: Array, default: [] }
})

</script>

<style lang="sass" scoped>
.count
  display: flex
  align-items: center
  gap: em(30, 16)
  max-width: 966px
  width: 100%
</style>