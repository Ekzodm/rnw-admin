<template lang="pug">
.preloader
  .preloader_title
    SkeletonEl(:params='{ width: "70%", height: "24px", radius: "5px" }')
  .preloader-value
    SkeletonEl(:params='{ width: "100%", height: "26.91px", radius: "5px" }')
</template>

<style lang="sass" scoped>
.preloader
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%
  padding: em(17.5, 16) em(30, 16)
  gap: em(10, 16)
  & > *
    width: 100%
</style>