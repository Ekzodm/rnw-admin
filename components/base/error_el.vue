<template lang="pug">
.error
  h3 Что то пошло не так...
  button.error_button(@click.prevent='refresh()')
    CommonBaseSvgEl(title='reload')
</template>

<script setup>


</script>

<style lang="sass" scoped>
.error
  display: flex
  flex-direction: column
  align-items: center
  margin-top: em(30, 16)
  gap(10, 16)
  h3
    font: font(20, 25, 400)
    color: $text
  &_button
    :deep(svg)
      width: em(30, 16)
      height: em(30, 16)
      fill: $text
      
</style>