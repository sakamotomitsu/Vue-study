import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'

Vue.use(VueRouter)

// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode: 'history',
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'product',
      path: '/product',// IDがついてないときはリストを表示
      component: ProductList
    },
    {
      path: '/product/:id(\\d+)', // :id がパラメータ 何が入ってもOK (\\d+)数字のみマッチ
      component: Product
    }
  ]
})

export default router