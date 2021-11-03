<template>
  <div id="principal-container">
    <div>
      <h1 id="main-title">{{ title }}</h1>
    </div>
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1siY21nn9fB8T2CBk_xLZbc6jgzpV7ITz"></iframe>
    <div>
      <MenuProduct v-for="(product, index) in products" v-bind:key="index"
                    v-bind:name="product.name"
                    v-bind:image="product.image"
                    v-bind:description="product.description"
                    v-bind:time="product.time"
                    v-bind:location="product.location"
                    v-bind:price="product.price"
      />
    </div>
    <div id="events-bottom-container">
      <div class="events-bottom-subcontainer">
        <h2>{{ titleupdates }}</h2>
      </div>
      <div class="events-bottom-subcontainer">
        <img id="arrow-events" src="../assets/img/arrow_events.png" alt="arrow down">
      </div>
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
      title: "Get to know the most important Gastronomic Events in Buenos Aires!",
      titleupdates: "Keep updated before anyone else about the next events to come!",
      products: eventsProducts,
    }
  }
}
</script>

<style scoped>

#main-title {
  text-align: center;
  font-family: Montserrat;
  font-size: 50px;
  color: darkcyan;
  margin: auto;

}

#principal-container {
  padding-top: 200px;
  text-align: center;
  margin-bottom: 80px;

}

iframe {
  width: 900px;
  height: 385px;
  margin-top: 15px;
}

#events-bottom-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
}

.events-bottom-subcontainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  display: inline-block;
  width: 500px;
}

h2 {
  color: #E12424;
  text-align: center;
  font-size: 50px;
}

#arrow-events {
  margin-right: 250px;
}
</style>

