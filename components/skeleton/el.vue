<template lang="pug">
.skeleton
</template>

<script setup>
const props = defineProps({
  params: { type: Object, default: () => {} }
})
</script>

<style lang="sass" scoped>
.skeleton
  position: relative
  overflow: hidden
  width: v-bind('params.width')
  height: v-bind('params.height')
  border-radius: v-bind('params.radius')
  background-color: $background
  background: linear-gradient(100deg,rgba(255, 255, 255, 0) 40%,rgba(255, 255, 255, .5) 50%, rgba(255, 255, 255, 0) 60%) $background
  background-size: 200% 100%
  background-position-x: 180%
  animation: 2s loading ease-in-out infinite

@keyframes loading
  to
    background-position-x: -20%
</style>