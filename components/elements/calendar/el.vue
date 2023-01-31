<template lang="pug">
.calendar
  .calendar-control
    ElementsCalendarSelectEl
      template(v-slot:value)
        span {{month_array[+month]}}
      template(v-slot:list)
        .select-list_item(v-for='item, idx in month_array' :key='idx' @click.prevent='change_month(idx)')
    ElementsCalendarSelectEl
      template(v-slot:value)
        span {{year_array[0]}}
      template(v-slot:list)
        .select-list_item(v-for='item, idx in year_array' :key='idx' @click.prevent='change_year(idx)')
  .calendar-weekdays
    span(v-for='item, idx in weekdays_array' :key='idx') {{item}}
  .calendar-days
    ElementsCalendarDaysEl(v-for='item, idx in days' :key='idx' :item='item' :idx='idx' :active='active' @active='toggle_active')
</template>

<script setup>

import { ref, watch, computed } from 'vue'

const month_array = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const year_array = ['2022', '2023', '2024', '2025']
const weekdays_array = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const date = ref(new Date())
const month = ref(+date.value.getMonth())
const year = ref(date.value.getFullYear())
const active_index = ref(1)
const days = ref([])
const control = ref(0)
const active = ref([])
const change_month = idx => month.value = idx
const change_year = idx => year.value = idx
const toggle_active = data => {
  active_index.value === 0 ? active_index.value = 1 : active_index.value = 0
  days.value.forEach(item => item.range = false)
  active.value[active_index.value] = data
  if (active.value.length === 2) {
    days.value.forEach((item, idx) => {
      if (active.value[0] < active.value[1]) {
        idx >= active.value[0] && idx <= active.value[1] && (item.range = true)
      } else {
        idx >= active.value[1] && idx <= active.value[0] && (item.range = true)
      }
    })
  } else {
    days.value.forEach(item => item.range = false)
  }
}
const lastDay = ref(new Date(date.value.getFullYear(), date.value.getMonth() + 1, 0).getDate())
const prevLastDay = ref(new Date(date.value.getFullYear(), date.value.getMonth(), 0).getDate())
const lastDayIndex = ref(new Date(date.value.getFullYear(), date.value.getMonth() + 1, 0).getDay())
const firstDayIndex = computed(() => date.value.getDay() - 1 === -1 ? 6 : date.value.getDay() - 1 )
const nextDays = computed(() => lastDayIndex.value === 0 ? -1 : 6 - lastDayIndex.value)
const addDays = () => {
  days.value = []
  date.value.setDate(1)
  for (let x = firstDayIndex.value; x > 0; x--) {
    days.value = [...days.value, { class: 'prev-date', value: prevLastDay.value - x + 1, range: false }]
  }
  for (let i = 1; i <= lastDay.value; i++) {
    if (i === new Date().getDate() && date.value.getMonth() === new Date().getMonth()) {
      days.value = [...days.value, { class: 'today', value: `${i}`, range: false }]
    } else {
      days.value = [...days.value, { class: 'date', value: `${i}`, range: false }]
    }
  }
  if (nextDays.value !== -1) {
    for (let j = 1; j <= nextDays.value + 1; j++) {
      days.value = [...days.value, { class: 'next-date', value: `${j}`, range: false }]
    }
  }
}
addDays()
watch(() => control.value, () => {
  month.value = month_array[+date.value.getMonth()]
  year.value = date.value.getFullYear()
  lastDay.value = new Date(date.value.getFullYear(), date.value.getMonth() + 1, 0).getDate()
  prevLastDay.value = new Date(date.value.getFullYear(), date.value.getMonth(), 0).getDate()
  addDays()
  active.value = null
});
const clickPrev = () => {
  if (control.value > 0) {
    control.value -= 1
    date.value.setMonth(date.value.getMonth() - 1)
  } 
}
const clickNext = () => {
  if (control.value >= 0) {
    control.value += 1
    date.value.setMonth(date.value.getMonth() + 1)
  } 
}

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
</style>