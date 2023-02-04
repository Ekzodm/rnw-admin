<template lang="pug">
.select(:class='[flag && "active"]')
  .select-value(@click.prevent='flag === true ? flag = false : flag = true')
    slot(name='value')
    ElementsArrowEl
  .select-hide(v-show='flag')
    ul.select-list(@click.prevent='flag = false')
      slot(name='list')
</template>

<script setup>
import { ref } from 'vue'
const flag = ref(false)
</script>

<style lang="sass" scoped>
.select
  position: relative
  z-index: 100
  &-value
    display: flex
    align-items: center
    justify-content: space-between
    gap: .5em
    color: $lblue
    cursor: pointer
  &-arrow
    width: 1em
    height: 1em
    display: flex
    align-items: center
    justify-content: center
    :deep(svg)
      width: em(12, 16)
      height: em(12, 16)
  &-hide
    background: $white
    position: absolute
    top: 105%
    left: em(-13, 16)
    min-width: calc(100% + em(17, 16))
    z-index: 10
    border-radius: 10px
  &-list
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: em(4, 16)
    padding: em(8, 16) 0
    box-shadow: 0 18px 30px rgba(56, 32, 123, .15)
    border-radius: 10px
    width: 100%
</style>