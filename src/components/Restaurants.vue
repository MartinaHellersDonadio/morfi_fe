<template>
  <div class="main-container">
    <h1>Choose your favorite place!</h1>
    <RestaurantProduct v-for="(product, index) in products" v-bind:key="index"
                       v-bind:category="product.category"
                       v-bind:name="product.name"
                       v-bind:image="product.image"
                       v-bind:location="product.location"
                       v-bind:price="product.price"
                       v-bind:discount="product.discount"
    />
  </div>
</template>

<script>

import RestaurantProduct from "./RestaurantProduct";
import {restaurantProducts} from "../assets/js/products";

export default {
  name: "Restaurants",
  components: {
    RestaurantProduct
  },
  data () {
    return {
      products: restaurantProducts,
    }
  },

}
</script>

<style scoped>
.main-container {
  margin: auto;
  margin-bottom: 80px;
  text-align: center;
}

h1 {
  color: #E12424;
  margin-top: 200px;
  text-align: center;
  font-size: 60px;
  margin-bottom: 50px;
}
</style>