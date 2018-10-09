import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  title: "My target",
  targets: [
    {
      name: "Học lập trình",
    },
    {
      name: "Học tiếng anh",
    }
  ],
  typeTarget: 'month'
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
