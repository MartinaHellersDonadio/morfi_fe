<template>
  <header>
    <router-link to="/"><img id="logo" src="../assets/img/morfi_logo.png" alt="Morfi Logo"></router-link>
    <h2 id="title">{{ title }}</h2>
    <nav>
      <ul class="nav-links">
        <li><router-link to="/restaurants"><a href="#">{{ section1 }}</a></router-link></li>
        <li><a href="#">{{ section2 }}</a></li>
        <li><a href="#">{{ section3 }}</a></li>
      </ul>
    </nav>
    <router-link to="/login"><a class="cta" href="#"><button class="button button1">{{ button1 }}</button></a></router-link>
    <router-link to="/signup"><a class="cta" href="#"><button class="button button2">{{ button2 }}</button></a></router-link>
  </header>
</template>



<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "Morfi"
    },
    section1: {
      type: String,
      default: "Restaurants"
    },
    section2: {
      type: String,
      default: "Events"
    },
    section3: {
      type: String,
      default: "You want to join?"
    },
    button1: {
      type: String,
      default: "Log in"
    },
    button2: {
      type: String,
      default: "Sign up"
    },
  }
}
</script>

<style scoped>
@import "../assets/css/Header.css";
</style>