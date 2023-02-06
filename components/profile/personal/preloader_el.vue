<template lang="pug">
.preloader
  .preloader_image
    SkeletonEl(:params='{ width: "46px", height: "46px", radius: "100%" }')
  .preloader-wrapper
    .preloader-title
      SkeletonEl(:params='{ width: "100%", height: "24px", radius: "5px" }')
    .preloader-info
      SkeletonEl(:params='{ width: "50%", height: "20px", radius: "5px" }')
</template>

<style lang="sass" scoped>
.preloader
  display: flex
  align-items: flex-start
  width: 100%
  gap: em(24, 16)
  &-wrapper
    display: flex
    flex-direction: column
    align-items: flex-start
</style>