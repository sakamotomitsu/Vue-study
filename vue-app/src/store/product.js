import Vue from 'vue'
import Vuex from 'vuex'
import products from '@/api/product.js'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    detail: {}
  },
  getters: {
    detail: state => state.detail
  },
  mutations: {
    set(state, { detail }) { state.detail = detail },
    clean(state) { state.detail = {} }
  },
  action: {
    load({ commit }, id){
      products.asyncfind(id, detail => {
        commit('set', { detail })
      })
    },
    destroy({ commit }){
      commit('clear')
    }
  }
})