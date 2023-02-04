<template lang="pug">
.admin
  BaseAsideEl
  .admin-wrapper
    slot
  teleport(to='body')
    NotificationEl
  teleport(to='body')
    BasePopupEl(v-if='store_popup.popup_flag')
      component(:is='component')
</template>

<script setup>

import { computed } from 'vue'

import { usePopupStore } from "~/store/popup"
const store_popup = usePopupStore()
const list_popup = resolveComponent('list/popup/el')
// const product_popup = resolveComponent('admin/popup/product_el')
const component = computed(() => {
  switch (store_popup.popup_component.name) {
    case 'ListPopupEl':
      return list_popup
  }
})

</script>

<style lang="sass" scoped>
.admin
  display: flex
  align-items: flex-start
  &-wrapper
    display: flex
    flex-direction: column
    align-items: flex-start
    padding: em(90, 16) em(30, 16) 0
    width: 100%
</style>