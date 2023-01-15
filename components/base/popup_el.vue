<template lang="pug">
.popup
  .popup_background(@click.prevent='toggle_popup')
  .popup_wrapper
    slot
</template>

<script setup>

import { onMounted, onUnmounted } from 'vue'

import { usePopupStore } from "~/store/popup"
const store = usePopupStore()

const toggle_popup = () => store.toggle_popup()
const toggle_state_keydown = e => (store.flag && e.key === 'Escape') && store.toggle_popup()

onMounted(() => {
  document.querySelector('html').classList.add('scroll')
  document.addEventListener('keydown', toggle_state_keydown)
})

onUnmounted(() => {
  document.querySelector('html').classList.remove('scroll')
  document.removeEventListener('keydown', toggle_state_keydown)
})

</script>

<style lang="sass" scoped>
.popup,
.popup_background
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  width: 100%
  height: 100vh
.popup
  display: flex
  align-items: center
  justify-content: center
  z-index: 1000
  &_background
    background: rgba(0,0,0,.5)
    z-index: 1001
  &_wrapper
    background: $white
    border-radius: em(20, 16)
    padding: em(45, 16)
    position: relative
    display: flex
    flex-direction: column
    z-index: 1002
    max-height: 90vh
    overflow-y: auto
    overflow-x: hidden
    &::-webkit-scrollbar
      width: 0
  @media only screen and (max-width: 480px)
    &_wrapper
      padding: em(30, 16)
  @media only screen and (max-width: 375px)
    &_wrapper
      padding: em(20, 16)
</style>