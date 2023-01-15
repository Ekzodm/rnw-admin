<template lang="pug">
.title
  h1 {{title}}
</template>

<script setup>

const props = defineProps({
  title: { type: String, default: '', required: true}
})

</script>

<style lang="sass" scoped>
.title
  h1
    color: $dblue
    font: font(24, 32, 700, 'NotoSans')
</style>