<template>
    <div>
        <header-el/>
        <div class="slim-mainpanel">
          <div class="container pd-t-30">
            <content-el/>
          </div>
        </div>
        <footer-el/>
    </div>
</template>

<script>
  import HeaderEl from './layout/header'
  import ContentEl from './layout/content'
  import FooterEl from './layout/footer'

  export default {
    components: {
      'header-el': HeaderEl,
      'content-el': ContentEl,
      'footer-el': FooterEl,
    },
    computed: { },
  }
</script>
