<template>
    <div class="interlay_container">
      <div class="interlay_body">
        <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="">
        <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="">
      </div>
      <div class="interlay_footer">
        <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="">
        <router-link to="/home" class="interlay_test">继续使用触屏版浏览</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .interlay_container
    max-width 10rem
    height 100%
    background #eee
    padding-top 186px
    margin 0 auto
    line-height 1.5
    .interlay_body
      width 10rem
      position relative
      margin-left auto
      margin-right auto
      img
        width 100%
        vertical-align top
    .interlay_footer
      position relative
      img
        width 10rem
        vertical-align top
    .interlay_test
      position absolute
      top 3.1rem
      left 3.36rem
      font-size 0.346rem
</style>
