//コンポーネントを定義
Vue.component('my-component', {
  template: '<p>MyComponent</p>'
});

var app = new Vue({
  el: '#app',

  components: {
    //<my-component>がルートでのみ使用可能になる
    'my-component': myComponent
  }
});