<template>
  <div class="wrap">
    <div class="title">

      <div class="search">
        <div class="icon-wrapper">
          <span class="icon-search">
          </span>
        </div>

        <div class="input" >
          <input type="text" placeholder="搜索图书">
        </div>
      </div>
      <div class="btn">搜索</div>
    </div>
  </div>
</template>
<script>
  export default {

  }

</script>

<style lang="scss" scoped>
  .wrap {
    // position: fixed;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 8vh;
    background-color: $bg-white;
    padding: $screen-margin;
    box-sizing: border-box;
    box-shadow: 0 0 px2rem(10) rgba(0,0,0,.3);
    transition: top .2s ease-in-out;
    .title {
      font-size: $font-size-md;
      @include flex-center-row;
      justify-content: space-around;

      .search {
        flex: 1;
        height: 5vh;
        @include flex-center-row;
        justify-content: flex-start;
        padding: px2rem(4) px2rem(10);
        background-color: $shadow;
        border-radius: 4vh;

        input {
          width: 70vw;
          display: block;
          outline: none;
          border: none;
          background-color: rgba(0, 0, 0, 0);
          margin-left: px2rem(10);
          font-size: #fff;
        }
      }

      .btn {
        padding: px2rem(4);
        font-size: $font-size-md;
        color: $font-color;
        font-weight: bold;
      }
    }
  }

  .title-enter-to,
  .title-leave {
    transform: translateY(0)
  }

  .title-enter,
  .title-leave-to {
    transform: translateY(-100%)
  }

  .title-enter-active,
  .title-leave-active {
    transition: all .2s ease-in-out;
  }

</style>
