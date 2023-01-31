<template lang="pug">
.dashboard
  BaseTitleEl(title='Статистика RocknWall')
  StatisticCountEl(:statistic='count')
  .dashboard-wrapper
    StatisticProgressEl
    ElementsCalendarEl
</template>

<script setup>

const count = [
  { params: { title: 'Всего в приложении', description: 'фото' }, path: '/wallpaper?count=true' },
  { params: { title: 'Всего с ошибками', description: 'фото' }, path: '/wallpaper?bad=true&count=true' },
  { params: { title: 'Процент ошибок', description: '%' }, path: 'wallpaper1?count=true' }
]

definePageMeta({
  middleware: ["auth"]
})

</script>

<style lang="sass" scoped>
.dashboard
  width: 100%
  max-width: 1051px
  display: flex
  flex-direction: column
  align-items: flex-start
  gap: em(60, 16)
  &-wrapper
    width: 100%
    display: flex
    align-items: flex-start
    justify-content: space-between
    gap: em(30 ,16)
</style>