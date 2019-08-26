<template>
  <div class="wrap">
    <div class="catalog-view">
      <div class="header">
        <div class="search"><input type="text" placeholder="搜索全文内容"></div>
        <div class="read-info"></div>
      </div>
      <div class="catalog">
        asfasfda
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrap {
    box-sizing: border-box;
    width: 100%;
    .header {
      padding: px2rem(10);
      .search {
        padding: px2rem(4) 0;
        @include flex-center-row;
        input {
          border-radius: px2rem(2);
          width: 96%;
          height: px2rem(30);
          outline: none;
          border: 1px solid rgba(255, 255, 255, .6);
          padding: px2rem(2) px2rem(6);
        }

        input::-webkit-input-placeholder{
          color: rgba(255,255,255,.6);
        }
      }
      .read-info {
        width:100%;
        height:px2rem(300);
        background-color: violet;
      }
    }

    .catalog {
      width:100%;
      box-sizing: border-box;
      padding: 0 px2rem(10);
      background-color: darkcyan;
    }

  }

</style>
