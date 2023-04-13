<template>
  <h3>Корзина</h3>
  <p></p>
  <p><router-link to="/">Вернуться на Главную</router-link></p>
</template>


<script>
export default {
    name: "Cart",
    emits: [],

    data() {
      return {
        cart: [],
      }
    },
};
</script>


