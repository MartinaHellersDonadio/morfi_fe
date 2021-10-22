<template>
  <div id="joinus-container">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "JoinUs",
  components: {
    Footer,
    Header,
  }
}
</script>

<style scoped>
@import "../assets/css/JoinUs.css"
</style>