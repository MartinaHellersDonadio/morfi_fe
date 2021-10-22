<template>
  <div id="signup-container">
    <Header/>

    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Signup",
  components: {
    Footer,
    Header,
  }
}
</script>

<style scoped>
@import "../assets/css/Signup.css";
</style>