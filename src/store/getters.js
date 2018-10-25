/*vuex的getters模块*/

export default {
  getHomeTag (state) {
    if (state.home.tagList){
      return state.home.tagList.splice(0,4)
    } else {
      return []
    }

  }
}
