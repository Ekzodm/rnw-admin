<template lang="pug">
.list
  .list-type
    ElementsButtonTypeEl(v-for='item, idx in sort_buttons' :key='idx' :title='item?.title' @click='toggle_active(idx)' :class='[active === idx ? "active": ""]')
  .list-search
    ElementsInputEl(type='search' placeholder='Поиск' v-model='search')     
  ListGridEl(:params='{ search, path: sort_buttons[active].path, active }')

</template>

<script setup>

import { ref } from 'vue'

const sort_buttons = [{ title: 'Теги', path: 'tag' }, { title: 'Коллекции', path: 'collection' },{ title: 'Категории', path: 'category' }]
const active = ref(0) // Активный индекс
const search = ref('') // Поиск
const toggle_active = idx => active.value = idx
</script>

<style lang="sass" scoped>
.list
  background: $white
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: em(30, 16)
  width: 100%
  border-radius: em(30, 16)
  padding: em(30, 16)
  & > *
    width: 100%
  &-type
    display: flex
    align-items: center
    gap: em(30 ,16)
  &-search
    :deep(.input-block)
      max-width: em(385, 16)
    :deep(.input-block input)
      background: $type
      color: $dblue
  &-grid
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: em(30, 16)
</style>