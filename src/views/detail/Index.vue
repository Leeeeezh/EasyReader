<template>
  <div class="store">
    <p>{{bookDetail.fileName}}</p>
    <p>图书详情页</p>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['bookDetail'])
    }
  }

</script>

<style lang="scss" scoped>
  .store {
    width: 100%;
    height: 100vh;
    background-color: papayawhip;
    font-size: $font-size-md;
  }

</style>
