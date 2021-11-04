<template>
  <div id="homepage">

    <div id="home-container">
      <Header v-on:menuEvent="showMenuOption($event)"/>
    </div>

    <div>
      <Home v-if="menu.home" v-on:menuEvent="showMenuOption($event)"/>
      <Restaurants v-if="menu.restaurants"/>
      <Events v-if="menu.events"/>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Restaurants from "../components/Restaurants";
import Events from "../components/Events";

export default {
  name: "HomeView",
  components: {
    Events,
    Restaurants,
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