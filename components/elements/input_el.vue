<template lang="pug">
.input-block
  input(v-bind='$attrs' @input="$emit('update:modelValue', $event.target.value)" autocomplete="off" :class='[error && "error"]')
  span.input-block_error(v-if='error') {{error}}
</template>

<script>

export default {
  name: 'input_el',
  inheritAttrs: false,
  props: {
    modelValue: { type: String, default: '' },
    error: { type: Boolean, default: false },
  }
}
</script>

<style lang="sass" scoped>
.input-block
  display: flex
  align-items: center
  width: 100%
  position: relative
  input
    background: $white
    color: $dblue
    padding: em(12, 16) 1em
    width: 100%
    border-radius: em(30, 16)
    font: font(16, 24, 400)
    border: 1px solid transparent
    &::placeholder
      color: $placeholder
    &.error
      border-color: $red
  &_error
    color: $red
    font: font(12, 15, 400)
    display: block
    position: absolute
    left: 105%
    white-space: nowrap
</style>