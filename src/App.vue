<template>
  <div id="app">
    <!--缓存路由组建对象-->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!--底部导航-->
    <FooterNav v-show="$route.meta.isShowFooterNav"/>
  </div>
</template>

<script>
  import FooterNav from './components/Footer_nav/Footer_nav'

export default {
  components: {
    FooterNav
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%

</style>
