<template>
  <div class="ebook-reader">
    <div id="read">{{$route.params.fileName}}</div>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  global.ePub = Epub
  export default {
    mounted() {
      const baseURL = 'http://127.0.0.1:8081/epub/'
      const fileName = this.$route.params.fileName.split('/').join('/')
      console.log(`${baseURL}${fileName}.epub`)
    }
  }

</script>
