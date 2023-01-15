import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref([])
  const add_notification = item => { // Добавдение уведомлений
    const id = Date.now()
    Object.assign(item, { id, show: true })
    notifications.value.push(item)
    setTimeout(() => notifications.value = notifications.value.filter(i => i.id !== id), 3000)
  }
  const remove_notification = id => notifications.value = notifications.value.filter(i => i.id !== id) // Удаление уведомления
  return { notifications, add_notification, remove_notification }
})