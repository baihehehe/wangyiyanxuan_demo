<template>
      <!--上部body区-->
      <div class="home_container">
        <!--头部搜索框-->
        <div class="home_header">
          <div class="header_left">
            <span class="header_test">网易严选</span>
          </div>
          <div class="header_item">
            <i class="iconfont icon-sousuo-xianxing"></i>
            <input type="text" class="header_search" placeholder="搜索商品，共16706款好物">
          </div>
          <!--列表导航-->
          <div class="header_scroll">
            <ul class="header_list">
              <li>居家</li>
              <li>配件</li>
              <li>服装</li>
              <li>电器</li>
              <li>洗护</li>
              <li>饮食</li>
              <li>餐厨</li>
              <li>婴童</li>
              <li>文体</li>
              <li>特色</li>
            </ul>
          </div>
        </div>
        <div class="home_header_content">
          <!--轮播图-->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="javascript: ;">
                  <img src="https://yanxuan.nosdn.127.net/c1c1bc4fc889ed1bbb662de6927c0324.jpg" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript: ;">
                  <img src="https://yanxuan.nosdn.127.net/141d4d8bf003475fdade1f3aa3063f02.jpg" alt="">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="javascript: ;">
                  <img src="https://yanxuan.nosdn.127.net/c597e2714c71360b46ff1d3778cb2ec6.jpg" alt="">
                </a>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <!--轮播图下面小导航-->
          <div class="home_smallList">
            <div class="smallList_item">
              <img src="http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png">
              <span>网易自营品牌</span>
            </div>
            <div  class="smallList_item">
              <img src="http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png">
              <span>30天无忧退货</span>
            </div>
            <div  class="smallList_item">
              <img src="http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png">
              <span>48小时快速退款</span>
            </div>
          </div>
        </div>
        <!--制造商列表-->
        <div class="home_list">
          <div class="home_list_item">
            <div>品牌制造商直供</div>
            <i class="iconfont icon-right-circle"></i>
          </div>
          <div class="home_list_maker">
            <div class="maker_item">
              <h4>CK制造商</h4>
              <div>25元起</div>
            </div>
            <div  class="maker_item">
              <h4>Nine West制造商</h4>
              <div>199元起</div>
            </div>
            <div  class="maker_item">
              <h4>新秀丽制造商</h4>
              <div>49元起</div>
            </div>
            <div  class="maker_item">
              <h4>Birkenstock集团制造商</h4>
              <div>89.9元起</div>
            </div>
          </div>
        </div>
        <!--新品列表-->
        <div class="home_newList">
          <div class="home_newList_title">
            <span>新品首发</span>
            <div class="title_test">查看全部></div>
          </div>
          <div class="home_newList_content">
            <ul class="content_list">
              <li>
                <img src="http://yanxuan.nosdn.127.net/969d44f72fa4453b0ccc71799ec83335.png" alt="小龙虾">
                <div class="list_title">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                <div class="list_content">夏季爆品，媲美现煮</div>
                <div class="list_price">98￥</div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/1f12ef5d66879785a292c422647015e0.jpg" alt="小龙虾">
                <div class="list_title">冰激凌夏日女式墨镜</div>
                <div class="list_content">轻奢透粉质感，偏光镜片呵护双眼</div>
                <div class="list_price">229￥</div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/bd2842f9eda908dae2d71f980eeb282e.png" alt="小龙虾">
                <div class="list_title">马来西亚直采 椰子水 330毫升*12瓶</div>
                <div class="list_content">非浓缩还原，低卡零脂肪</div>
                <div class="list_price">98￥</div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d85f53454944f798e412d74a6350b9e3.png" alt="小龙虾">
                <div class="list_title">冬夏两用 护脊椰棕弹簧床垫</div>
                <div class="list_content">硬度偏好者、青少年及老人优选</div>
                <div class="list_price">2099￥</div>
              </li>
            </ul>
          </div>
        </div>
        <!--福利社-->
        <div class="home_canteen">
          <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="福利社">
        </div>
        <!--专题精选-->
        <div class="home_special_list">
            <div class="home_special">
              <span>专题精选</span>
              <i class="iconfont icon-right-circle"></i>
            </div>
            <div class="home_special_smallList">
              <ul class="smallList_items">
                <li>
                  <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg" alt="">
                  <div class="items_title">给毛孔来一次深度清洁</div>
                  <div class="items_price">107.1元起</div>
                  <div class="items_content">硅胶洁面仪，洗出会发光的素颜肌</div>
                </li>
                <li>
                  <img src="https://yanxuan.nosdn.127.net/1f8ac0ae8bf3e4fe8044192c38b9c1c6.jpg" alt="">
                  <div class="items_title">夏日厨房清新法则</div>
                  <div class="items_price">7.9元起</div>
                  <div class="items_content">去除油腻的厨房清洁妙招</div>
                </li>
                <li>
                  <img src="https://yanxuan.nosdn.127.net/acb59e68201beaaee839d42733332c26.jpg" alt="">
                  <div class="items_title">行李箱太好用，天天盼出行</div>
                  <div class="items_price">249元起</div>
                  <div class="items_content">暑假出行必备行李箱、登机箱推荐</div>
                </li>
              </ul>
            </div>
          </div>
        <!--回到顶部-->
        <span class="home_icon">
          <i class="iconfont icon-heart-fill"></i>
        </span>
        <!--首页底部列表-->
        <div class="home_footer_list">
          <div class="footer_title">
            <div>居家好物</div>
          </div>
          <div class="footer_list">
            <div class="footer_list_items">
              <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png" alt="">
              <div class="footer_list_title">宽细夹排，升级爽滑凉感</div>
              <div class="footer_list_content">天然宽篾头层青碳化竹凉席</div>
              <span class="footer_list_price">279￥</span>
            </div>
            <div class="footer_list_items">
              <img src="http://yanxuan.nosdn.127.net/2b6e2268ed712f1a336283f013abb7a1.png" alt="">
              <div class="footer_list_title">细篾整密，凉滑不夹肉</div>
              <div class="footer_list_content">平滑细篾头层青碳化竹凉席</div>
              <span class="footer_list_price">259￥</span>
            </div>
            <div class="footer_list_items">
              <img src="http://yanxuan.nosdn.127.net/76e5c820f6bb71a26517ffa01f499871.png" alt="">
              <div class="footer_list_title">花语：相守是一种承诺</div>
              <div class="footer_list_content">海洋之心永生花</div>
              <span class="footer_list_price">299￥</span>
            </div>
            <div class="footer_list_items">
              <img src="http://yanxuan.nosdn.127.net/f88c3dc42f3e4d7da1ded8c1ee6a97ba.png" alt="">
              <div class="footer_list_title">花语：永远的爱</div>
              <div class="footer_list_content">怦然心动永生花</div>
              <span class="footer_list_price">439￥</span>
            </div>
          </div>
        </div>
        <!--底部-->
        <div>
          <div>
            <div>下载APP</div>
            <div>电脑板</div>
          </div>
          <div>
            <soan>网易公司版权所有 © 1997-</soan>
            <span>2018</span>
            <div>食品经营许可证：JY13301080111719</div>
          </div>
        </div>
      </div>
</template>

<script>

  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
        data() {
            return {

            }
        },

      mounted () {

       new BScroll('.header_scroll',{
          scrollX: true,
          click: true
        })

        new BScroll('.home_newList_content',{
          scrollX: true,
          click: true
        })

        new BScroll('.home_special_smallList',{
          scrollX: true,
          click: true
        })

        new Swiper('.swiper-container', {

          centeredSlides: true,
          autoplay:true,

          pagination: {
            el: '.swiper-pagination'
          },

          loop:true
        })

      }


    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .home_container
    width 10rem
    height 10000px
    .home_header
      width 100%
      height (148/$rem)
      background #fff
      .header_left
        padding (16/$rem)
        .header_test
          font-size 0.463333rem
          font-weight bold
          margin-bottom (5/$rem)
          display inline-block
          padding-left (10/$rem)
      .header_scroll
        display flex
        align-items center
        width 100%
        height (60/$rem)
        padding-bottom (10/$rem)
        margin-top (10/$rem)

        .header_list
          background #fff
          display flex
          align-items center
          li
            width (70/$rem)
            font-size 0.3833rem
            text-align center
            margin  0 0.5rem
            white-space nowrap
            padding-bottom (12/$rem)

      .header_search
        width 70%
        height 0.8rem
        background #eee
        position absolute
        top 0.36rem
        right 0.266666rem
        font-size 0.42333rem
        padding-left 1.733333rem
        border-radius 10px/@rem
      input::-webkit-input-placeholder {
              /* placeholder字体大小  */
              font-size 0.383333rem
            }
      .icon-sousuo-xianxing
        font-size 0.423333rem
        position absolute
        top 0.56rem
        left 300px/@rem
        z-index 10
    .home_header_content
      margin-bottom (30/$rem)
      .swiper-slide
        width (400/$rem)
        padding-top 20px

        img
          width 100%
          height 100%
      .swiper-pagination
        .swiper-pagination-bullet-active
          background #fff
        .swiper-pagination-bullet
            width (15/$rem)
            height (15/$rem)
      .home_smallList
        width 100%
        height (72.04/$rem)
        background #fff
        .smallList_item
          font-size 0.32rem
          float left
          text-align center
          line-height (72.04/$rem)
          flex 1
          width 33%
          img
            width (32/$rem)
            vertical-align middle
            margin-bottom 5px

    .home_list
      width 100%
      height (586.29/$rem)
      background #fff
      .home_list_item
        width 100%
        height (110/$rem)
        font-size 0.42667rem
        display flex
        justify-content center
        align-items center
        i
          margin-left 10px
          font-size 35px
          color #333

      .home_list_maker
        width 100%
        .maker_item
          font-size 0.37333rem
          width 4.73333rem
          height 3.14667rem
          float left
          background #f4f4f4
          padding 18px
          margin-bottom 15px
          &:nth-child(1)
            background-image url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png")
            background-size 100%
            margin-left 10px
          &:nth-child(2)
            background-image url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png")
            background-size 100%
            margin-left 15px
          &:nth-child(3)
            background-image url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png")
            background-size 100%
            margin-left 10px
          &:nth-child(4)
            background-image url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png")
            background-size 100%
            margin-left 15px

    .home_newList
      width 100%
      background #fff
      padding-top 20px
      .home_newList_title
        height (260/$rem)
        font-size 0.48rem
        position relative
        background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png")
        span
          color #8BA0B6
          position absolute
          top 20%
          left 50%
          transform translateX(-50%)
        .title_test
          width (240/$rem)
          height (56/$rem)
          background #D8E5F1
          text-align center
          line-height (56/$rem)
          color #8BA0B6
          position absolute
          top 35%
          left 50%
          transform translateX(-50%)
          font-size (28/$rem)

      .home_newList_content
        display flex
        margin-top 30px
        padding-bottom 30px
        .content_list
          display flex
          li
            font-size (30/$rem)
            white-space nowrap
            width (280/$rem)
            height (476.78/$rem)
            margin-left 30px
            img
              width (280/$rem)
              height (280/$rem)
              background-color #f4f4f4
            .list_title
              margin 10px 0
              overflow hidden
              text-overflow ellipsis
            .list_content
              font-size (25/$rem)
              color #7f7f7f
              margin-bottom 10px
            .list_price
              color #b4282d
              font-size (28/$rem)

    .home_canteen
      margin-top 20px
      img
        width 100%
    .home_special_list
      .home_special
        width 100%
        height (110/$rem)
        display flex
        justify-content center
        align-items center
        background #fff
        line-height (110/$rem)
        span
          font-size (33/$rem)
        i
          font-size (33/$rem)
          padding-right 10px


      .home_special_smallList
        width 100%
        height (401/$rem)
        display flex
        .smallList_items
          display flex
          li
            margin-left 20px
          img
            width (575/$rem)
            height (320/$rem)
          .items_title
            font-size (30/$rem)
            display inline-block
            float left
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            padding 10px 0
          .items_price
            font-size (30/$rem)
            color #b4282d
            float right
          .items_content
            font-size (27/$rem)
            color #7F7F7F
            float left
    .home_icon
      position fixed
      bottom (120/$rem)
      right (34/$rem)
      z-index 99
      i
        font-size (80/$rem)
        color #999
    .home_footer_list
      width 100%
      height 100%
      background #fff
      .footer_title
        width 100%
        height (120/$rem)
        font-size (35/$rem)
        text-align center
        line-height (120/$rem)

      .footer_list
        width 100%
        .footer_list_items
          width 46%
          float left
          margin 15px
          img
            width 100%
            background #f4f4f4
            display block
            border-radius (7/$rem)
          .footer_list_title
            font-size (23/$rem)
            background #F1ECE2
            color #9F8A60
            width 100%
            padding 20px
            border-radius (7/$rem)
          .footer_list_content
            font-size (30/$rem)
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            color #333
            margin-top 10px
          .footer_list_price
            font-size (30/$rem)
            color #b4282d

</style>
