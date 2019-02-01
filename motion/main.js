Vue.component('my-circle', {
  template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill"/>',
  props: { fill: String }
});

var app = new Vue({
  el: '#app',
  data: {
    show: true,
    count: 0,
    order: false,
    list: [
      { id: 1, name: 'りんご', price: 100},
      { id: 2, name: 'ばなな', price: 200},
      { id: 3, name: 'いちご', price: 300}
    ],
    toggle: false
  },
  computed: {
    sortedList: function () {
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
    },

    fill: function () {
      return this.toggle ? 'lightpink' : 'skyblue'
    }
  }
});