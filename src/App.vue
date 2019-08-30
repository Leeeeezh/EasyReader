<template>
  <div id="app">
    <!-- <transition name="router-view-animation"> -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <!-- </transition> -->

    <transition name="btns-animation">
      <div class="btns" v-show="$route.path==='/store'||$route.path==='/shelf'">

        <div class="icon-wrapper" @click="setView('store')" :class="[view==='store'?'active':'']">
          <router-link to="/store" tag=div>
            <span class="icon-book2"></span>
          </router-link>
        </div>

        <div class="icon-wrapper" @click="setView('shelf')" :class="[view==='shelf'?'active':'']">
          <router-link to="/shelf" tag="div">
            <span class="icon-shelf"></span>
          </router-link>
        </div>

        <div class="icon-wrapper">
          <!-- <router-link to="/ebook/Laws|2015_Book_ProtectingTheRightsOfPeopleWit" tag="div"> -->
            <span class="icon-book" @click="toRead"></span>
          <!-- </router-link> -->
        </div>

      </div>
    </transition>

  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['view'])
    },
    methods: {
      ...mapActions(['setView']),
      toRead() {
        window.location.replace('http://localhost:8080/#/ebook/Laws|2015_Book_ProtectingTheRightsOfPeopleWit')
        window.location.reload()
      }
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    document.querySelector('html').style.fontSize = fontSize + 'px'
  }) //  设置rem基准

</script>
<style lang="scss" scoped>
  #app {
    width: 100%;
    overflow: hidden;
    position: relative;

    .btns {
      border-top: 1px solid $shadow;
      box-sizing: border-box;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8vh;
      background-color: $bg-white;
      @include flex-center-row;
      @include reader-menu-icon;

      .icon-wrapper {
        @include flex-center-row;

        &.active {
          border-bottom: px2rem(4) solid #000;
          background-color: #eee;

          span {
            font-size: px2rem(26);
          }
        }

        &:active {
          background-color: #eee;

          span {
            font-size: px2rem(26);
          }
        }

        >div {
          flex: 1;
          @include flex-center-row;
        }
      }
    }
  }

  .router-view-animation-enter,
  .router-view-animation-leave-to {
    opacity: 0;
  }

  .router-view-animation-leave,
  .router-view-animation-enter-to {
    opacity: 1;
  }

  .router-view-animation-enter-active,
  .router-view-animation-leave-active {
    transition: all .1s ease-in-out;
  }

  .btns-animation-enter,
  .btns-animation-leave-to {
    transform: translateY(100%);
  }

  .btns-animation-leave,
  .btns-animation-enter-to {
    transform: translateY(0);
  }

  .btns-animation-enter-active,
  .btns-animation-leave-active {
    transition: all .2s ease-in-out;
  }

</style>
