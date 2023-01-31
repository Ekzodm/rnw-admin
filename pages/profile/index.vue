<template lang="pug">
.page
  ProfileEl
  template(v-if='store_auth?.profile?.role === "admin"')
    ProfilePersonalEl(title='Модераторы')
    ProfilePersonalEl(title='Сотрудники')
  template(v-else-if='store_auth?.profile?.role === "moderator"')
    ProfilePersonalEl(title='Сотрудники')
  template(v-else)
    StatisticCountEl(:statistic='count')
</template>

<script setup>

import { useAuthStore } from "~/store/auth"

const store_auth = useAuthStore()
const count = [
  { params: { title: 'Загружено всего', description: 'фото' }, path: `/wallpaper?count=true&user=${store_auth?.profile?.id}` },
  { params: { title: 'На проверке', description: 'фото' }, path: `/wallpaper?count=true&moderted=false&user=${store_auth?.profile?.id}` },
  { params: { title: 'Загружено с ошибкой', description: 'фото' }, path: `/wallpaper?bad=true&count=true&user=${store_auth?.profile?.id}` }
]

definePageMeta({
  middleware: ["auth"]
})

</script>