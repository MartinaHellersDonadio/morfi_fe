<template>
  <div id="principal-container">
    <div>
      <h1 id="main-title">{{ title }}</h1>
    </div>
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1siY21nn9fB8T2CBk_xLZbc6jgzpV7ITz"></iframe>
    <div id="events-container">
      <MenuProduct v-for="(product, index) in products" v-bind:key="index"
                    v-bind:name="product.name"
                    v-bind:image="product.image"
                    v-bind:description="product.description"
                    v-bind:time="product.time"
                    v-bind:location="product.location"
                    v-bind:price="product.price"
      />
    </div>
  </div>
</template>

<script>


import MenuProduct from "./MenuProduct";
import {eventsProducts} from "../assets/js/products";


export default {
  name: "Events",
  components: {MenuProduct},
  data () {
    return {
      title: "Eventos Gastronómicos en Buenos Aires",
      products: eventsProducts,
    }
  }
}
</script>

<style scoped>

#main-title {
  text-align: center;
  font-family: Montserrat;
  font-size: 60px;
  color: darkcyan;
  margin-bottom: 50px;
  margin: auto;
  text-decoration: underline;

}

#principal-container {
  padding-top: 200px;
  text-align: center;
  margin-bottom: 200px;

}

iframe {
  width: 1300px;
  height: 480px;
  margin-top: 100px;
}

</style>