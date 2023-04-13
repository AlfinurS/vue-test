<template>
   
    <h2>Главная страница</h2>
    <p><router-link to="/cart">Перейти в Корзину</router-link></p>
</template>

<script>

export default {
    name: "HelloWorld",
    emits: [],

    data() {
      return {
        cart: [],
      }
    },
};
</script>


 