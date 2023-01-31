<template lang="pug">
.toggle
  button.toggle_button( v-for='item, idx in params' :key='idx' :class='[active === idx && "active"]' @click.prevent='toggle(item, idx)') {{item?.title}}
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
  params: { type: Array, default: [] }
})
const emit = defineEmits(['type'])
const active = ref(0)
const toggle = (item, idx) => {
  active.value = idx
  emit('type', item.value)
}

</script>

<style lang="sass" scoped>
.toggle
  display: flex
  align-items: center
  &_button
    background: $background
    font: font(16, 24, 400, 'NotoSans')
    color: $dblue
    padding: .5em 1em
    &.active
      background: $dblue
      color: $background
    &:first-child
      border-top-left-radius: em(40, 16)
      border-bottom-left-radius: em(40, 16)
    &:last-child
      border-top-right-radius: em(40, 16)
      border-bottom-right-radius: em(40, 16)
</style>