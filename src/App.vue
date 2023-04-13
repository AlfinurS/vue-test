<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Cart from './components/Cart.vue'

export default {
    name: "App",
    emits: [],
    components: { 
      HelloWorld,
      Cart
    },

    data() {
      return {
        cart: [],
      }
    },
}
</script>

