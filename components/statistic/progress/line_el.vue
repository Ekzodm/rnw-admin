<template lang="pug">
.progress-line
  .progress-line_title
    span {{content?.title}}
  .progress-line_track
    .progress-line_track-el(:style='{width: +content?.taped * 100 / +content?.max + "%"}')
      span {{content?.taped}}
</template>

<script setup>

const props = defineProps({
  content: { type: Object, default: {} }
})

</script>

<style lang="sass" scoped>
.progress-line
  display: flex
  align-items: center
  gap: .5em
  width: 100%
  &_title
    max-width: em(150, 16)
    width: 100%
    span
      font: font(16, 24, 400, 'NotoSans')
      color: $lblue
  &_track
    width: 100%
    &-el
      height: em(14, 16)
      display: flex
      align-items: center
      padding-left: em(4, 16)
      background: linear-gradient(270deg, #2B3674 5.56%, rgba(43, 54, 116, 0.12) 100%)
      border-radius: 0 em(60, 16) em(60, 16) 0
      height: em(14, 16)
    span
      font: font(14, 20, 400, 'NotoSans')
      color: $dblue
</style>