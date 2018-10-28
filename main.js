var app = new Vue({
  el: '#app',

  data: {
    message: 'Hello Vue.js!',
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
      src: 'item1.jpg',
      width: 200,
      height: 200
    },
    radius: 50,
    ok: true,
    ng: false,
    loaded: false
  },

  methods: {
    handleClick: function (event) {
      alert(event.target)
    },
    increment: function () {
      this.count += 1
    }
  }

})