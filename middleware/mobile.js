import { useBurgerStore } from "~/store/burger"

export default defineNuxtRouteMiddleware((to, from) => {
  const store_burger = useBurgerStore()
  store_burger.burger && store_burger.toggle_burger()
})