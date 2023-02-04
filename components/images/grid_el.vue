<template lang="pug">
.images-grid
  template(v-if='pending')
    ImagesPreloaderEl(v-for='item, idx in 24' :key='idx')
  template(v-else-if='error')
    ImagesErrorEl(:refresh='refresh')
  template(v-else)
    ImagesItemEl(v-for='item, idx in data' :key='item.id' :item='item')

</template>

<script setup>

import { useListStore } from '~/store/list'
import { auth_request } from '~/service/fetch_wrapper'

const route = useRoute()
const { type } = useListStore()
const { pending, error, data, refresh } = await auth_request(`/wallpaper?${type}=${route.params.id}`)

</script>

<style lang="sass" scoped>
.images-grid
  display: grid
  grid-template-columns: repeat(8, 1fr)
  grid-column-gap: em(15, 16)
  grid-row-gap: em(30, 16)
  max-width: em(945, 16)
  width: 100%
</style>