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

//書き直し
Vue.component('comp-child2', {
  template: '<li>{{ name }} HP.{{ hp }}\
  <button v-on:click="doAttack">攻撃する</button></li>',
  props: { id: Number, name: String, hp:Number},
  methods: {
    doAttack: function () {
      this.$emit('attack', this.id)
    }
  }
});

Vue.component('comp-child-emit', {
  template: '<button v-on:click="handleClick">イベント発火</button>',
  methods: {
    handleClick: function () {
      this.$emit('child-event')
    }
  }
});


var bus = new Vue({
  data: {
    count: 0
  }
});
Vue.component('component-b', {
  template: '<p>bus: {{ bus.count }}</p>',
  computed: {
    bus: function () {
      return bus.$data
    }
  },
  created: function () {
    bus.$on('bus-event', function () {
      this.count++
    })
  }
});
Vue.component('count-go', {
  template: '<button v-on:click="handleClick">イベント発火</button>',
  methods: {
    handleClick: function () {
      bus.$emit('bus-event')
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
    ],
    list2: [
      {id: 1, name: 'スライム', hp: 100},
      {id: 2, name: 'ゴブリン', hp: 200},
      {id: 3, name: 'ドラゴン', hp: 500}
    ]
  },

  methods: {
    //child-eventが発火した
    parentsMethod: function () {
      alert('イベントをキャッチ!')
    },

    handleAttack: function (id) {
      var item = this.list2.find(function (el) {
        return el.id === id
      })
      if(item !== undefined && item.hp > 0) item.hp -= 10
    }
  }

  // components: {
  //   //<my-component>がルートでのみ使用可能になる
  //   'my-component': myComponent
  // }
})