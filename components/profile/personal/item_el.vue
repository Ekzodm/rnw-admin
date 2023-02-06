<template lang="pug">
NuxtLink.personal-item(:to='`/profile/${item.id}`')
  .personal-item_image
    BaseSvgEl(title='user')
    .personal-item_status
      BaseSvgEl(title='error')
  .personal-item_wrapper
    .personal-item_name
      span {{name}}
    .personal-item_info
      span нет данных
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
  item: { type: Object, required: true }
})
const name = computed(() => props.item.profile ? `${props.item.profile.name} ${props.item.profile.surname}` : props.item.login)

</script>

<style lang="sass" scoped>
.personal-item
  display: flex
  align-items: center
  gap: em(24, 16)
  &_image
    width: em(46, 16)
    height: em(46, 16)
    background: $background
    border-radius: 100%
    display: flex
    align-items: center
    justify-content: center
    position: relative
    :deep(svg)
      width: em(28.5, 16)
      height: em(28.5, 16)
  &_status
    position: absolute
    right: em(-10, 16)
    bottom: 0
    display: flex
    :deep(svg)
      width: em(20, 16)
      height: em(20, 16)
  &_wrapper
    display: flex
    flex-direction: column
    align-items: flex-start
  &_name
    span
      font: font(16, 24, 400)
      color: $dblue
  &_info
    span
      font: font(16, 24, 700)
      color: $dblue
</style>