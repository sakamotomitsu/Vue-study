//コンポーネント間の通信
//Vue.component('my-component', {
//  template: '<p><comp-child></comp-child></p>'
//})
// comp-child は my-componen の子コンポーネント


//コンポーネントを定義
Vue.component('my-component', {
  //テンプレート
  template: '<p>MyComponent</p>',

  //データはオブジェクトを返す関数にする
  data: function () {
    return{
      message: 'Hello Vue.js'
    }
  },
  methods: {
    //メソッドや算出プロパティ、ウォッチャなどの定義方法は
    //ルートコンストラクタのオプションと同じ
  }
});


// Vue.component('comp-child', {
//   template: '<li>{{ name }} HP.{{ hp }}</li>',
//   props: ['name', 'hp']
// });
Vue.component('comp-child', {
  template: '<li>{{ name }} HP.{{ hp }}\
  <button v-on:click="doAttack">攻撃する</button></li>',
  // props: ['name', 'hp'],
  //型を指定する
  props: {
    name: String,
    hp: Number
  },
  methods: {
    doAttack: function () {
      //勝手に攻撃
      this.hp -= 10
    }
  }
});


var app = new Vue({
  el: '#app',

  data: {
    list: [
      {id: 1, name: 'スライム', hp: 100},
      {id: 2, name: 'ゴブリン', hp: 200},
      {id: 3, name: 'ドラゴン', hp: 500}
    ]
  }

  // components: {
  //   //<my-component>がルートでのみ使用可能になる
  //   'my-component': myComponent
  // }
})