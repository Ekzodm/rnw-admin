<template lang="pug">
.history-item
  .history-item_image
    img(:src='path' :alt='item?.image_name')
  .history-item_edit
  .history-item_status
  .history-item_date
    span {{date_created}}
</template>

<script setup>

import { date } from '~/service/date'

const props = defineProps({
  item: { type: Object, required: true }
})
const path = computed(() => `https://myrocknwall.com/images/profile/${props.item?.imagePaths[0]}/compress/${props.item?.image_name}`)
const date_created = date(props.item.created_at)

</script>

<style lang="sass" scoped>
.history-item
  display: flex
  align-items: center
  justify-content: space-between
  gap: em(20, 16)
  width: 100%
  &_image
    img
      width: 2em
      height: 2em
      object-fit: cover
      border-radius: .5em
</style>