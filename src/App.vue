<template>
  <div id="app">
    <router-view/>
    <!--底部导航-->
    <FooterNav/>
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
