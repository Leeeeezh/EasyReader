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

    .feature {
      width: 100%;

      .title {
        height: px2rem(40);
        font-size: $font-size-md;
        @include flex-center-row;
        justify-content: space-between;
        padding: px2rem(20) $screen-margin;
        border-top: px2rem(10) solid #eee;

        .text {
          font-size: $font-size-lg;
          font-weight: bold;
        }
      }

      .content {
        width: 100%;
        padding: $screen-margin;
        @include flex-center-row;
        flex-wrap: wrap;

        .item {
          flex-grow: 1;
          width: 40vw;
          @include flex-center-row;
          .img {
            width: 20vw;

            img {
              width: 100%;
            }
          }

          .info {
            padding-left: px2rem(4);
            font-size: $font-size-sm;
            height: 100%;
            width: 40vw;
            @include flex-center-col;
            justify-content: space-between;
            .book-name {
              font-weight: bold;
              text-align: left;
              height: 60%;
              overflow: hidden;
              text-overflow: ellipsis;
              line-clamp: 3;
            }

            .author {
              text-align: left;
            }

            .category {}
          }
        }


      }
    }
  }

</style>
