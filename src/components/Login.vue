<template>
<div id="login-container">
  <Header/>
  <Footer/>
</div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Login",
  components: {
    Footer,
    Header,
  }
}
</script>

<style scoped>
@import "../assets/css/Login.css"
</style>