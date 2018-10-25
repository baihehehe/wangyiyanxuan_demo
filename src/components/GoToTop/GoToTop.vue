<template>
   <span class="home_icon" ref="toTop" @click="goToTop"></span>
</template>

<script>
    export default {
        data() {
            return {
              isTop: true,
            }
        },

      mounted () {
        this.needScroll()
      },

      methods: {

          needScroll () {
            let clientHeight = document.documentElement.clientHeight
            let toTop = this.$refs.toTop
            window.onscroll = function () {
              let osTop = document.documentElement.scrollTop || document.body.scrollTop
              if (osTop >= clientHeight) {
                toTop.style.display = 'block'
              } else {
                toTop.style.display = 'none'
              }
              if (!this.isTop) {
                clearInterval(this.timer)
              }
              this.isTop = false
            }


          },

        goToTop () {

           this.timer = setInterval(() => {
             //滚动条滚动的距离
            let goTop = document.documentElement.scrollTop || document.body.scrollTop
             //console.log('---gotop'+ goTop);
             //速度
            let isPeed = Math.floor(-goTop / 5)
            //console.log('---ispeed'+isPeed);
             //回到顶部 = 滚动条滚动的距离 - 速度(负值)
            document.documentElement.scrollTop = document.body.scrollTop = goTop + isPeed
            this.isTop = true
            if (goTop <= 0) {
              clearInterval(this.timer)
            }
          }, 30)

        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home_icon
    width (82/$rem)
    height (82/$rem)
    position fixed
    bottom (120/$rem)
    right (34/$rem)
    z-index 99
    display none
    background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png")
</style>
