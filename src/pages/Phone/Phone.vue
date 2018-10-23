<template>
  <div class="loginContainer">
    <ShopHeader/>
    <div class="loginInner">
      <div class="login_header">
        <div class="header_img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="网易严选">
        </div>
        <div class="login_header_title">
          <a href="javascript:;">短信登录</a>
        </div>
      </div>
      <div class="login_type">
        <div class="login_type_username">
          <input type="text" placeholder="手机号">
        </div>
        <div class="login_type_pwd">
          <input type="text" placeholder="验证码">
          <div class="type_pwd_test">发送验证码</div>
        </div>
        <div class="login_test">
          温馨提示：未注册网易严选帐号的手机号，登录时将自动注册，且代表已同意
          <a href="javascript: ;">《用户服务协议》</a>
        </div>
      </div>
      <div class="login_content">
        <button class="login_submit">登录</button>
        <button class="login_button" @click="$router.replace('/personal')">其他登录方式</button>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 10rem
    height 100%
    background #fff
    .loginInner
      padding-top (60/$rem)
      width 80%
      margin 0 auto
      .login_header
        width 100%
        margin-top (100/$rem)
        .header_img
          text-align center
          padding-bottom 0.13333rem
          img
            width (268/$rem)
            height (90/$rem)
        .login_logo
          font-size (40/$rem)
          font-weight bold
          color #b4282d
          text-align center
        .login_header_title
          margin-top (40/$rem)
          text-align center
          >a
            color #b4282d
            font-size (30/$rem)
            padding-bottom 4px
            font-weight bold
      .login_type
        margin-top (170/$rem)
        .login_type_username
          input
            font-size 0.4rem
            height (90/$rem)
            width 100%
            border 1px #666 solid
            padding-left (10/$rem)
        .login_type_pwd
          input
            font-size 0.4rem
            height (90/$rem)
            width 100%
            border 1px #666 solid
            margin-top (30/$rem)
            padding-left (10/$rem)
          .type_pwd_test
            width 2.3rem
            height 0.75rem
            border 1px #333 solid
            color #666
            font-size (28/$rem)
            text-align center
            line-height 0.75rem
            border-radius (10/$rem)
            background #eee
            position absolute
            top 48%
            right (90/$rem)
        .login_test
          line-height 0.55rem
          font-size 0.3rem
          margin-top (10/$rem)
          color #999
          a
            color #b4282d
        input::-webkit-input-placeholder
                font-size 0.4rem
      .login_content
        .login_submit
          display block
          width 100%
          height (94/$rem)
          margin-top (30/$rem)
          border-radius (4/$rem)
          background #b4282d
          color #fff
          text-align center
          font-size (30/$rem)
          line-height (42/$rem)
          border 0
        .login_button
          width 100%
          height (94/$rem)
          border-radius (4/$rem)
          text-align center
          font-size (30/$rem)
          line-height (42/$rem)
          border 1px #b4282d solid
          background #fff
          color #b4282d
          margin-top (20/$rem)
      .about_us
        display block
        font-size (30/$rem)
        margin-top (20/$rem)
        text-align center
        color #999
</style>

