<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">
    <HelloWorld/>
    -->
    <p>{{ message }}</p>
    <EditForm/>
  </div>
</template>

<script>
/*
import HelloWorld from './components/HelloWorld'

export default {
name: 'App',
components: {
EditForm,
HelloWorld
},
created() {
//ストアの状態を取得
console.log(this.$store.state.count)

//ストアの状態を更新
this.$store.commit('increment')
}
}
*/

//子コンポーネントを読み込む
import EditForm from "@/components/EditForm";
export default {
  name: 'app',
  components: { EditForm },
  computed: {
    //ローカルのmessageとストアのmessageを同期
    message() { return this.$store.getters.message }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
