<template lang="pug">
.progress-line
  .progress-line_title
    span {{content?.title}}
  button.progress-line_track(@click.prevent='toggle_active' :class='[active && "active"]')
    .progress-line_track-el(:style='{ width: +content?.taped * 100 / +content?.max + "%" }' @mouseover="show_clue($event, true)" @mouseleave="show_clue($event, false)")
      span {{content?.taped}}
      BaseClueEl(v-if='clue' text='Нажмите для пополнения колекции' :x='coordinate + "px"')
    .progress-line_user(v-if='active')
      span {{user_name}}
</template>

<script setup>

import { ref } from 'vue'
import { useAuthStore } from '~/store/auth'
import debounce from '~/service/debounce'

const props = defineProps({
  content: { type: Object, default: {} }
})
const { user } = useAuthStore()
const active = ref(false)
const clue = ref(false)
const toggle_active = () => active.value = !active.value
const toggle_clue = value => clue.value = value
const coordinate = ref(0)
const user_name = computed(() => `${user?.profile?.name[0]} ${user?.profile?.surname[0]}`)
const show_clue = debounce((e, flag) => {
  toggle_clue(flag)
  coordinate.value = e.layerX
}, 500)

</script>

<style lang="sass" scoped>
.progress-line
  display: flex
  align-items: center
  gap: .5em
  width: 100%
  position: relative
  &_title
    max-width: em(150, 16)
    width: 100%
    span
      font: font(16, 24, 400, 'NotoSans')
      color: $lblue
  &_track
    width: 100%
    font-size: 1em
    display: flex
    align-items: center
    gap: em(6, 16)
    &-el
      height: em(14, 16)
      display: flex
      align-items: center
      padding-left: em(4, 16)
      background: linear-gradient(270deg, #2B3674 5.56%, rgba(43, 54, 116, .12) 100%)
      border-radius: 0 em(60, 16) em(60, 16) 0
      height: em(14, 16)
      max-width: 365px
      position: relative
    span
      font: font(14, 20, 400, 'NotoSans')
      color: $dblue
    &.active
      .progress-line_track-el
        background: linear-gradient(270deg, #EABC28 0%, rgba(234, 188, 40, .2) 100%)
  &_user
    width: em(24, 16)
    height: em(24, 16)
    display: flex
    align-items: center
    justify-content: center
    background: $yellow
    border-radius: 100%
    span
      font: font(10, 10, 400)
      color: $white
      text-transform: uppercase
      letter-spacing: -1px

</style>