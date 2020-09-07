import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level: '第一周', //活动周数
    itemNum: 1, // 第几题
    allTime: 0,  //总共用时
    timer: '', //定时器
    itemDetail: [],
    answerid: [], //答案id
  },

  mutations: {
    changeItemDetail(info) {
      this.state.itemDetail = info;
      console.log("---sss", info)
    }
  },
  actions: {
  },
  modules: {
  }
})
