<template>
  <div id="homepage">

    <div id="home-container">
      <Header v-on:menuEvent="showMenuOption($event)"/>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

export default {
  name: "HomeView",
  components: {
    Header,
    Home,
    Footer,
  },
  data () {
    return {
      menu: {
        activeOption: "home",
        home: true,
        restaurants: false,
        events: false,
      }
    }
  },
  methods: {
    showMenuOption(option) {
      let oldOption = this.menu.activeOption;
      this.menu.activeOption = option;
      this.menu[oldOption] = false;
      this.menu[this.menu.activeOption] = true;
    }
  },
}
</script>

<style scoped>
</style>