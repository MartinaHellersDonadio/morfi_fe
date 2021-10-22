<template>
  <div id="restaurants-container">
    <Header/>
    <div>
      <h1>ACA VA EL CONTENIDO</h1>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Restaurants",
  components: {
    Footer,
    Header,
  }
}
</script>

<style scoped>
@import "../assets/css/Restaurants.css";
</style>