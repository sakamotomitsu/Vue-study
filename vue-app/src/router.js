import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'

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
      path: '/product',
      component: Product
    }
  ]
})

export default router