<template lang="pug">
form.list-popup(@submit.prevent='submit' novalidate)
  button.list-popup_close(@click.prevent='popup?.toggle_popup')
    BaseSvgEl(title='cross')
  .list-popup_title
    span {{popup.component.title}}
  .list-popup_list(v-if='popup.component.action === "update"')
    span {{}} будут перемещены в список {{popup.component.type}}:
  .list-popup_input
    ElementsInputEl(type='text' v-model='title' placeholder='Название')
  .list-popup_control
    ElementsButtonEl(title='Закрыть' type='button' class='button--three' @click.prevent='popup?.toggle_popup')
    ElementsButtonEl(:title='popup.component.action === "add" ? "Добавить" : "Переместить"' type='submit' class='button--one')
</template>

<script setup>

import { ref } from 'vue'
import { usePopupStore } from '~/store/popup'
import { auth_request } from '~/service/fetch_wrapper'
import { useListStore } from '~/store/list'

const popup = usePopupStore()
const {list} = useListStore()
const title = ref('')
const list_checked = Array.from(list)
const submit = async () => {
  const fd = new FormData()
  if(popup.component?.action === 'add') {
    switch (popup.component.path) {
      case 'tag':
        fd.append('value', title.value)
      break;
      default:
        fd.append('name', title.value)
      break;
    }
  }
  const result = await auth_request(`/${popup.component?.path}`, { method: 'post', body: fd })
  console.log(result)
}
</script>

<style lang="sass" scoped>
.list-popup
  display: flex
  flex-direction: column
  align-items: center
  gap: em(30 ,16)
  &_close
    font-size: 1em
    align-self: flex-end
    :deep(svg)
      width: 2em
      height: 2em
  &_title
    span
      font: font(24, 32, 700)
      color: $dblue
  &_input
    width: 100%
    max-width: em(385, 16)
  &_control
    width: 100%
    display: flex
    justify-content: space-between
    align-items: center
    :deep(.button)
      flex: 0 1 em(200, 16)
  
</style>