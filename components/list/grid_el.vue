<template lang="pug">
.list-grid
  template(v-if='list.pending')
    ListPreloaderEl
  template(v-else-if='list.error')
    ListErrorEl(:refresh='list.refresh')
  template(v-else)
    ListItemEl(v-for='item, idx in search_result' :key='item?._id' :item='item') 
</template>

<script setup>

import { ref, watch } from 'vue'
import { auth_request } from '~/service/fetch_wrapper'
import { sort } from './js/sort'
import { search_list } from '~/service/search'

const props = defineProps({
  params: { type: Object, default: {} }
})
const list = ref([]) // Список
const search_result = ref([]) // Результат поиска
watch(() => props.params.active, async () => {
  list.value.data = null
  list.value = await auth_request(`/${props.params.path}`)
  list.value.data = sort(list.value.data, props.params.path)
  search_result.value = list.value.data
}, { immediate: true, deep: true })
watch(() => props.params.search, () => {!!props.params.search.length ? (search_result.value = search_list(list.value.data, props.params.search)) : search_result.value = list.value.data }, { deep: true })
</script>