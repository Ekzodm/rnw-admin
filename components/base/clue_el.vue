<template lang="pug">
.clue
  span {{text}}
</template>

<script setup>

const props = defineProps({
  text: { type: String, default: '' },
  x: { type: Number, default: 0 }
})

</script>

<style lang="sass" scoped>
.clue
  padding: em(10, 16)
  background: $white
  box-shadow: 0 18px 30px rgba(56, 32, 123, .15)
  border-radius: em(15, 16)
  position: absolute
  top: 0
  left: v-bind('props.x')
  white-space: nowrap
  z-index: 10
  span
    font: font(14, 20, 400)
    color: $dblue
</style>