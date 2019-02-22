<template>
  <div class="product">
    <h1>商品情報</h1>
    <p>このページは ID.{{ id }}の詳細を表示する</p>
  </div>
</template>

<script>
  export default {
    name: "Product",
    props: { id: Number }
  }
</script>

<style scoped>

</style>