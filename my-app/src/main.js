// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//import Vue from 'vue'
//import App from './App'


import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

// プラグインとして登録
Vue.use(Vuex)


Vue.config.productionTip = false

/*
var windowPlugin = {
  install: function (Vue) {
    // プラグインデータ用にVueインスタンスを利用する
    var store = new Vue({
      data: { scrollY: 0 }
    })
    // ウィンドウのスクロールイベントをハンドル
    var timer = null
    window.addEventListener('scroll', function () {
      if(timer === null){
        timer = setTimeout(function () {
          // 200ms間隔でscrollYプロパティに代入
          store.scrollY = window.scrollY
          clearTimeout(timer)
          timer = null
        }, 200)
      }
    })

    //インスタンスプロパティ登録
    Vue.prototype.$window = store.$data
  }
}
Vue.use(windowPlugin)
*/
/*   コンポーネントからは次の用に使用できます

Vue.component('my-component', {
  template: '<div>{{ scrollY }}</div>',
  computed: {
    scrollY: function () {
      return this.$window.scrollY
    }
  }
})
*/





/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})*/


/* ランタイム限定 */
import store from './store.js'
new Vue({
  el: '#app',
  store, // storeを登録
  render: h => h(App)
})
