<template lang="pug">
.profile
  .profile-image
    BaseSvgEl(title='user')
  .profile-info
    .profile-info_name
      span {{name}} 
    .profile-info_role
      span {{role}}
</template>

<script setup>

import { computed } from 'vue'
import { auth_request } from '~/service/fetch_wrapper'

const props = defineProps({
  profile: { type: [String, Object], reauired: true }
})

const { data } = await auth_request(`/user?id=${props.profile}`)
const name = computed(() => data.value.profile ? `${data.value.profile.name} ${data.value.profile.surname}` : data.value.login)
const role = computed(() => {
  switch (data.value.role) {
    case 'admin':
      return 'Админ'
    case 'moderator':
      return 'Модератор'
    default:
      return `id: ${props.profile}`
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