import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth_request } from '~/service/fetch_wrapper'

export const usePostStore = defineStore('post', () => {
  const posts = ref([])
  const post = ref({})
  const get_posts = async (route, params = {}) => posts.value = await auth_request(`/api/${route}/list`, { query: params, initialCatch: false })
  const get_post = async (route, id) => {
    const { data } = await auth_request(`/api/${route}/${id}`, { initialCatch: false })
    post.value = data.value
    Object.hasOwn(post.value, 'image') && Object.assign(post.value, { old_image: post.value.image })
  }
  const add_post = async (route, payload) => { 
    const { data } = await auth_request(`/api/${route}/add`, { method: 'post', body: payload })
    data.value.status === 200 && posts.value.refresh()
    return data.value.status
  }
  const remove_post = async (route) => { 
    const { data } = await auth_request(`/api/${route}`, { method: 'delete' })
    data.value.status === 200 && posts.value.refresh()
    return data.value.status
  }
  const update_post = async (route, payload) => { 
    const { data } = await auth_request(`/api/${route}`, { method: 'put', body: payload, initialCatch: false })
    data.value.status === 200 && posts.value.refresh()
    return data.value.status
  }
  return { posts, post, add_post, get_posts, get_post, remove_post, update_post }
})