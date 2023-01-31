<template lang="pug">
.page
  BaseTitleEl(title='Списки')
  ListControlEl
  ListEl
</template>

<script setup>

definePageMeta({
  middleware: ["auth"]
})

</script>

