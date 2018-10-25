<template>
    <div class="login_container">
      <ShopHeader/>
      <div class="login_content">
        <div class="content_img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="网易严选">
        </div>
        <div class="content_loginType">
          <div class="loginType_test" @click="$router.push('/login')">
            <i class="iconfont icon-meh"></i>
            <span>账号登录</span>
          </div>
          <div class="loginType_phone" @click="$router.push('/phone')">
            <i class="iconfont icon-smile"></i>
            <span>短信登录</span>
          </div>
        </div>
      </div>
      <span class="login_phone_test">手机号快捷注册 ></span>
      <div class="login_footer">
        <div class="footer_list">
          <div class="footerList_items">
            <span class="footerItems_icon">
              <i class="iconfont icon-zhihu-circle-fill"></i>
            </span>
            <div class="footerItems_test">知乎</div>
          </div>
          <div  class="footerList_items">
            <span class="footerItems_icon">
              <i class="iconfont icon-alipay-square-fill"></i>
            </span>
            <div class="footerItems_test">支付宝</div>
          </div>
          <div class="footerList_items last">
            <span class="footerItems_icon">
              <i class="iconfont icon-weibo-circle-fill"></i>
            </span>
            <div class="footerItems_test">微博</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login_container
    width 10rem
    background #F4F4F4
    .login_content
      width 100%
      height (624/$rem)
      position relative
      clearFix()
      .content_img
        width 100%
        height 100%
        clearFix()
        img
          width (268/$rem)
          height (90/$rem)
          position absolute
          top (170/$rem)
          left 50%
          margin-left (-134/$rem)
      .content_loginType
        position absolute
        top (427/$rem)
        left (40/$rem)
        clearFix()
        .loginType_test
          width (673/$rem)
          height (96/$rem)
          background #b4282d
          font-size (30/$rem)
          color #fff
          text-align center
          line-height (96/$rem)
          margin-bottom (30/$rem)
          :nth-child(1)
            font-size (35/$rem)
            margin-right 10px
        .loginType_phone
          width (673/$rem)
          height (96/$rem)
          border 1px #b4282d solid
          font-size (30/$rem)
          color #b4282d
          text-align center
          line-height (96/$rem)
          :nth-child(1)
            font-size (35/$rem)
            margin-right (10/$rem)

    .login_phone_test
      font-size (28/$rem)
      color #333
      width 100%
      display block
      padding-top (50/$rem)
      margin-left (250/$rem)
    .login_footer
      width 100%
      height (74.4/$rem)
      position absolute
      bottom (70/$rem)
      .footer_list
        width 100%
        text-align center
        .footerList_items
          font-size (27/$rem)
          color #7F7F7F
          display inline-block
          padding 0 (20/$rem)
          border-right 1px solid #979797
          .footerItems_icon
            display inline-block
            i
              font-size (42/$rem)
              vertical-align middle
          .footerItems_test
            display inline-block

        .last
          border-right 0
</style>
