import Vue from 'vue'
import VueRouter from 'vue-router'

// ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue' //商品詳細
import ProductList from '@/views/ProductList.vue' //商品一覧

//productの子ルート
import ProductHome from '@/views/Product/Home.vue'
import ProductReview from '@/views/Product/Review.vue'
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue'

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
      component: Product,
      props: route => ({ id: Number(route.params.id) }),
      children: [
        { //商品詳細
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        { //商品のレビュー一覧
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        { //商品のレビュー詳細
          name: 'product-detail',
          path: 'review/:rid', //親ルートと被らないパラメータを指定
          component: ProductReviewDetail
        }
      ]
    }
  ]
})

export default router