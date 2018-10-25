<template>
  <div>
    <div class="wrap">
      <div class="m-itemCateListHd">
        <div class="m-topSearchIpt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共9714款好物</span>
        </div>
      </div>
      <div class="m-cateNavVertWrap">
        <div class="j-cateNavWrap">
          <div class="j-cateNav">
            <div class="item" v-for="(item1,index1) in nav.categoryL1List" :key="index1" @click="getIndex(index1)" :class="{active:index === index1 }">{{item1.name}}</div>
          </div>
        </div>
      </div>

      <!--右边详情物品信息-->
      <div class="m-subCateList" v-if="nav.categoryL1List">
        <div class="banner">
          <img v-lazy="nav.categoryL1List[index].bannerUrl">
        </div>
        <div class="cateList">
          <div class="hd">
            <div class="text">
              <span>{{nav.categoryL1List[index].name}}</span>
              <span>分类</span>
            </div>
          </div>
          <div class="list">
            <div class="cateItem" v-for="(itemCate,indexCate) in nav.categoryL1List[index].subCateList" :key="indexCate">
              <div class="cateImgWrapper" >
                <img v-lazy="itemCate.wapBannerUrl" alt="">
                <div class="name">{{itemCate.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        index: 0,
      }
    },

    mounted () {
      this.$store.dispatch('getNav')
    },

    computed: {
      ...mapState(['nav'])
    },

    methods: {
      getIndex (index1) {
        this.index = index1
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .wrap
    background: #F4F4F4;
    padding-bottom: (90/$rem)
    .m-itemCateListHd
      border-bottom: 1px solid #999
      display: flex;
      height: 88px;
      position: fixed!important;
      left: 0;
      top: 0;
      z-index: 5;
      width: 100%;
      align-items: center;
      padding: (0 .4*75/$rem)
      background-color: #fff;
      .m-topSearchIpt
        padding: (.16*75/$rem) (.26667*75/$rem) (.16*75/$rem) (.2*75/$rem)
        overflow: hidden;
        position: relative;
        width: (9.7*75/$rem)
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        font-size: (.37333*75/$rem)
        background-color: #ededed;
        border-radius: (.10667*75/$rem);
        .icon
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: (.37333*75/$rem);
          height: (.37333*75/$rem);
          margin-right: (.13333*75/$rem);
        .placeholder
          color: #666;
          font-size: (.37333*75/$rem);
    .m-cateNavVertWrap
      border-right: 1px solid #999;
      position: fixed;
      top: (1.17333*75/$rem);
      left: 0;
      bottom: 0;
      z-index: 4;
      width: (2.16*75/$rem);
      background-color: #fff;
      .j-cateNavWrap
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        .j-cateNav
          height: 91%;
          padding-bottom: (1.84*75/$rem);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          .item
            width: 100%;
            height: (.66667*75/$rem);
            text-align: center;
            border: none;
            display: block;
            color: #333;
            font-size: (.37333*75/$rem);
            line-height: (.66667*75/$rem);
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            &.active
              font-size: (.48*75/$rem);
              color: #ab2b2b;
              line-height: (.66667rem);
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              border-left: 4px solid #ab2b2b;
  .m-subCateList
    height: 89%;
    background: #ffffff;
    position: absolute;
    top: 88px;
    right: 0;
    margin-left: (2.16*75/$rem)
    padding: (.4*75/$rem) (.4*75/$rem) (.28*75/$rem)
    .banner
      position: relative;
      width: 100%;
      height: 2.56rem;
      display: table;
      img
        width: 100%;
        border-radius: 4px;
    .cateList
      .hd
        height: (1.44*75/$rem)
        line-height: (1.44*75/$rem)
        text-align: center;
        font-size: (.32*75/$rem)
        color: #333;
        .text
          height: (1.44*75/$rem)
          line-height: (1.44*75/$rem)
          text-align: center;
          font-size: (.32*75/$rem)
          color: #333;
          span
            height: (1.44*75/$rem)
            line-height: (1.44*75/$rem)
            text-align: center;
            font-size: (.32*75/$rem)
            color: #333;
      .list
        .cateItem
          float: left;
          margin-bottom: 50px;
          width: (1.92*75/$rem)
          height: (1.92*75/$rem)
          margin-right: (.42*75/$rem)
          .cateImgWrapper
            img
              display: block;
              width: 100%;
              background: #fff;
          .name
            height: (75/$rem)
            font-size: (.32*75/$rem)
            color: #333;
            text-align: center;
            line-height: (-.54667*75/$rem)
</style>
