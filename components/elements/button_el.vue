<template lang="pug">
button.button
  span {{title}}
</template>

<script setup>

const props = defineProps({
  title: { type: String, default: '', required: true }
})

</script>

<style lang="sass" scoped>
.button
  background: $dblue
  color: $white
  font: font(16, 24, 400, 'NotoSans')
  padding: em(12, 16) em(24, 16)
  border-radius: em(30, 16)
</style>