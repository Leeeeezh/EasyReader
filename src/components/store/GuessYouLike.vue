<template>
  <div class="wrap noshadow">
    <div class="guess-you-like">
      <div class="title">
        <span class="text">猜你喜欢</span>
        <span class="change" @click="change">换一批</span>
      </div>
      <div class="content">
        <div class="item" v-for="(d,i) in guess" :key="i">
          <div class="img">
            <img :src="d.cover">
          </div>
          <div class="info">
            <p class="book-name">{{d.title}}</p>
            <p class="author">{{d.author}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    randomChoose
  } from '@/utils/util.js'
  export default {
    data() {
      return {
        guess: []
      }
    },
    props: ['guessYouLikeData'],
    methods: {
      change() {
        this.guess = randomChoose(this.guessYouLikeData, 3)
      }
    },
    watch: {
      guessYouLikeData() {
        this.change()
      }
    }
  }

</script>

<style lang="scss" scoped>
  .wrap {
    box-shadow: rgba(0, 0, 0, 0);

    .guess-you-like {
      .title {
        height: px2rem(40);
        font-size: $font-size-md;
        @include flex-center-row;
        justify-content: space-between;
        padding: px2rem(10) $screen-margin;

        .text {
          font-size: $font-size-lg;
          font-weight: bold;
        }

        .change {
          color: #2196F3;

          &:active {
            color: blue;
          }
        }
      }

      .content {
        @include flex-center-col;
        padding: 0 $screen-margin;

        .item {
          border-bottom: 1px solid #eee;

          &:last-child {
            border-bottom: none;
          }

          margin: px2rem(10) 0;
          height: px2rem(110);
          width: 100%;
          box-sizing: content-box;
          padding: px2rem(10) $screen-margin;
          @include flex-center-row;

          .img {
            img {
              height: px2rem(110);
            }
          }

          .info {
            font-size: $font-size-md;
            height: 100%;
            width: 80%;
            padding-left: px2rem(10);
            @include flex-center-col;
            justify-content: space-between;

            p {
              width: 100%;
            }

            .book-name {
              font-size: $font-size-lg;
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
          }

        }
      }
    }
  }

</style>
