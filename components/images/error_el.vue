<template lang="pug">
.error
  .error_title
    span Что-то пошло не так
  .error_reload(@click.prevent='refresh')
    BaseSvgEl(title='spiner')
</template>

<script setup>

const props = defineProps({
  refresh: { type: Function, default: () => {} }
})

</script>

<style lang="sass" scoped>
.error
  display: flex
  flex-direction: column
  align-items: center
  gap: em(7.69, 16)
  width: 100%
  padding: em(20, 16) em(30, 16)
  &_title
    span
      font: font(16, 24, 400)
      color: $dblue
  &_reload
    cursor: pointer
    :deep(svg)
      width: em(20, 16)
      height: em(20, 16)
      fill: $dblue
</style>