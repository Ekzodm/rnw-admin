<template lang="pug">
.statistic-count_content
  .statistic-count_content-title
    span {{params?.title}}
  .statistic-count_content-value
    span {{data}} {{params?.description}}
</template>

<script setup>

const props = defineProps({
  params: { type: Object, default: {}},
  data: { type: String, default: '' }
})

</script>

<style lang="sass" scoped>
.statistic-count_content
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%
  padding: em(20, 16) em(30, 16)
  &-title
    span
      font: font(16, 24, 400, 'NotoSans')
      color: $lblue
  &-value
    span
      font: font(24, 32, 700, 'NotoSans')
      color: $dblue
</style>