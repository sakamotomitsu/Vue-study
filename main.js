var app = new Vue({
  el: '#app',

  data: {
    message: 'Hello Vue.js!',
    htmlmsg: 'Hello <strong>Vue.js!</strong>',
    msg: '初期メッセージ',
    show: true,
    list: ['りんご', 'ばなな', 'いちご'],
    count: 0,
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray',
    classObject: {
      child: true,
      'is-active': false
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    },
    item: {
      id: 1,
      src: 'img/testimg.jpg',
      width: 200,
      height: 200
    },
    radius: 50,
    ok: true,
    ng: false,
    loaded: false,
    name: 'キマイラ',
    monslist: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 }
    ],
    jsonlist: [],
    modmessage: 'heeeeeelo',
    val: true,
    val2: true,
    val3: []
  },

  created: function () {
    axios.get('list.json').then(function (response) {
      this.jsonlist = response.data
    }.bind(this)).catch(function (e) {
      console.error(e)
    })
  },

  methods: {
    handleClick: function (event) {
      alert(event.target)
    },

    increment: function () {
      this.count += 1
    },

    //追加ぼたんをクリックしたときのハンドラ
    doAdd: function () {
      var max = this.monslist.reduce(function (a, b) {
        return a > b.id ? a : b.id
      }, 0)
      //新しいモンスターをリスト追加
      this.monslist.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    },

    //削除ボタン
    doRemove: function (index) {
      this.monslist.splice(index, 1)
    },

    //攻撃ボタン
    doAttack: function (index) {
      this.monslist[index].hp -= 10 //HPを減らす
    },

    handler: function (comment) {
      console.log(comment)
    }
  },

  /*created: function () {
    //全ての要素にactiveプロパティを追加
    this.monslist.forEach(function (item) {
      this.$set(item, 'active', false)
      //item.active = falseではリアクティブにならない
    }, this)
  }*/

  /*mounted: function () {
    console.log(this.$el)
  }*/
  mounted: function () {
    console.log(this.$refs.hello)
  }

})