import { defineStore } from 'pinia'
import { auth_request } from '~~/service/fetch_wrapper'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    jwt: null,
    auth: false,
    user: {}
  }),
  getters: {
    token: state => state.jwt,
    is_auth: state => state.auth,
    profile: state => state.user
  },
  actions: {
    async login(value) {
      const response = await auth_request('/login', { method: 'get', params: value })
      console.log(!!response.data.value)
      if(!!response.data.value) {
        this.jwt = response.data.value.token
        this.auth = true
        this.user = response.data.value.user
      }
      return response
    },
    async registration(value) {
      const { data } = await useFetch('/registration', { method: 'post', body: value })
      return data.value.status
    },
    async logout() {
      await useFetch('/logout', { method: 'post' })
      this.jwt = null
      this.auth = false
      this.user = {}
    }
  },
  persist: true
})