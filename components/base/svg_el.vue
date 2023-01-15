<template lang="pug">
svg.svg
  use(:xlink:href='path')
</template>

<script setup>

import { computed } from 'vue'
import svg from '@/assets/images/svg/sprite.svg'
const props = defineProps({
  title: { type: String, default: '' },
})

const path = computed(() => `${svg}#${props.title}`)

</script>