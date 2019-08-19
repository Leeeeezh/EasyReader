<template>
  <div id="app">
    <div class="home">
      <div id="read">hahaha</div>
    </div>
  </div>
</template>

<script>
  export default {}
  document.addEventListener('DOMContentLoaded', () => {
    let font_size = window.innerWidth / 10
    font_size = font_size > 50 ? 50 : font_size
    document.querySelector('html').style.fontSize = font_size + 'px'
  })

</script lang="scss" scoped>
@import "./assets/style/global"
<style lang="scss" scoped>
</style>
