import products from '@/api/product.js'

export default {
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
}