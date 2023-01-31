<template lang="pug">
.checkbox
  input(type='checkbox' :id='id' @input="(event) => $emit('update:checked', event.target.checked)")
  label(:for='id') {{text}}
</template>

<script setup>

const props = defineProps({
  id: { type: Number, required: true },
  text: { type: String, default: '' }
})

</script>

<style lang="sass" scoped>
.checkbox
  label
    color: $lblue
    font: font(16, 20, 400)
    letter-spacing: -.02em
  input
    display: none
    & + label
      display: flex
      align-items: center
      gap: em(6, 16)
      position: relative
      padding: .5em em(30, 16) .5em 1em
      &::before,
      &::after
        content: ''
        position: absolute
        width: em(12, 16)
        height: em(12, 16)
      &::before
        z-index: 1
        border: 1px solid $lblue
        right: em(12, 16)
      &::after
        background: $dblue
        z-index: 2
        right: em(12, 16)
        opacity: 0
    &:checked
      & + label
        border-radius: em(40, 16)
        background: $type
        &::after
          opacity: 1
</style>