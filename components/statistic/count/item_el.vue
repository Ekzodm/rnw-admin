<template lang="pug">
.count-item
  template(v-if='pending')
    StatisticCountPreloaderEl
  template(v-else-if='error')
    StatisticCountErrorEl(:refresh='refresh')
  template(v-else)
    StatisticCountContentEl(:params='params' :data='data')
</template>

<script setup>

import { auth_request } from '~/service/fetch_wrapper'

const props = defineProps({
  params: { type: Object, default: {}},
  path: { type: String, default: ''},
  value: { type: String, default: '' }
})

const { pending, data, error, refresh } = !!props.path ? await auth_request(props.path, { method: 'get', initialCache: false }) : props.value

</script>

<style lang="sass" scoped>
.count-item
  background: $white
  flex: 1
  border-radius: em(20, 16)
</style>