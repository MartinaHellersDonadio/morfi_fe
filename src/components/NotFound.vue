<template>
  <div>
    <Header/>
    <div class="subcontainer">
      <h1 id="notfound">{{ phrase1 }}<br><span>{{ phrase2 }}</span> {{ phrase3 }}</h1>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "NotFound",
  components: {
    Footer,
    Header,
  },
  data () {
    return {
      phrase1: "Oops,",
      phrase2: "nothing",
      phrase3: "here...",
    }
  }
}
</script>

<style scoped>
@import "../assets/css/NotFound.css"
</style>