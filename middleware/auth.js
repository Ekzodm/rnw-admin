import { useAuthStore } from "~/store/auth"

export default defineNuxtRouteMiddleware((to, from) => {
  const store_auth = useAuthStore()
  if (!store_auth.is_auth) {
    return navigateTo('/auth')
  }
})