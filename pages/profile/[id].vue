<template lang="pug">
.page
  BaseBreadcrumbsEl(:list='[{ title: "Профиль", to: "/profile" }, { title: "Информация о сотруднике" }]')
  ProfileEl(:profile='this.$route.params.id')
  StatisticCountEl(:statistic='count')
  .page-wrapper
    ProfileHistoryEl(:profile='this.$route.params.id')
    ElementsCalendarEl

</template>

<script setup>

const route = useRoute()
const count = [
  { params: { title: 'Загружено всего', description: 'фото' }, path: `/wallpaper?count=true&user=${route.params.id}` },
  { params: { title: 'Принятых', description: 'фото' }, path: `/wallpaper?count=true&moderated=true&user=${route.params.id}` },
  { params: { title: 'На проверке', description: 'фото' }, path: `/wallpaper?count=true&moderated=false&&user=${route.params.id}` },
  { params: { title: 'КПД', description: '%' }, path: `/wallpaper1?count=true&moderted=false&&user=${route.params.id}` },
]

definePageMeta({
  middleware: ["auth"]
})

</script>

<style lang="sass" scoped>
:deep(.count)
  max-width: 986px
</style>