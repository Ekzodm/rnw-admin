<template lang="pug">
.personal
  BaseTitleEl(:title='title' :page='false')
  template(v-if='personal?.pending')
    .personal-grid
      ProfilePersonalPreloaderEl(v-for='item, idx in 3' :key='idx')
  template(v-else-if='personal?.error')
    .personal-grid
  template(v-else)
    .personal-grid
      ProfilePersonalItemEl(v-for='item in personal.data' :key='item.id' :item='item')
</template>

<script setup>

const props = defineProps({
  title: { type: String, default: '' },
  personal: { type: Object, required: true }
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