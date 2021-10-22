<template>
  <div id="homepage">
    <Header/>
    <div>
      <Home/>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";


export default {
  name: "HomePage",
  components: {
    Header,
    Home,
    Footer,
  }
}
</script>

<style scoped>

</style>