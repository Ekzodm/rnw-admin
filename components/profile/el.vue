<template lang="pug">
.profile
  .profile-image
    BaseSvgEl(title='user')
  .profile-info
    .profile-info_name
      span {{store_auth?.profile?.profile?.name}} {{store_auth?.profile?.profile?.surname}} 
    .profile-info_role
      span {{role}}
</template>

<script setup>

import { useAuthStore } from "~/store/auth"
import { computed } from 'vue'

const store_auth = useAuthStore()
const role = computed(() => {
  switch (store_auth?.profile?.role) {
    case 'admin':
      return 'Админ'
    case 'moderator':
      return 'Модератор'
    default:
      return `id: ${store_auth?.profile?.id}`
  }
})

</script>

<style lang="sass" scoped>
.profile
  display: flex
  align-items: center
  gap: .5em
  &-image
    width: em(56, 16)
    height: em(56, 16)
    background: $background
    border-radius: 100%
    display: flex
    align-items: center
    justify-content: center
    :deep(svg)
      width: em(38.5, 16)
      height: em(38.5, 16)
  &-info
    display: flex
    flex-direction: column
    align-items: flex-start
    &_name
      font: font(24, 32, 700)
      color: $dblue
    &_role
      font: font(16, 24, 400)
      color: $lblue
</style>