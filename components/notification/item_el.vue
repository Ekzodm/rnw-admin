<template lang="pug">
li.notification-item
  .notification-item_icon
    BaseSvgEl(:title='item?.icon')
  .notification-item_message
    span {{item?.message}}
  button.notification-item_remove(@click.prevent='notification_store.remove_notification(item?.id)')
    BaseSvgEl(title='cross')
</template>

<script setup>

import { useNotificationStore } from "~/store/notification"

const notification_store = useNotificationStore()
const props = defineProps({
  item: { type: Object, default: '' }
})

</script>

<style lang="sass" scoped>
.notification-item
  background: $white
  border-radius: em(30 ,16)
  padding: em(10, 16) em(20, 16)
  display: flex
  align-items: center
  gap: em(15, 16)
  max-width: 500px
  width: 100%
  & + li
    margin-top: em(5, 16)
  &_icon
    display: flex
    :deep(svg)
      width: em(25, 16)
      height: em(25, 16)
  &_message
    font: font(20, 25, 400, 'NotoSans')
  &_remove
    font-size: 1em
    display: flex
    margin-left: auto
    :deep(svg)
      width: em(20, 16)
      height: em(20, 16)
  
</style>