<template lang="pug">
.page
  ProfileEl(:profile='store_auth.profile.id')
  template(v-if='store_auth?.profile?.role === "admin"')
    ProfilePersonalEl(title='Модераторы' :personal='data')
    //- ProfilePersonalEl(title='Сотрудники')
  //- template(v-else-if='store_auth?.profile?.role === "moderator"')
  //-   ProfilePersonalEl(title='Сотрудники')
  template(v-else)
    StatisticCountEl(:statistic='count')
    .page-wrapper
      //- ProfileHistoryEl(:profile='')
      ElementsCalendarEl
</template>

<script setup>

import { ref } from 'vue'
import { useAuthStore } from "~/store/auth"
import { auth_request } from '~/service/fetch_wrapper'

const store_auth = useAuthStore()
const count = [
  { params: { title: 'Загружено всего', description: 'фото' }, path: `/wallpaper?count=true&user=${store_auth?.profile?.id}` },
  { params: { title: 'На проверке', description: 'фото' }, path: `/wallpaper?count=true&moderated=false&user=${store_auth?.profile?.id}` },
  { params: { title: 'Загружено с ошибкой', description: 'фото' }, path: `/wallpaper?bad=true&count=true&user=${store_auth?.profile?.id}` }
]
const data = ref({})
if( store_auth?.profile?.role === "admin") {
  data.value = await auth_request('/user')
  data.value.data = data.value.data.filter(item => item.role === 'moderator')
}

definePageMeta({
  middleware: ["auth"]
})

</script>