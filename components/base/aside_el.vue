<template lang="pug">
aside.aside
  nav.aside-menu
    ul.aside-menu_list
      template(v-for='item, idx in menu' :key='idx')
        li.aside-menu_list-item(v-if='item.role === 0')
          NuxtLink.aside-menu_list-link(:to='item.to')
            BaseSvgEl(v-if='item.svg' :title='item.svg')
            span {{item.title}}
</template>

<script setup>

const menu = ref([
  { to: '/', title: 'RnW', role: 0 },
  { to: '/profile', title: 'Профиль', role: 0, svg: 'user' },
  { to: '/report', title: 'Отчет', role: 0, svg: 'list' },
  { to: '/verification', title: 'Проверка', role: 0, svg: 'share' },
  { to: '/load', title: 'Загрузка', role: 0, svg: 'upload' },
  { to: '/publication', title: 'Публикации', role: 0, svg: 'upload' },
  { to: '/list', title: 'Списки', role: 0, svg: 'list' },
  { to: '/faq', title: 'FAQ', role: 0, svg: 'text' }
])
</script>

<style lang="sass" scoped>
.aside
  max-width: 290px
  width: 100%
  height: 100vh
  position: sticky
  top: 0
  background: $white
  padding: em(70, 16) 0 0 em(40, 16)
  display: flex
  flex-direction: column
  align-items: center
  gap: em(40, 16)
  &-menu
    width: 100%
    &_list
      display: flex
      flex-direction: column
      align-items: flex-start
      gap: em(30, 16)
      &-item
        width: 100%
        &:first-child
          padding-bottom: em(30, 16)
          border-bottom: 1px solid $background
          .aside-menu_list-link
            span
              font: font(26, 26, 700, 'Poppins')
              color: $dblue
            &.router-link-active
              span
                font: font(46, 46, 700, 'Poppins')
        &:not(:first-child)
          .aside-menu_list-link
            span
              font: font(16, 24, 700, 'NotoSans')
              color: $lblue        
            &.router-link-active
              span
                color: $dblue
      &-link
        width: 100%
        display: flex
        align-items: center
        gap: .5em
        position: relative
        &::before
          content: ''
          position: absolute
          right: 0
          width: em(4, 16)
          height: em(36, 16)
          background: $dblue
          opacity: 0
        :deep(svg)
          width: em(24, 16)
          height: em(24, 16)
        &.router-link-active
          &::before
            opacity: 1
</style>