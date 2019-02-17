<template>
  <div class="edit-form">
    <input type="text" :value="message" @input="doUpdate">
  </div>
</template>

<script>
  export default {
    name: "EditForm",
    computed: {
      message(event) {
        store.dispatch('doUpdata', event.target.value)
      }
    }
  }
</script>

<style scoped>

</style>