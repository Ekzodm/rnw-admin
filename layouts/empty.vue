<template lang="pug">
.empty
  slot
  teleport(to='body')
    NotificationEl
</template>

<style lang="sass" scoped>
.empty
  display: flex
  align-items: center
  justify-content: center
  width: 100vw
  height: 100vh
</style>