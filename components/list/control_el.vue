<template lang="pug">
.list-control
  .list-control_block
    ElementsButtonEl(:title='control_title[0]' @click.prevent='list.toggle_edit()' class='button--two')
  .list-control_block
    ElementsButtonEl(:title='control_title[1]' class='button--three' :disabled='!list.edit' @click.prevent='add')
    ElementsButtonEl(title='Переместить' class='button--one' :disabled='!list.edit')
</template>

<script setup>

import { computed } from 'vue'
import { useListStore } from '~/store/list'
import { usePopupStore } from '~/store/popup'

const list = useListStore()
const popup = usePopupStore()

const control_title = computed(() => {
  switch (list.type) {
    case 'tag':
      return ['Выбрать теги', 'Добавить тег', 'Добавление тега', 'тег']
    case 'collection':
      return ['Выбрать коллекции', 'Добавить коллекцию', 'Добавление коллекции', 'коллекцию']
    case 'category':
      return ['Выбрать категории', 'Добавить категорию', 'Добавление категории', 'категорию']
  }
})
const add = () => {
  const payload = {
    name: 'ListPopupEl',
    title: control_title.value[2],
    path: list.type,
    action: 'add',
    type: control_title.value[3]
  }
  popup.change_popup_component(payload)
}

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