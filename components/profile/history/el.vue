<template lang="pug">
.history
  BaseTitleEl(title='История' :page='false')
  .history-list
    ProfileHistoryItemEl(v-for='item in data' :key='item.id' :item='item')
</template>

<script setup>

import { auth_request } from '~/service/fetch_wrapper'

const props = defineProps({
  profile: { type: String, required: true }
})
const { pending, error, data } = await auth_request(`/wallpaper?user=${props.profile}`)

</script>

<style lang="sass" scoped>
.history
  background: $white
  padding: em(30, 16) em(40, 16)
  border-radius: 30px
  max-width: 634px
  width: 100%
  &-list
    margin-top: em(30, 16)
    width: 100%
    display: flex
    flex-direction: column
    gap: em(15, 16)
</style>