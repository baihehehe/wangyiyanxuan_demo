<template>
  <div class="login_header">
    <div class="header_home" @click="$router.replace('/home')"></div>
    <div class="header_test"></div>
    <div class="header_search"></div>
    <div class="header_cart" @click="$router.replace('/shopcart')"></div>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login_header
    width 100%
    height (80/$rem)
    background #fff
    .header_home
      width (70/$rem)
      height (63/$rem)
      display inline-block
      background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png")
      background-repeat no-repeat
      background-position (20/$rem) (-55/$rem)
    .header_test
      width (375/$rem)
      height (44/$rem)
      display inline-block
      background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png")
      background-repeat no-repeat
      background-position (200/$rem) (-130/$rem)
    .header_search
      width (130/$rem)
      height (63/$rem)
      display inline-block
      background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png")
      background-repeat no-repeat
      background-position (76/$rem) (-326/$rem)
    .header_cart
      width (100/$rem)
      height (63/$rem)
      display inline-block
      background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png")
      background-repeat no-repeat
      background-position 0 (6/$rem)


</style>
