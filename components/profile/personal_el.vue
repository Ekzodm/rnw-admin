<template lang="pug">
.personal
  BaseTitleEl(:title='title' :page='false')
  .personal-grid
    ProfileEl
</template>

<script setup>

const props = defineProps({
  title: { type: String, default: '' }
})

</script>

<style lang="sass" scoped>
.personal
  background: $white
  padding: em(30, 16)
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: em(30, 16)
  width: 100%
  border-radius: em(30, 16)
  &-grid
    width: 100%
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: em(30, 16)
</style>