<template lang="pug">
.list-control
  .list-control_block
    ElementsButtonEl(:title='control_title[0]' @click.prevent='list.toggle_edit()' class='button--two')
  .list-control_block
    ElementsButtonEl(:title='control_title[1]' class='button--three' :disabled='!list.edit')
    ElementsButtonEl(title='Переместить' class='button--one' :disabled='!list.edit')
</template>

<script setup>

import { computed } from 'vue'
import { useListStore } from '~/store/list'

const list = useListStore()

const control_title = computed(() => {
  switch (list.type) {
    case 'tag':
      return ['Выбрать теги', 'Добавить тег']
    case 'collection':
      return ['Выбрать коллекции', 'Добавить коллекцию']
    case 'category':
      return ['Выбрать категории', 'Добавить категорию']
  }
})

</script>

<style lang="sass" scoped>
.list-control
  display: flex
  align-items: center
  justify-content: space-between
  gap: em(30, 16)
  width: 100%
  &_block
    display: flex
    align-items: center
    gap: em(39, 16)
</style>