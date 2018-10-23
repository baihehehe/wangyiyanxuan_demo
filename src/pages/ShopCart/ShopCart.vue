<template>
    <div class="shopCart_container">
      <div class="shopCart_header">
        <span>购物车</span>
        <span>领券</span>
      </div>
      <div class="shopCart_list">
        <div></div>
        <span>30天无忧退货</span>
      </div>
      <div class="shopCart_list">
        <div></div>
        <span>48小时快速退款</span>
      </div>
      <div class="shopCart_list">
        <div></div>
        <span>满88元免邮费</span>
      </div>
      <div class="shopCart_img">
        <div></div>
        <span>去添加点什么吧</span>
      </div>
      <a href="javascript: ;">
        <div class="shopCart_login" @click="$router.replace('/personal')">登录</div>
      </a>
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
  .shopCart_container
    width 10rem
    height 100%
    background #F4F4F4
    .shopCart_header
      width 100%
      height (88/$rem)
      background #fff
      display flex
      justify-content center
      align-items center
      :nth-child(1)
        font-size .48rem

      :nth-child(2)
        font-size .4rem
        color #b4282d
        position absolute
        right (60/$rem)
        top (30/$rem)

    .shopCart_list
      float left
      display: flex
      justify-content center
      align-items center
      padding (20/$rem)
      :nth-child(1)
        width .133333rem
        height .133333rem
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png")
        background-repeat no-repeat
        display inline-block
        vertical-align middle
        margin-left (35/$rem)
      :nth-child(2)
        font-size .32rem
        color #666
        margin-left (5/$rem)
    .shopCart_img
      position absolute
      top (80/$rem)
      left (260/$rem)
      right 0
      bottom 0
      margin auto
      height 4rem
      :nth-child(1)
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png")
        background-repeat no-repeat
        width (248/$rem)
        height (248/$rem)
        vertical-align middle
      :nth-child(2)
        font-size .37333rem
        color #999
        margin-bottom (80/$rem)
        line-height 1
        display flex
        margin-left (20/$rem)

    a
      .shopCart_login
        width (480/$rem)
        height (93/$rem)
        background #b4282d
        font-size .4rem
        color #fff
        position absolute
        bottom (-530/$rem)
        left 0
        right 0
        top 0
        margin auto
        display flex
        justify-content center
        align-items center
</style>
