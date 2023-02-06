<template lang="pug">
.breadcrumbs
  ul.breadcrumbs-list
    li.breadcrumbs-list_item(v-for='item, idx in list' :key='idx')
      NuxtLink(v-if='idx !== list.length - 1' :to='item?.to') {{item?.title}}
      span(v-else) {{item?.title}}
</template>

<script setup>

const props = defineProps({
  list: { type: Array, default: [] }
})

</script>

<style lang="sass" scoped>
.breadcrumbs
  width: 100%
  &-list
    display: flex
    align-items: center
    gap: em(15, 16)
    &_item
      &:has(a)
        background: $background
        border-radius: em(60, 16)
        padding: em(4, 16) 1em
        a
          color: $dblue
      &:last-child
        font: font(24, 32, 700)
        letter-spacing: -.02em
        color: $dblue
</style>