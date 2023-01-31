<template lang="pug">
.title
  template(v-if='type')
    h1 {{title}}
  template(v-else)
    h3 {{title}}
</template>

<script setup>

const props = defineProps({
  title: { type: String, default: '', required: true},
  page: { type: Boolean, default: true  }
})

</script>

<style lang="sass" scoped>
.title
  *
    color: $dblue
    font: font(24, 32, 700, 'NotoSans')
</style>