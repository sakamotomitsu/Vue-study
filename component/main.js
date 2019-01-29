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



Vue.component('data-component', {
  template: '<div class="data-component">\
              <p>名前.{{ name }} HP.{{ hp }}</p>\
              <p>名前<input v-model="localName"></p>\
              <p>HP<input size="5" v-model.number="localHp"></p>\
              </div>',
  props: {
    name: String,
    hp: Number
  },
  computed: {
    //算出プロパティのセッター&ゲッターを使ってv-modelを使用
    localName: {
      get: function () { return this.name },
      set: function (val) { this.$emit('update:name', val) }
    },
    localHp: {
      get: function () { return this.hp },
      set: function (val) { this.$emit('update:hp', val) }
    }
  }
});



// コンポーネントA
Vue.component('my-component-a', {
  template: '<div class="my-component-a">component A</div>'
});

// コンポーネントB
Vue.component('my-component-b', {
  template: '<div class="my-component-b">component B</div>'
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
    ],
    name: 'スライム',
    hp: 100,
    componentTypes: ['my-component-a', 'my-component-b'],
    current: 0
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
  },

  // components: {
  //   //<my-component>がルートでのみ使用可能になる
  //   'my-component': myComponent
  // }
  computed: {
    component: function () {
      //currentと一致するindexのコンポーネントを使用
      return this.componentTypes[this.current]
    }
  }
})
