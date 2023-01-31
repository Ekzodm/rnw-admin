<template lang="pug">
.arrow
  BaseSvgEl(title='chevron')
</template>

<style lang="sass" scoped>
.arrow
  width: 1em
  height: 1em
  background: $background
  border-radius: 100%
  display: flex
  align-items: center
  justify-content: center
  :deep(svg)
    width: em(12, 16)
    height: em(12, 16)
    fill: $lblue
</style>