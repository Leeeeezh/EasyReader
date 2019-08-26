<template>
  <div class="wrap">
    <div class="catalog-view">
      <div class="header">
        <div class="search">
          <span class="icon-search"></span>
          <input type="text" placeholder="搜索全文内容" ref="input">
          <span class="icon-close" @click="$refs.input.value=''"></span>
        </div>
        <div class="read-info">
          <div class="cover">
            <img :src="coverURL" alt="">
          </div>
          <div class="meta">
            <span class="title">{{metaData.title}}</span>
            <!-- <span class="creator">{{metaData.creator}}</span> -->
            <span class="progress">已读{{progress}}%</span>
          </div>
        </div>
      </div>
      <div class="catalog">
        <div>目录</div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['coverURL', 'progress', 'metaData'])
    }
  }

</script>
<style lang="scss" scoped>
  .wrap {
    box-sizing: border-box;
    width: 100%;
    height:30%;

    @include flex-center-col;
    justify-content: flex-start;
    .header {
      padding: px2rem(10);
      box-sizing: border-box;
      .search {
        border-radius: px2rem(4);
        box-sizing: border-box;
        padding: 0 px2rem(10);
        margin-bottom: px2rem(10);
        @include flex-center-row;

        [class^="icon"] {
          font-size: $font-size-lg;
        }
        .icon-close:active {
          transform-origin: 50% 50%;
          transform: scale(1.2, 1.2);
          transition: all .1s ease-in-out;
        }
        input {
          border-radius: px2rem(2);
          width: 96%;
          height: px2rem(30);
          outline: none;
          border: none;
          padding: px2rem(2) px2rem(6);
        }

        input::-webkit-input-placeholder {
          color: rgba(255, 255, 255, .6);
        }
      }

      .read-info {
        width: 100%;
        height: px2rem(100);
        @include flex-center-row;

        .cover {
          width: 30%;
          height: 100%;
          flex: 1;

          img {
            height: 100%;
          }
        }

        .meta {
          width: 60%;
          height: 100%;
          @include flex-center-col;
          justify-content: space-evenly;
          font-size: $font-size-sm;

          span {
            width: 100%;
            white-space: normal;
            text-overflow: ellipsis;
            overflow: hidden;

            &.title {
              font-weight: bold;
              line-clamp: 2;
              border: none;
              padding-bottom: px2rem(10);
            }
            &.creator {
              font-size: $font-size-xs;
              padding-bottom: px2rem(10);
              line-clamp: 2;
            }
          }
        }
      }
    }

    .catalog {
      width: 100%;
      box-sizing: border-box;
      padding: px2rem(10) px2rem(10) 0;
    }
  }

</style>
