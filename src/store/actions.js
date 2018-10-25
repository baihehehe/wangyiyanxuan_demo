/*vuex的actions模块*/

import {
  reqData,
  reqBanner,
  reqHome,
  reqDetail,
  reqNav
} from '../api'

import {
  RECEIVE_DATA,
  RECEIVE_BANNER,
  RECEIVE_HOME,
  RECEIVE_DETAIL,
  RECEIVE_NAV
} from './mutation-types'

export default {

  //异步获取data的action
  async getData ({commit},cb) {
    const result = await reqData()
    if (result.code === 0) {
      const data = result.data
      commit(RECEIVE_DATA,{data})
      cb && cb()
    }
  },

  //异步获取banner的action
  async getBanner ({commit},cb) {
    const result = await reqBanner()
    if (result.code === 0) {
      const banner = result.focusList
      commit(RECEIVE_BANNER,{banner})
      cb && cb()
    }
  },

  //异步获取home的action
  async getHome ({commit},cb) {
    const result = await reqHome()
    if (result.code === 0) {
      const home = result.home
      commit(RECEIVE_HOME,{home})
      cb && cb()
    }
  },

  //异步获取detail的actions
  async getDetail ({commit},cb) {
    const result = await reqDetail()
    if (result.code === 0) {
      const detail = result.detail
      commit(RECEIVE_DETAIL,{detail})
      cb && cb()
    }
  },

  //异步获取nav的actions
  async getNav ({commit},cb) {
    const result = await reqNav()
    if (result.code === 0) {
      const nav = result.nav
      commit(RECEIVE_NAV,{nav})
      cb && cb()
    }
  }

}
