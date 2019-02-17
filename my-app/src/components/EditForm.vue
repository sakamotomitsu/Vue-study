<template>
  <div class="edit-form">
    <input type="text" :value="message" @input="doUpdate">
    <!--<input v-model="message">-->
  </div>
</template>

<script>
  export default {
    name: "EditForm",
    computed: {
      message() { return this.$store.getters.message }

      /*
      // 1つの算出プロパティに入出力をまとめるとスッキリ
      message :{
        get() { return this.$store.getters.message },
        set(value) { this.$store.dispatch('doUpdate', value) }
      }
      */
    },
    methods: {
      doUpdate(event) {
        //inputの値を持ってディスパッチ
        this.$store.dispatch('doUpdate', event.target.value)
      }
    }
  }
</script>

<style scoped>

</style>