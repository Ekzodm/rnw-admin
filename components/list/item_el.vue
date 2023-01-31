<template lang="pug">
.list-item
  NuxtLink.list-item_link(v-if='!checkbox_list.edit' :to='`list/${item?.id}`') {{item?.title}}
  ElementsCheckboxEl(v-else :text='item?.title' :id='item?.id' v-model:checked='checkbox_list.list[item?.id]')
</template>

<script setup>

import { useListStore } from "~/store/list"

const checkbox_list = useListStore()
const props = defineProps({
  item: { tyoe: Object, default: {} }
})

</script>

<style lang="sass" scoped>
.list-item
  justify-self: flex-start
  &_link
    font: font(16, 20, 400)
    letter-spacing: -.02em
    color: $lblue
    background: transparent
    padding: .5em 1em
    border-radius: em(40, 16)
    &:hover
      background: $type

</style>