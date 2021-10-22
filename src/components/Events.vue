<template>
  <div id="events-container">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Events",
  components: {
    Footer,
    Header,
  }
}
</script>

<style scoped>
@import "../assets/css/Events.css";
</style>