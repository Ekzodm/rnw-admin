<template lang="pug">
.auth
  .auth_title
    h1 RnW Admin Panel
  form(@submit.prevent='authorization' novalidate)
    ElementsInputEl(type='text' placeholder='Логин' v-model='auth.login' :error='!!v$.login.$errors.length && "Введите логин"')
    ElementsInputEl(type='password' placeholder='Пароль' v-model='auth.password' :error='!!v$.login.$errors.length && "Введите пароль"')
    ElementsButtonEl(title='Войти' type='submit' class='button--one')
</template>

<script setup>

import { useAuthStore } from "~/store/auth"
import { useNotificationStore } from "~/store/notification"
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const router = useRouter()
const store_auth = useAuthStore()
const notification_store = useNotificationStore()
const auth = ref({
  login: '',
  password: ''
})
const rules = {
  login: { required },
  password: { required }
}
const v$ = useVuelidate(rules, auth.value)
const authorization = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return
  const { login, password } = auth.value
  const response = await store_auth.login({ login, password })
  console.log(response)
  !!response.data.value ? (notification_store.add_notification({ icon: 'check', message: response.data.value.message}, router.push('/'), ) ) : notification_store.add_notification({ icon: 'cancel', message: response.error.value.data.message}) 
}

definePageMeta({
  layout: 'empty'
})
</script>

<style lang="sass" scoped>
.auth
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  gap: em(20, 16)
  &_title
    h1
      font: font(30, 35, 700, 'NotoSans')
  form
    display: flex
    flex-direction: column
    align-items: center
    gap: em(15 ,16)
    max-width: 500px
    width: 100%
    :deep(.button)
      margin-top: em(10, 16)
      min-width: em(200, 16)
      text-align: center
</style>