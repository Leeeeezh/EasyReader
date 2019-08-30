<template>
  <div class="wrap">
    <div class="category">
      <div class="title">
        <span class="text">{{this.categoryMap[categoryData.category]}}
        </span>
        <span class="more">更多</span>
      </div>

      <div class="content">
        <div class="item" v-for="(c,i) in categoryData.list" :key="i" @click="navToDetail(c)">
          <div class="img">
            <img :src="c.cover" alt="">
          </div>

          <div class="info">
            <p class="book-name">{{c.title}}</p>
            <p class="author">{{c.author}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    props: ['categoryData'],
    computed: {
      ...mapGetters(['categoryMap'])
    },
    methods: {
      ...mapActions(['setBookDetail']),
      navToDetail(c) {
        this.setBookDetail(c).then(() => {
          this.$router.push(`/store/book/${c.fileName}`)
          console.log(c.fileName)
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .wrap {
    padding: 0 $screen-margin;
    width: 100%;

    .category {
      width: 100%;

      .title {
        @include flex-center-row;
        justify-content: space-between;
        height: px2rem(40);
        font-size: $font-size-md;
        @include flex-center-row;
        justify-content: space-between;
        padding: px2rem(30) $screen-margin;
        border-top: px2rem(2) solid #eee;

        .text {
          font-size: $font-size-lg;
          font-weight: bold;
        }

        .more {
          color: rgb(74, 169, 245);
        }
      }

      .content {
        @include flex-center-row;
        flex-wrap: wrap;
        font-size: $font-size-xs;
        justify-content: space-around;
        align-items: flex-start;
        padding-bottom: px2rem(10);

        .item {
          @include flex-center-col;
          width: 20%;

          .img {
            flex-grow: 1;

            img {
              width: 100%;
            }
          }

          .info {
            flex-grow: 1;

            .book-name {
              padding-top: px2rem(6);
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }

            .author {
              padding-top: px2rem(6);
              color: #999;
              font-size: $font-size-xs;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
  }

</style>
