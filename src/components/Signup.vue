<template>
  <div>

    <Header v-bind:show-button="false"/>

    <div class="main-section">

      <h2 class="tittle-form"> Be part of Morfi's community with just <span>ONE</span> click & completely <span id="free">FREE</span> </h2>
      <p class="description-form">{{ descriptionform }}</p>
      <hr>

      <form class="input-form" method="post" @submit="signup()">
        <label>Email</label>
        <input type="email" placeholder="Enter Email" v-model="email" id="email" required>

        <label>Password</label>
        <input type="password" placeholder="Enter Password" v-model="password" id="psw" required>

        <label>Repeat Password</label>
        <input type="password" placeholder="Repeat Password" v-model="password" id="psw-repeat" required>
        <hr>

        <button type="submit" class="formbtn">Register</button>

        <p id="signin"> {{ questionlog }} <router-link :to="{name: 'Login'}">Log in</router-link></p>
      </form>

    </div>

    <Footer/>

  </div>

</template>

<script>


import Footer from "./Footer";
import Header from "./Header";

export default {
  name: "Signup",
  components: {
    Header,
    Footer

  },
  data () {
    return {
      email: "",
      password: "",
      descriptionform: "Please fill in this form to create an account.",
      questionlog: "Already have an account?",
    }
  },
  methods: {
    signup() {
      this.$router.push("/")
    }
  },
}
</script>

<style scoped>
@import "../assets/css/Forms.css";
</style>