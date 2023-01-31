<template lang="pug">
.count-item_content
  .count-item_content-title
    span {{params?.title}}
  .count-item_content-value
    span {{data}} {{params?.description}}
</template>

<script setup>

const props = defineProps({
  params: { type: Object, default: {}},
  data: { type: String, default: '' }
})

</script>

<style lang="sass" scoped>
.count-item_content
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