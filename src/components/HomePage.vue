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
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Restaurants from "./Restaurants";
import Events from "./Events";

export default {
  name: "HomePage",
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