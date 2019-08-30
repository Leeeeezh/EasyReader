<template>
  <div class="wrap noshadow">
    <div class="feature">
      <div class="title"><span class="text">精选</span></div>
      <div class="content">
        <div class="item" v-for="(d,i) in featured" :key="i">
          <div class="img"><img :src="d.cover"></div>
          <div class="info">
            <p class="book-name">{{d.title}}</p>
            <p class="author">{{d.author}}</p>
            <p class="category">{{categoryMap[d.category]}}</p>
          </div>
        </div>
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
      ...mapGetters(['categoryMap'])
    },
    props: ['featured'],
    watch: {
      feature() {
        console.log(this.featured)
      }
    }
  }

</script>
<style lang="scss" scoped>
  .wrap {
    padding: 0 $screen-margin;
    width: 100%;
    .feature {
      width: 100%;

      .title {
        height: px2rem(40);
        font-size: $font-size-md;
        @include flex-center-row;
        justify-content: space-between;
        padding: px2rem(20) $screen-margin;
        border-top: px2rem(2) solid #eee;

        .text {
          font-size: $font-size-lg;
          font-weight: bold;
        }
      }

      .content {
        width: 100%;
        font-size: $font-size-sm;
        @include flex-center-row;
        flex-wrap: wrap;
        .item {
          width: 50%;
          margin-bottom: px2rem(10);

          @include flex-center-row;
          align-items: stretch;
          .img {

            flex: 1;
            img {
              width:100%;
            }
          }

          .info {
            padding-left: px2rem(10);
            align-self: stretch;
            flex:3;
            text-overflow: hidden;

            @include flex-center-col;
            justify-content: space-between;
            align-items: flex-start;

            .book-name {
              font-weight: bold;
            }

            .author {
              width: px2rem(120);
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              color: #666;
              font-size: $font-size-xs;
            }

            .category {
              color: #999;
              font-size: $font-size-xs;
            }
          }
        }
      }
    }
  }

</style>
