<template lang="pug">
.error
  .container-column
    h3 Что то пошло не так...
    button.error_button(@click.prevent='post_store.posts.refresh()')
      CommonBaseSvgEl(title='reload')
</template>

<script setup>

import { usePostStore } from '~/store/post'
const post_store = usePostStore()

</script>

<style lang="sass" scoped>
.error
  margin-top: em(30, 16)
  .container-column
    align-items: center
    gap: em(20, 16)
  h3
    font: font(20, 25, 400, 'NotoSans')
    color: $text
  &_button
    :deep(svg)
      width: em(30, 16)
      height: em(30, 16)
      fill: $text
      
</style>