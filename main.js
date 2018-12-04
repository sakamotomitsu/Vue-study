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
    val3: [],
    val4: '',
    val5: '',
    val6: [],
    preview: '',
    val7: 50,
    scrollY: 0,
    timer: null
  },

  created: function () {
    axios.get('list.json').then(function (response) {
      this.jsonlist = response.data
    }.bind(this)).catch(function (e) {
      console.error(e)
    })
  },

  created: function() {
    //ハンドラを登録
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function() {
    //ハンドラを解除
    window.removeEventListener('scroll', this.handleScroll)
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
    },

    handleChange: function(event) {
      var file = event.target.files[0]

      if( file && file.type.match(/^image\/(png|jpeg)$/)){
        this.preview = window.URL.createObjectURL(file)
      }
    },

    handleScroll: function() {
      if (this.timer === null){
        this.timer = setTimeout(function() {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this), 200)
      }
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

});