<template lang="pug">
.dashboard
  BaseTitleEl(title='Статистика RocknWall')
  StatisticCountEl(:statistic='count')
</template>

<script setup>

const count = [
  { params: { title: 'Всего в приложении', description: 'фото' }, path: '/wallpaper?count=true' },
  { params: { title: 'Всего с ошибками', description: 'фото' }, path: '/wallpaper?bad=true&count=true' },
  { params: { title: 'Процент ошибок', description: '%' }, path: 'wallpaper1?count=true' }
]

</script>

<style lang="sass" scoped>
.dashboard
  width: 100%
</style>