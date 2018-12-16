//コンポーネントを定義
Vue.component('my-component', {
  //テンプレート
  template: '<p>MyComponent</p>'

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

var app = new Vue({
  el: '#app',

  components: {
    //<my-component>がルートでのみ使用可能になる
    'my-component': myComponent
  }
});