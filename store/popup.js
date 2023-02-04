import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popup', {
  state: () => ({
    flag: false,
    component: {}
  }),
  getters: {
    popup_component: state => state.component,
    popup_flag: state => state.flag
  },
  actions: {
    change_popup_component(value) {
      this.component = value
      !this.flag && this.toggle_popup()
    },
    toggle_popup() {
      this.flag = !this.flag
    }
  }
})