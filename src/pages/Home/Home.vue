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
              <li  v-for="(item,index) in data" :key="index">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="home_header_content">
          <!--轮播图-->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                  <img v-lazy="item.picUrl" />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <!--轮播图下面小导航-->
          <div class="home_smallList">
            <div class="smallList_item" v-for="(item,index) in home.policyDescList" :key="index">
              <img v-lazy="item.icon">
              <span>{{item.desc}}</span>
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
            <div class="maker_item"  v-for="(item,index) in getHomeTag" :key="index">
              <img v-lazy="item.picUrl" alt="">
              <div class="maker_item_test">
                <h4>{{item.name}}</h4>
                <div>{{item.floorPrice}}元起</div>
                <i></i>
              </div>
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
              <li v-for="(item,index) in home.newItemList" :key="index">
                <img v-lazy="item.listPicUrl" alt="小龙虾">
                <div class="list_title">{{item.name}}</div>
                <div class="list_content">{{item.simpleDesc}}</div>
                <div class="list_price">{{item.retailPrice}}￥</div>
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
                <li v-for="(item,index) in home.topicList" :key="index">
                  <img v-lazy="item.itemPicUrl" alt="">
                  <div class="items_title">{{item.title}}</div>
                  <div class="items_price">{{item.priceInfo}}元起</div>
                  <div class="items_content">{{item.subtitle}}</div>
                </li>
              </ul>
            </div>
          </div>
        <!--回到顶部-->
        <GoToTop/>
        <!--首页底部列表-->
        <div class="home_footer_list">
          <div v-for="(item,index) in home.cateList" :key="index">
            <div class="footer_title">
              <div>{{item.name}}好物</div>
            </div>
            <div class="footer_list">
              <div class="footer_list_items" v-for="(itemGoods,index) in item.itemList" :key="index">
                <img v-lazy="itemGoods.listPicUrl" alt="">
                <div class="footer_list_title">{{itemGoods.simpleDesc}}</div>
                <div class="footer_list_content">{{itemGoods.name}}</div>
                <span class="footer_list_price">{{itemGoods.retailPrice}}￥</span>
              </div>
            </div>
          </div>
        </div>
        <!--底部-->
        <div class="home_footer">
          <div class="footer_lists">
            <div class="footer_items">
              <div class="footer_items_app">下载APP</div>
              <div class="footer_items_comp">电脑板</div>
            </div>
            <div class="footer_since">
              <span>网易公司版权所有 © 1997-</span>
              <span>2018</span>
              <div>食品经营许可证：JY13301080111719</div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

  import {mapState,mapGetters} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import GoToTop from '../../components/GoToTop/GoToTop'
  export default {
        data() {
            return {

            }
        },

      mounted () {

          this.$store.dispatch('getData')
          this.$store.dispatch('getHome')
          this.$store.dispatch('getBanner',() => {
              this.$nextTick(() => {
                this.swiper()
              })
          })

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



      },

      computed: {
        ...mapState(['data','home','banner']),
        ...mapGetters(['getHomeTag'])
      },

      methods: {
        //轮播图
        swiper() {
          new Swiper('.swiper-container', {

            centeredSlides: true,
            autoplay: true,

            pagination: {
              el: '.swiper-pagination'
            },

            loop: true
          })
        }
      },

    components: {
      GoToTop
    }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .home_container
    width 10rem
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
        width 100%
        height (400/$rem)
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
          position relative
          margin-left (13/$rem)
          img
            width 100%
            height 100%
          .maker_item_test
            position: absolute
            top 0
            left 0
            z-index 10
            padding (20/$rem) 0 0 (20/$rem)
            h4
              margin-bottom (20/$rem)
            i
              display block
              height (32/$rem)
              margin-top (20/$rem)
              background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/new-5e42f2db1f.png")
              background-repeat no-repeat

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
        height (421/$rem)
        display flex
        background #fff
        .smallList_items
          display flex
          li
            margin-left 20px
          img
            width (575/$rem)
            height (320/$rem)
          .items_title
            font-size (27/$rem)
            width (410/$rem)
            display inline-block
            float left
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin 10px 0
          .items_price
            font-size (30/$rem)
            color #b4282d
            float right
          .items_content
            width (575/$rem)
            font-size (25/$rem)
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
      margin-top 30px
      .footer_title
        width 100%
        height (120/$rem)
        font-size (35/$rem)
        text-align center
        line-height (120/$rem)
      .footer_list
        width 100%
        clearFix()
        .footer_list_items
          width 46%
          float left
          margin 15px
          img
            width 100%
            height (345/$rem)
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
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
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

    .home_footer
      width 100%
      height (245/$rem)
      background #414141
      margin-bottom (98/$rem)
      .footer_lists
        width 10rem
        padding (56.25/$rem) (20/$rem) (28/$rem)
        .footer_items
          font-size (25/$rem)
          color #fff
          text-align center
          line-height (62/$rem)
          .footer_items_app
            width (172/$rem)
            height (62/$rem)
            display inline-block
            border 1px #999 solid
            margin-right (50/$rem)
          .footer_items_comp
            border 1px #999 solid
            width (172/$rem)
            height (62/$rem)
            display inline-block
        .footer_since
          font-size (25/$rem)
          color #999
          line-height (32/$rem)
          text-align center
          margin-top (36/$rem)
</style>
