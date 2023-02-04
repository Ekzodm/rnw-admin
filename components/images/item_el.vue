<template lang="pug">
.images-item
  NuxtLink.images-item_edit(:to='`/publication/${item?.id}`')
    BaseSvgEl(title='edit')
  .images-item_image
    img(:src='path' :alt='item?.image_name' @load='is_loaded = true')
    //- BaseSvgEl(title='images')
  .images-item_status(v-if='item?.show_to_app')
    BaseSvgEl(title='check_circle')
    span Показано
  .images-item_status(v-else)
    BaseSvgEl(title='error')
    span Скрыто
</template>

<script setup>

import { computed, ref } from 'vue'

const props = defineProps({
  item: { type: Object, required: true }
})
const path = computed(() => `https://myrocknwall.com/images/profile/${props.item?.imagePaths[0]}/compress/${props.item?.image_name}`)
const is_loaded = ref(false)

</script>

<style lang="sass" scoped>
.images-item
  width: 100%
  position: relative
  &_edit
    position: absolute
    top: em(10, 16)
    right: em(8, 16)
    background: $background
    border-radius: 100%
    font-size: 1em
    width: 1em
    height: 1em
    display: flex
    align-items: center
    justify-content: center
    opacity: 0
    visibility: hidden
    transition: .3s
    &:hover
      opacity: 1
      visibility: visible
    :deep(svg)
      width: em(12, 16)
      height: em(12, 16)
  &_image
    width: 100%
    height: em(160, 16)
    background: $white
    display: flex
    align-items: center
    justify-content: center
    img
      max-width: em(105, 16)
      width: 100%
      height: em(160, 16)
      object-fit: cover
  &_status
    display: flex
    align-items: center
    justify-content: center
    gap: em(4, 16)
    margin-top: em(4, 16)
    :deep(svg)
      width: em(24, 16)
      height: em(24, 16)
    span
      font: font(16, 24, 400)
      color: $dblue
</style>