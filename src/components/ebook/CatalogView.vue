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
        <div class="detail">
          <ul>
            <li v-for="(c,i) in catalog" :key="i" :style="`paddingLeft:${c.level * 20}px;`"
              :class="section===c.section?'checked':''" :data-section="c.section" :data-chapter="c.label"
              @click="setChapterAndSection($event)">
              {{c.label}}
              </li>
            <li> </li>
          </ul>
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
    computed: {
      ...mapGetters(['coverURL', 'progress', 'metaData', 'catalog', 'chapter', 'section'])
    },
    methods: {
      ...mapActions(['setChapter', 'setSection', 'setFlag']),
      setChapterAndSection({
        target: {
          dataset: {
            chapter,
            section
          }
        }
      }) {
        this.setChapter(chapter)
        this.setFlag(true)
        this.setSection(section)
      }
    },
    mounted() {}
  }

</script>
<style lang="scss" scoped>
  .wrap {
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    .catalog-view {
      height: 100%;

      .header {
        padding: px2rem(10);
        height: 24vh;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);

        .search {
          height: 30%;
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
            height: 100%;
            outline: none;
            border: none;
            padding: px2rem(2) px2rem(6);
          }
        }

        .read-info {
          width: 100%;
          height: 60%;
          @include flex-center-row;
          box-sizing: content-box;

          // text-align: right;
          .cover {
            width: 20%;
            height: 100%;
            flex: 1;

            img {
              height: 100%;
              box-shadow: 0 0 10px rgba(0, 0, 0, .1);
            }
          }

          .meta {
            width: 70%;
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
                border: none;
                padding-bottom: px2rem(10);
                display: -webkit-box;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: px2rem(16);
                height: px2rem(48);
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
        height: 70vh;
        box-sizing: border-box;

        .detail {
          overflow: scroll;
          font-size: $font-size-sm;
          height: 72vh;

          ul {
            // padding: 0 px2rem(10);
          }

          li {
            border-bottom: 1px solid rgba(0, 0, 0, .1);
            padding: px2rem(10);

            span {
              line-height: px2rem(20);
            }
          }
        }
      }
    }
  }

</style>
