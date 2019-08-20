<template>
  <div class="ebook" >
    <transition name="title-animation">
      <EbookTitle />
    </transition>
    <transition name="menu-animation">
      <EbookMenu />
    </transition>
    <EbookReader />
  </div>
</template>
<script>
  import EbookReader from '@/components/ebook/EbookReader.vue'
  import EbookTitle from '@/components/ebook/EbookTitle.vue'
  import EbookMenu from '@/components/ebook/EbookMenu.vue'
  export default {
    methods: {
      toggleTitleAndMenu() {
        console.log('toggle')
      }
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
</style>
