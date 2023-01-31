import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useListStore = defineStore('list', () => {
  const list = ref({})
  const edit = ref(false)
  const type = ref('tag')
  const toggle_edit = () => edit.value = !edit.value
  return { list, edit, type, toggle_edit }
})