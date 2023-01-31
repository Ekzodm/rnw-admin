<template lang="pug">
button.calendar-days_el(:class='[item?.class, active_class && "active", item?.range && "range"]' @click.prevent='active()')
  span {{item?.value}}
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
  item: { type: Object, default: {} },
  idx: { type: Number, default: 0 },
  active: { type: Array, default: [] }
})
const emit = defineEmits(['active'])
const active = () => emit('active', props.idx)
const active_class = computed(() => props.active.includes(props.idx))

</script>

<style lang="sass" scoped>
.calendar-days_el
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  font-size: 1em
  height: em(40, 16)
  span
    display: flex
    align-items: center
    justify-content: center
    font: font(14, 20, 400)
    width: em(40, 16)
    height: em(40, 16)
  &.today
    span
      border: 1px dashed $dblue
      border-radius: 100%
  &.prev-date,
  &.next-date
    color: $lblue
  &.active
    span
      background: $dblue
      color: $white
      border-radius: 100%
    &.range
      &:first-child
        &::before
          border-radius: em(40, 16) 0 0 em(40, 16)
      &:last-child
        &::before
          border-radius: 0 em(40, 16) em(40, 16) 0
  &.range
    position: relative
    &::before
      content: ''
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      background: $type
      z-index: -1
</style>