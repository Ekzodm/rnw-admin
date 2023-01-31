<template lang="pug">
button.button(:disabled='disabled')
  span {{title}}
</template>

<script setup>

const props = defineProps({
  title: { type: String, default: '', required: true },
  disabled: { type: Boolean, default: false }
})

</script>

<style lang="sass" scoped>
.button
  padding: em(12, 16) em(24, 16)
  border-radius: em(30, 16)
  transition: .3s
  &:disabled
    opacity: .4
    cursor: default
  &--one
    background: $dblue
    color: $white
    font: font(16, 24, 700)
  &--two
    border: 1.5px solid $dblue
    color: $dblue
    font: font(16, 24, 400)
    &:hover
      box-shadow: 0 8px 16px rgba(56, 32, 123, .2)
  &--three
    font: font(16, 24, 700)
    color: $dblue

</style>