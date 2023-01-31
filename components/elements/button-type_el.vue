<template lang="pug">
button.button
  span {{title}}
  BaseSvgEl(title='cancel')
</template>

<script setup>

const props = defineProps({
  title: { type: String, default: '', required: true }
})

</script>

<style lang="sass" scoped>
.button
  background: transparent
  padding: .5em 1em
  border-radius: em(40, 16)
  font: font(16, 20, 400)
  display: flex
  align-items: center
  gap: em(5.33, 16)
  transition: .3s
  span
    letter-spacing: -.02em
    color: $lblue
  :deep(svg)
    width: em(13.3, 16)
    height: em(13.3, 16)
    fill: $dblue
    display: none
  &:hover
    background: $type
  &.active
    background: $type
    span
      color: $dblue
    :deep(svg)
      display: block
</style>