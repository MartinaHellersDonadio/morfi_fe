<template>
  <div>
    <Header v-bind:show-button="false"/>
    <div class="main-section login">
      <h2 class="title-form"> {{ titleform }}</h2>
      <p class="description-form"> {{ descriptionform }}</p>
      <hr>
      <form class="input-form">
          <label>Email</label>
          <input type="text" placeholder="Enter Email" v-model="email" required>

          <label>Password</label>
          <input type="password" placeholder="Enter Password" v-model="password" required>
          <hr>

          <button type="submit" class="formbtn">Log in</button>

          <p id="signin"> {{ questionlog }} <a href="">Sign Up</a></p>
      </form>
    </div>
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

  },
  data () {
    return {
      titleform: "If you have an account please Sign In",
      descriptionform: "Please fill this form to log in your account",
      email: "",
      password: "",
      questionlog: "You don't have an account?",

    }
  },
}
</script>

<style scoped>
@import "../assets/css/Forms.css"
</style>