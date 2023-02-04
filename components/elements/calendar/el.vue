<template lang="pug">
.calendar
  .calendar-control
    ElementsCalendarSelectEl
      template(v-slot:value)
        span {{month_array[+month]}}
      template(v-slot:list)
        li.select-list_item.select-list_item--month(v-for='item, idx in month_array' :key='idx' @click.prevent='change_month(idx)') {{item}}
    ElementsCalendarSelectEl
      template(v-slot:value)
        span {{year}}
      template(v-slot:list)
        li.select-list_item.select-list_item--year(v-for='item, idx in year_array' :key='idx' @click.prevent='change_year(item)') {{item}}
  .calendar-weekdays
    span(v-for='item, idx in weekdays_array' :key='idx') {{item}}
  .calendar-days
    ElementsCalendarDaysEl(v-for='item, idx in days' :key='idx' :item='item' :idx='idx' :active='active' @active='toggle_active')
</template>

<script setup>

import { calendar } from './js/calendar'

const { month_array, year_array, weekdays_array, month, year, days, active, change_month, change_year, toggle_active } = calendar()

</script>

<style lang="sass" scoped>
.calendar
  display: flex
  flex-direction: column
  user-select: none
  flex: 1
  padding: em(24, 16) em(32.07, 16) 1em em(25.43, 16)
  border-radius: 30px
  background: $white
  z-index: 10
  &-control
    display: flex
    align-items: center
    justify-content: center
    gap: em(28, 16)
  &-weekdays
    display: grid
    grid-template-columns: repeat(7, 1fr)
    justify-items: center
    margin: em(21, 16) 0 em(10, 16)
    span
      color: $dblue
      font: font(14, 20, 700)
  &-days
    display: grid
    grid-template-columns: repeat(7, 1fr)
    justify-items: center
.select-list_item
  font: font(16, 24, 400)
  color: $lblue
  cursor: pointer
  padding-left: 1em
  width: 100%
  &--month
    min-width: em(99, 16)
  &:hover
    background: $type
</style>