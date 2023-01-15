<template lang="pug">
.notifications
  transition-group(name='list' tag='ul' class='notifications-list')
    NotificationItemEl(v-for='item in notification_store.notifications' :key='item.id' :item='item')
</template>

<script setup>

import { useNotificationStore } from "~/store/notification"

const notification_store = useNotificationStore()

</script>

<style lang="sass" scoped>
.notifications
  position: absolute
  max-width: 500px
  width: 100%
  top: 10vh
  left: 0
  right: 0
  margin: 0 auto

.list-enter-from,
.list-leave-to
  opacity: 0
  transform: translateY(-30px)
.list-enter-to,
.list-leave-from
  opacity: 1
  transform: translateY(0)
.list-enter-active,
.list-leave-active
  transition: .3s
</style>