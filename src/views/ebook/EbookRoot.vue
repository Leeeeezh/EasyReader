<template>
  <div class="ebook">
    <transition name="title-animation">
      <EbookTitle v-show="menuVisibility" />
    </transition>
    <transition name="menu-animation">
      <EbookMenu v-show="menuVisibility" />
    </transition>
    <EbookReader />
  </div>
</template>
<script>
  import EbookReader from '@/components/ebook/EbookReader.vue'
  import EbookTitle from '@/components/ebook/EbookTitle.vue'
  import EbookMenu from '@/components/ebook/EbookMenu.vue'
  import mixin from '@/mixins/storeOperateMixin.js'
  export default {
    mixins: [mixin],
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

  .title-animation-enter,
  .title-animation-leave-to {
    transform: translateY(-50px);
  }

  .title-animation-enter-active,
  .title-animation-leave-active {
    transition: .3s ease-in-out;
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
    transition: .3s ease-in-out;
  }

  .menu-animation-leave,
  .menu-animation-enter-to {
    transform: translateY(0);
  }

</style>
