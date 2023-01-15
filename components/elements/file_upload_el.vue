<template lang="pug">
.upload-image
  input(type='file' v-on:change='file_upload($event)' :id='id' accept='image/*')
  label(:for='id' :class='[isActive && "active"]' @dragover.prevent='dragover' @dragleave.prevent='dragleave' @drop.prevent='drop($event)')
    span Перетащите файл или нажмите для загрузки
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'upload_el',
  setup(props, { emit }) {
    const file = ref(null)
    const id = `upload${Math.ceil(Math.random()*1000000)}`
    const isActive = ref(false)
    const dragover = () => isActive.value === false ? isActive.value = true : false
    const dragleave =() => isActive.value = false
    const drop = e => {
      file.value = null
      file.value = e.dataTransfer.files[0]
      emit('file_upload', file.value)
      isActive.value = false
    }
    const file_upload  = e =>  {
      file.value = null
      file.value = e.target.files[0]
      emit('file_upload', file.value)
      e.target.value = ''
    }
    return {
      isActive,
      id,
      dragover,
      dragleave,
      drop,
      file_upload
    }
  }
}

</script>

<style lang="sass">
.upload-image
  flex: 1
  input[type='file']
    display: none
    & + label
      display: flex
      flex-direction: column
      padding: 10px
      width: 100%
      align-items: center
      justify-content: center
      border-radius: 5px
      height: 12.5em
      transition: .3s
      background: $white
      &.active
        box-shadow: 0 0 10px 3px rgba(0,0,0,.3)
      span
        text-align: center
        color: $text
    
</style>
