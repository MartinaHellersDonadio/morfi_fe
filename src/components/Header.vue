<template>
  <header>
    <router-link to="/"><img id="logo" src="../assets/img/morfi_logo.png" alt="Morfi Logo"></router-link>
    <h2 id="title">{{ title }}</h2>
    <nav>
      <ul class="nav-links">
        <li><p class="links" @click="$emit('menuEvent', 'home')">{{ section1 }}</p></li>
        <li><p class="links" @click="$emit('menuEvent', 'restaurants')">{{ section2 }}</p></li>
        <li><p class="links" @click="$emit('menuEvent', 'events')">{{ section3 }}</p></li>
      </ul>
    </nav>
    <router-link to="/joinus"><a class="cta" href="#"><button class="button button1">{{ button1 }}</button></a></router-link>
    <div v-if="showButton">
      <router-link to="/login"><a class="cta" href="#"><button class="button button2">{{ button2 }}</button></a></router-link>
    </div>
    <router-link to="/signup"><a class="cta" href="#"><button class="button button3">{{ button3 }}</button></a></router-link>
  </header>
</template>


<script>
export default {
  name: "Header",
  props: {
    showButton: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      title: "Morfi",
      section1: "Home",
      section2: "Restaurants",
      section3: "Events",
      button1: "Want to join?",
      button2: "Log in",
      button3: "Sign up",
    }
  },
  methods: {},
}
</script>

<style scoped>
@import "../assets/css/Header.css";
</style>