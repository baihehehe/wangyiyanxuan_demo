<template>
    <div class="recomment_container">
      <ShopHeader/>
      <div class="recomment_content">
        <!--头部轮播-->
       <div>
         <div class="swiper-container">
           <div class="swiper-wrapper">
             <div class="swiper-slide" v-for="(item,index) in detail.banner" :key="index">
               <img v-lazy="item.picUrl" />
               <div class="banner_items">
                 <div class="banner_items_title">严选推荐</div>
                 <div class="banner_items_content">无限回购TOP榜</div>
                 <div class="banner_items_test">买过1次？还会想买第2件！</div>
               </div>
             </div>
           </div>
           <!-- 如果需要分页器 -->
           <div class="swiper-pagination"></div>
         </div>
       </div>
        <!--头部推荐列表-->
        <div class="content_headerList">
          <div class="headerList_items_content">
            <div class="headerList_items" v-for="(item,index) in detail.column" :key="index">
              <div class="headerList_items_img">
                <img v-lazy="item.picUrl" alt="">
              </div>
              <div class="items_test">
                <div class="headerList_items_test">{{item.articleCount}}</div>
              </div>
              <div class="items_footer_content">
                <div class="headerList_items_footer">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
        <!--严选推荐-->
        <div class="content_recommend">
          <div class="recommend_content" v-if="typeof detail.recommendOne==='object'">
            <div class="content_title">
              <div>{{detail.recommendOne.nickname}}</div>
            </div>
            <div class="recommend_content_test">
              <div class="recommend_content_test1">
                <div class="recommend_content_tet">
                    <div class="recommend_content_test2">{{detail.recommendOne.nickname}}</div>
                </div>
              </div>
            </div>
            <div class="recommend_content_mid">
              <div class="content_mid_items">
                <div class="content_mid_title">{{detail.recommendOne.nickname}}</div>
                <div class="content_mid_price">{{detail.recommendOne.priceInfo}}元起</div>
              </div>
              <div class="content_mid_item">
                <div class="content_mid_test">{{detail.recommendOne.subTitle}}</div>
              </div>
            </div>
            <div class="recommend_rim">
              <div class="rim_content">
                <div class="recommend_rim_left">
                  <div class="rim_left_title">
                    <div class="left_title_img">
                      <img v-lazy="detail.recommendTwo.avatar" alt="">
                    </div>
                    <div class="left_title_test">{{detail.recommendTwo.nickname}}</div>
                  </div>
                  <div class="rim_left_content">
                    <div>{{detail.recommendTwo.title}}</div>
                  </div>
                  <div class="rim_left_price">
                    <div>{{detail.recommendTwo.subTitle}}</div>
                  </div>
                </div>
                <div class="recommend_rim_right">
                  <div class="rim_right_content">
                    <img v-lazy="detail.recommendTwo.picUrl" alt="">
                  </div>
                  <div class="rim_right_title">
                    <div class="right_title_test">{{detail.recommendTwo.typeName}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="recommend_rim">
              <div class="rim_content">
                <div class="recommend_rim_left">
                  <div class="rim_left_title">
                    <div class="left_title_img">
                      <img v-lazy="detail.recommendThree.avatar" alt="">
                    </div>
                    <div class="left_title_test">{{detail.recommendThree.nickname}}</div>
                  </div>
                  <div class="rim_left_content">
                    <div>{{detail.recommendThree.title}}</div>
                  </div>
                  <div class="rim_left_price">
                    <div>{{detail.recommendThree.subTitle}}</div>
                  </div>
                </div>
                <div class="recommend_rim_right">
                  <div class="rim_right_content">
                    <img v-lazy="detail.recommendThree.picUrl" alt="">
                  </div>
                  <div class="rim_right_title">
                    <div class="right_title_test">{{detail.recommendThree.typeName}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--十点一刻-->
          <div class="m-exploreTenFifteen">
            <div class="module-title">十点一刻</div>
            <div class="innerWrap">
              <div class="scrollWrap">
                <div class="scroll-item" v-for="(item,index) in detail.tenfifteen" :key="index">
                  <div class="line-title">
                    <span class="inner1">- 今日话题 -</span>
                  </div>
                  <div class="title">{{item.title}}</div>
                  <div class="desc">{{item.desc}}</div>
                  <div class="joinInfo">
                    <div class="inner">
                      <div class="avatars">
                        <div class="avatar" v-for="(avatar,index) in item.participantAvatar" :key="index">
                          <img v-lazy="avatar" alt="">
                        </div>
                        <div class="avatar1">
                          <div class="doc"></div>
                          <div class="doc"></div>
                          <div class="doc"></div>
                        </div>
                      </div>
                      <div class="join">
                        <span>{{item.participantNum}}</span>
                        <span>人参与话题</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <!--严选LOOK-->
        <div class="yanxuanLook">
          <div class="m-exploreLook" v-if="typeof detail.yxLook === 'object'">
            <div class="module-title">严选LOOK</div>
            <div class="content">
              <img v-lazy="detail.yxLook.picUrl" alt="">
              <div class="topicInfo">
                <div class="author-container">
                  <div class="author">
                    <div class="avatar">
                      <img v-lazy="detail.yxLook.avatar" alt="">
                    </div>
                    <div class="nickname">{{detail.yxLook.nickname}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--回到顶部-->
        <GoToTop/>
        <!--底部列表-->
        <div class="tooterList">
          <div class="m-explorMore">
            <div class="line-title">
              <div class="inner">更多精彩</div>
            </div>
            <div class="wrap">
              <div class="content" v-for="(item,index) in detail.findMore" :key="index">
                <div class="imgContainer">
                  <img v-lazy="item.itemPicUrl" alt="">
                </div>
                <div class="desc">{{item.subtitle}}</div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
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

          this.$store.dispatch('getDetail',() => {
            this.$nextTick(() => {
              this.swiper()
            })

          }),

            //头部推荐列表滑动
            new BScroll('.content_headerList',{
              scrollX: true,
              click: true
            }),

            //十点一刻滑动
            new BScroll('.innerWrap',{
              scrollX: true,
              click: true
            })
      },

      computed: {
        ...mapState(['detail'])
      },

      methods: {
        //轮播图
        swiper() {
          new Swiper('.swiper-container', {
            centeredSlides: true,
            autoplay: false,

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

  .recomment_container
    width 100%
    height 100%
    background #F4F4F4
    .recomment_content
      width 100%
      height 100%
      .swiper-container
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
      .banner_items
        position absolute
        left 0
        top 0
        bottom 0
        right 0
        margin auto
        display flex
        flex-direction column
        justify-content center
        align-items center
        width (466/$rem)
        height (198/$rem)
        background-color rgba(255, 255, 255, 0.9)
        .banner_items_title
          position relative
          font-size 0.26667rem
          color #7f7f7f
          line-height 0.4rem
          padding 0 0.10667rem
        .banner_items_content
          font-size 0.42667rem
          line-height 0.64rem
          color #333
          margin-top 0.21333rem
          font-weight 700
        .banner_items_test
          font-size 0.32rem
          color #333
          line-height 0.48rem
          margin-top 0.05333rem

      .content_headerList
        width 100%
        height (266.15/$rem)
        background-color #fff
        display flex
        padding (30/$rem)
        .headerList_items_content
          display flex
          .headerList_items
            position relative
            font-size (23/$rem)
            margin-right (30/$rem)
            .headerList_items_img
              img
                width (164/$rem)
            .items_test
              position absolute
              top 0
              right (10/$rem)
              background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/rbGradient-049c62dfb5.png")
              .headerList_items_test
                color #fff
            .items_footer_content
              text-align center
              margin-top (20/$rem)
              .headerList_items_footer
                color #333


      .content_recommend
        width 100%
        height 100%
        background #fff
        .recommend_content
          padding 0 0.4rem 0.53333rem
          .content_title
            background-color #fff
            text-align center
            font-size 0.42667rem
            height 1.6rem
            line-height 1.6rem
          .recommend_content_test
            margin-bottom 0.4rem
            display block
            position relative
            color #333
            border 1px solid #d9d9d9
            border-radius 0.10667rem
            overflow hidden
            .recommend_content_tet
              background-image url(//yanxuan.nosdn.127.net/09d83c97c9963495e6518cfbec776b4c.jpg?imageView&quality=75)
              background-size cover
              background-position center
              background-repeat no-repeat
              position relative
              height 5.14667rem
              border-radius 0.10667rem 0.10667rem 0 0
              overflow hidden
              .recommend_content_test2
                display inline-block
                padding 0 0.21333rem
                height 0.48rem
                line-height 0.48rem
                background-color rgba(255, 255, 255, 0.9)
                border 1px solid #d9d9d9
                border-radius 0.26667rem
                color #333
                font-size (23/$rem)
                margin-left (30/$rem)
                .content_tet_content

                  position relative
                  padding 0.32rem 0.26667rem 0
                  background-color #fff
          .recommend_content_mid
            overflow hidden
            position relative
            padding 0.32rem 0.26667rem 0
            background-color #fff
            .content_mid_items
              margin-bottom 0.25333rem
              display flex
              align-items center
              line-height 1.2
              justify-content space-between
              .content_mid_title
                margin-right 0.3rem
                font-size 0.48rem
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
              .content_mid_price
                margin-right 0.3rem
                font-size 0.48rem
                text-overflow ellipsis
                white-space nowrap
                overflow hidden
                float left
            .content_mid_item
              .content_mid_test
                position relative
                font-size 0.37333rem
                line-height 1.2
                color #7f7f7f
                text-overflow ellipsis
                white-space nowrap
                overflow hidden

          .recommend_rim
            display flex
            background-color #fff
            color #333
            border 1px solid #d9d9d9
            border-radius 0.05333rem
            margin-bottom 0.4rem
            .rim_content
              flex: 1
              display: flex
              justify-content: center
              overflow: hidden
              position: relative
              padding 0.32rem 0.26667rem 0
            .recommend_rim_left
              margin-bottom 0.33333rem
              flex 1
              display flex
              flex-direction column
              justify-content center
              overflow hidden
              position relative
              padding-left 0.26667rem
              padding-right 0.4rem
              .rim_left_title
                height 0.64rem
                font-size 0.26666667rem
                display flex
                align-items center
                .left_title_img
                  width 0.64rem
                  height 0.64rem
                  margin-right 0.10666667rem
                  img
                    display block
                    width 100%
                    height 100%
                    border-radius 50%
                  .left_title_test
                    color #333
                    text-overflow ellipsis
                    white-space nowrap
                    overflow hidden



              .rim_left_content
                margin-bottom 0.18667rem
                line-height 1.2
                margin-right: 0.4rem
                font-size: 0.42667rem
                div
                  text-overflow: ellipsis
                  white-space: nowrap
                  overflow: hidden
              .rim_left_price
                overflow hidden
                text-overflow ellipsis
                position relative
                font-size 0.32rem
                line-height 1.5
                color #7f7f7f
                white-space normal
                height 182px
            .recommend_rim_right
              position relative
              width 3.73333rem
              height 3.62667rem
              .rim_right_content
                width 100%
                img
                  width 100%
                  background-position center
                  background-repeat no-repeat
              .rim_right_title
                position absolute
                top 0.03rem
                left 0.13333rem
                margin-top -0.3rem
                .right_title_test
                  font-size 0.32rem
                  display inline-block
                  padding 0 0.21333rem
                  height 0.48rem
                  line-height 0.48rem
                  background-color rgba(255, 255, 255, 0.9)
                  border 1px solid #d9d9d9
                  border-radius 0.26667rem
                  color #333
      .m-exploreTenFifteen
        overflow hidden
        padding 0 0.4rem 0.53333rem
        height 7.61333rem
        background-color #fff
        margin-bottom 0.26667rem
        .module-title
          background-color #fff
          text-align center
          font-size 0.42667rem
          height 1.6rem
          line-height 1.6rem
        .innerWrap
          display flex
          .scrollWrap
            display flex
            justify-content space-between
            align-items center
            .scroll-item
              display inline-block
              vertical-align middle
              background-repeat no-repeat
              background-size 100% 90%
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png)
              position relative
              width 7.73333rem
              height 5.48rem
              padding 0.50667rem 0.53333rem 1.05333rem
              margin-right 0.4rem
              text-align center
              color #333
              .line-title
                display flex
                align-items center
                justify-content center
                margin-bottom 0.53333rem
                .inner1
                  margin 0 0.10667rem
                  font-size 0.32rem
                  color #7f7f7f
              .title
                font-size 0.48rem
                font-weight 700
                margin-bottom 0.18667rem
              .desc
                font-size 0.37333rem
                line-height 1.5
                display block
                text-overflow ellipsis
              .joinInfo
                position absolute
                bottom 1.55333rem
                width 6.66667rem
                text-align center
                .inner
                  display inline-block
                  overflow hidden
                  .avatars
                    float left
                    margin-right 0.21333rem
                    .avatar
                      float left
                      img
                        position: relative
                        float: left
                        height: 0.64rem
                        width: 0.64rem
                        border: 1px solid #fff
                        border-radius: 50%
                        z-index: 4
                    .avatar1
                      background-color #d9d9d9
                      display: flex
                      justify-content center
                      align-items center
                      border-radius 50%
                      position relative
                      float left
                      height 0.64rem
                      width 0.64rem
                      overflow hidden
                      border 1px solid #fff
                      .doc
                        width 0.08rem
                        height 0.08rem
                        border-radius 50%
                        margin-right 0.05333rem
                        background-color #fff
                  .join
                    float left
                    text-align left
                    line-height 0.64rem
                    font-size 0.32rem
                    color #7f7f7f
      .m-exploreLook
        .module-title
          background-color #fff
          text-align center
          font-size 0.42667rem
          height 1.6rem
          line-height 1.6rem
        .content
          position relative
          display block
          color #333
          img
            width 100%
          .topicInfo
            overflow hidden
            position relative
            padding 0.32rem 0.4rem 0.61333rem
            background-color #fff
            .author-container
              margin-bottom 0.32rem
              .author
                height 0.64rem
                font-size 0.32rem
                display flex
                align-items center
                .avatar
                  width 0.64rem
                  height 0.64rem
                  margin-right 0.10666667rem
                  border-radius 50%
                  overflow hidden
                  border 1px solid #d9d9d9
                  img
                    width 100%
                    display block
                .nickname
                  color #333
                  text-overflow ellipsis
                  white-space nowrap
                  overflow hidden

      .m-explorMore
        margin 0 0.4rem 0.4rem
        .line-title
          height 1.86667rem
          position relative
          width 100%
          .inner
            font-size 0.37333rem
            color #333
            position absolute
            top 50%
            left 43%
            transform translateY(-50%)
        .wrap
          .content
            display block
            color #333
            margin-bottom 0.4rem
            .imgContainer
              display block
              padding 0.32rem
              background-color #fff
              color #333
              text-decoration none
              outline 0
              cursor pointer
              img
                width 8.56rem
                height 4.8rem
                background-color #f4f4f4
            .desc
              text-align center
              font-size (30/$rem)
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              padding-top 0.38667rem
              padding-bottom 0.37333rem
              padding-left 0.5rem
              background-color #fff
              margin-bottom 98px
</style>
