<template>
  <div>
    <Header v-bind:show-button="false"/>
    <div class="main-section login">
      <h1 id="welcome-text">{{ welcometext }}</h1>
      <p class="description-form"> {{ descriptionform }}</p>
      <hr>
      <form class="input-form" method="post" @submit="login()">
          <label>Email</label>
          <input type="email" placeholder="Enter Email" v-model="email" required>

          <label>Password</label>
          <input type="password" placeholder="Enter Password" v-model="password" required>
          <hr>

          <button type="submit" class="formbtn">Log in</button>

          <p id="signin"> {{ questionlog }} <router-link to="/signup">Sign Up</router-link></p>
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
      welcometext: "¡Hey, welcome back!",
      descriptionform: "Please fill this form to log in your account",
      email: "",
      password: "",
      questionlog: "You don't have an account?",

    }
  },
  methods: {
    login() {
      this.$router.push("/")
    }
  },
}
</script>

<style scoped>
@import "../assets/css/Forms.css";

</style>