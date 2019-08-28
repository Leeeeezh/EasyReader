<template>
  <div class="ebook">

    <transition name="title-animation">
      <EbookTitle class="ebook-title" v-show="menuVisibility" />
    </transition>

    <transition name="menu-animation">
      <EbookMenu class="ebook-menu" v-show="menuVisibility" />
    </transition>

    <EbookReader />
  </div>
</template>
<script>
  import EbookReader from '@/components/ebook/EbookReader.vue'
  import EbookTitle from '@/components/ebook/EbookTitle.vue'
  import EbookMenu from '@/components/ebook/EbookMenu.vue'
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['menuVisibility'])
    },
    components: {
      EbookReader,
      EbookTitle,
      EbookMenu
    }
  }

</script>

<style lang="scss" scoped>
  .book {
    position: relative;
  }

  .ebook-title {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 40;
  }

  .ebook-menu {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 40;
  }

  .title-animation-enter,
  .title-animation-leave-to {
    transform: translateY(-50px);
  }

  .title-animation-enter-active,
  .title-animation-leave-active {
    transition: .3s cubic-bezier(0.5, 1.2, 0.75, 1.2);
  }

  .title-animation-leave,
  .title-animation-enter-to {
    transform: translateY(0);
  }

  .menu-animation-enter,
  .menu-animation-leave-to {
    transform: translateY(50px);
  }

  .menu-animation-enter-active,
  .menu-animation-leave-active {
    transition: .3s cubic-bezier(0.5, 1.2, 0.75, 1.2);
  }

  .menu-animation-leave,
  .menu-animation-enter-to {
    transform: translateY(0);
  }

</style>
