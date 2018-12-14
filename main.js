var scroll = new SmoothScroll();

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
    timer: null,
    width: 800,
    height: 600,
    budget: 300,
    limit: 2,
    Tlist: [// list
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 400 },
      { id: 4, name: 'オレンジ', price: 300 },
      { id: 5, name: 'メロン', price: 500 },
    ],
    order: false,
    gitlist: [],
    current: '',
    topics: [
      { value: 'vue', name: 'Vue.js' },
      { value: 'jQuery', name: 'jQuery' }
    ],
    price: 19800,
    list: []
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
    },

    scrollTop : function () {
      scroll.animateScroll(0)
    },

    methodsData: function () {
      return Math.random()
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
  },


  computed: {
    halfWidth: {
      get: function() { return this.width / 2 },
      set: function(val) { this.width = val * 2 },

    },
    halfHeight: function () {
      return this.height / 2
    },
    //widthとheightの中心を返す
    halfPoint: function () {
      return {
        x: this.halfWidth,
        y: this.halfHeight
      }
    },

    computedData: function () {
      return Math.random()
    },

    matched: function () {
      return this.list.filter(function (el) {
        return el.price <= this.budget
      }, this)
    },
    sorted: function () {
      return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
    },
    limited: function () {
      return this.sorted.slice(0, this.limit)
    }
  },

  watch: {
    current: function (val) {
      axios.get('https://api.github.com/search/repositories', {
        params: { q: 'topic:' + val}
      }).then(function (response) {
        this.gitlist = response.data.items
      }.bind(this))
    },

    list: function () {
      console.log('通常', this.$refs.list.offsetHeight)
      this.$nextTick(function () {
        console.log('nextTick', this.$refs.list.offsetHeight)
      })
    }
  },


  filters: {
    localNum: function (val) {
      return val.toLocaleString();
    },

    filter: function (message, foo, num) {
      console.log(message, foo, num);
    },

    /* 小数点以下を第2位に丸めるフィルタ */
    round: function (val) {
      return Math.round(val * 100) / 100
    },
    /* 度からラジアンに変換するフィルタ */
    radian: function (val) {
      return val * Math.PI / 180
    }
  },


  directives: {
    focus: {
      //紐付いてる要素がDOMに挿入される時
      inserted: function (el) {
        el.focus()//要素にフォーカスを当てる
      }
    }
  }



});


/* フィルター - グローバルへの登録 */
/*Vue.filters('localNum', function (val) {
  return val.toLocaleString();
});*/