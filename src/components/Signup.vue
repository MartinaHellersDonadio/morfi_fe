<template>
  <div>
    <Header v-bind:show-button="false"/>

    <div class="main-section">
      <h2 class="title-form"> Before using "Morfi" please sign up to enjoy our website</h2>
      <p class="description-form">Please fill in this form to create an account.</p>
      <hr>
      <form class="input-form" method="post" @submit="signup()">
        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" v-model="email" id="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" v-model="password" id="psw" required>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" v-model="password" id="psw-repeat" required>
        <hr>

        <button type="submit" class="formbtn">Register</button>

        <p id="signin">Already have an account? <router-link to="/login">Log in</router-link></p>
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