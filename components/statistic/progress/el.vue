<template lang="pug">
.progress
  .progress-title
    BaseTitleEl(title='Наполнение')
    .progress-title_buttons
      StatisticProgressToggleEl(:params='toggle' @type='toggle_type')
  .progress-sort
    ElementsButtonTypeEl(v-for='item, idx in sort' :key='idx' :title='item' @click='sort_col(idx)' :class='[active === idx ? "active": ""]')
  .progress-content
    StatisticProgressLineEl(v-for='item, idx in sort_array' :key='idx' :content='{...item, max: active === 0 ? sort_array.at(-1)?.taped : sort_array[0]?.taped}')
</template>

<script setup>

import { ref } from 'vue'
import { auth_request } from '~/service/fetch_wrapper'
import { progress } from '~/service/progress'
import { bubble_sort } from '~/service/bubble_sort'

const toggle = [{ title: 'Категории', value: 'category' }, { title: 'Коллекции', value: 'collection' }]
const type = ref('category')
const sort = ['Плохое', 'Хорошее']
const active = ref(0)
const toggle_type = () => type.value = data
const { pending, data, error } = await auth_request(`/${type.value}`)
const temporary_array = progress(data.value, type.value)
const sort_array = ref(bubble_sort(temporary_array))
const sort_col = idx => {
  active.value = idx
  sort_array.value = sort_array.value.reverse()
}

</script>

<style lang="sass" scoped>
.progress
  background: $white
  border-radius: em(30, 16)
  padding: em(34.5, 16) em(40, 16)
  max-width: 634px
  width: 100%
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: em(34, 16)
  & > *
    width: 100%
  &-title
    display: flex
    align-items: center
    justify-content: space-between
  &-sort
    display: flex
    align-items: center
    gap: em(5, 16)
    width: 100%
  &-content
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: .5em
</style>