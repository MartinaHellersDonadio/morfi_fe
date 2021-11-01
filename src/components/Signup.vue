<template>
  <div>

    <Header/>

    <div class="main-section">

      <h2 class="tittle-form"> Be part of Morfi's community with just <span>ONE</span> click & completely <span id="free">FREE</span> </h2>
      <p class="description-form">{{ descriptionform }}</p>
      <hr>

      <form class="input-form" novalidate @submit.prevent="signup()">


        <input type="email" :class="`form-control ${errors.email ? 'is-invalid' : ''}`" placeholder="Enter Email" v-model="email" id="email" required>

        <div class="invalid-feedback">{{ errors.email }}</div>


        <input type="password"  :class="`form-control $(password.email ? 'is-invalid' : ''}`" placeholder="Enter Password" v-model="password" id="psw" required>

        <div class="invalid-feedback">{{ errors.password }}</div>


        <input type="password"  :class="`form-control $(password2.email ? 'is-invalid' : ''}`" placeholder="Repeat Password" v-model="password2" id="psw-repeat" required>

        <div class="invalid-feedback">{{ errors.password2 }}</div>
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

import validateSignUp from "../assets/js/validations/validateSignUp";
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
      password2: "",
      errors: {},
      users: [],
      descriptionform: "Please fill in this form to create an account.",
      questionlog: "Already have an account?",
    }
  },
  methods: {
    signup() {
      let user = {
        email: this.email,
        password: this.password,
        password2: this.password2,
      };
      const {isInvalid, errors} = validateSignUp(user);

      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {}
        //store user in sessionStorage
        if(sessionStorage.users) {
          let IsUsers = sessionStorage.users;
          this.users = JSON.parse(IsUsers);
        }
        this.users.push(user);
        sessionStorage.setItem('users', JSON.stringify(this.users));
        this.email = "";
        this.password = "";
        this.password2 = "";
        this.$router.push('/login');
      }
    },
  },
}
</script>

<style scoped>
@import "../assets/css/Forms.css";
</style>