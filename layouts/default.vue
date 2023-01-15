<template lang="pug">
.admin
  BaseAsideEl
  .admin-wrapper
    slot
  teleport(to='body')
    NotificationEl
  //- teleport(to='body')
  //-   BasePopupEl(v-if='store_popup.popup_flag')
  //-     component(:is='component')
</template>

<script setup>

// import { computed } from 'vue'

// import { usePopupStore } from "~/store/popup"
// const store_popup = usePopupStore()
// const create_popup = resolveComponent('admin/popup/create_el')
// const product_popup = resolveComponent('admin/popup/product_el')
// const banner_popup = resolveComponent('admin/popup/banner_el')
// const order_popup = resolveComponent('admin/popup/order_el')
// const component = computed(() => {
//   switch (store_popup.popup_component.name) {
//     case 'AdminPopupCreateEl':
//       return create_popup
//     case 'AdminPopupProductEl':
//       return product_popup
//     case 'AdminPopupBannerEl':
//       return banner_popup
//     case 'AdminPopupOrderEl':
//       return order_popup
//   }
// })

</script>

<style lang="sass" scoped>
.admin
  display: flex
  align-items: flex-start
  &-wrapper
    display: flex
    flex-direction: column
    align-items: flex-start
    padding: 2em
    width: 100%
</style>