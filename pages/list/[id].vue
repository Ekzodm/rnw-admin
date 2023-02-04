<template lang="pug">
.page
  ImagesGridEl
</template>

<script setup>

definePageMeta({
  middleware: ["auth"]
})

</script>