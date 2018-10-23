<template>
  <div class="footer_container">
    <div class="footer_nav" @click="goto('/home')" :class="{active: isCurrent('/home')}">
      <span>
        <i class="iconfont icon-shouye-xianxing"></i>
      </span>
      <span class="footer_item">首页</span>
    </div>
    <div class="footer_nav" @click="goto('/recomment')" :class="{active: isCurrent('/recomment')}">
          <span>
            <i class="iconfont icon-detail"></i>
          </span>
      <span class="footer_item">识物</span>
    </div>
    <div class="footer_nav" @click="goto('/shoplist')" :class="{active: isCurrent('/shoplist')}">
         <span>
            <i class="iconfont icon-appstore"></i>
         </span>
      <span class="footer_item">分类</span>
    </div>
    <div class="footer_nav" @click="goto('/shopcart')" :class="{active: isCurrent('/shopcart')}">
          <span>
            <i class="iconfont icon-caigou-xianxing"></i>
          </span>
      <span class="footer_item">购物车</span>
    </div>
    <div class="footer_nav"  @click="goto('/personal')" :class="{active: isCurrent('/personal')}">
          <span>
            <i class="iconfont icon-yonghu-xianxing"></i>
          </span>
      <span class="footer_item">个人</span>
    </div>
  </div>
</template>

<script>
    export default {
        methods: {
          //点击跳转路由
          goto (path) {
            this.$router.replace(path)
          },

          isCurrent (path) {
            return this.$route.path === path
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

  .footer_container  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fafafa
    width 10rem
    height (98/$rem)
    display flex
    .footer_nav
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin (5/$rem)
      color #999999
      &.active
        color #b4282d
      span
        font-size 0.35rem
        margin-top (2/$rem)
        margin-bottom (2/$rem)
        .iconfont
          font-size 0.633rem

</style>
