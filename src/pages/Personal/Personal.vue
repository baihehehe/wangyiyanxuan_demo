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
      height 100%
      position relative
      .content_img
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
      line-height 18.8rem
      margin-left (250/$rem)
</style>
