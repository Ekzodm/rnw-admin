import { ref, watch, computed } from 'vue'

export const calendar = () => {
  const month_array = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  const year_array = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030']
  const weekdays_array = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  const date = ref(new Date())
  const month = computed(() => +date.value.getMonth())
  const year = computed(() => date.value.getFullYear())
  const active_index = ref(1)
  const days = ref([])
  const active = ref([])
  const change_month = idx => { date.value = new Date(date.value.setMonth(idx)) }
  const change_year = item => { date.value = new Date(date.value.setFullYear(item)) }
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
  const lastDay = computed(() => new Date(date.value.getFullYear(), date.value.getMonth() + 1, 0).getDate())
  const prevLastDay = computed(() => new Date(date.value.getFullYear(), date.value.getMonth(), 0).getDate())
  const lastDayIndex = computed(() => new Date(date.value.getFullYear(), date.value.getMonth() + 1, 0).getDay())
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
  watch(() => date.value, () => {
    active.value = []
    addDays()
  })
  return { month_array, year_array, weekdays_array, month, year, days, active, change_month, change_year, toggle_active }
}