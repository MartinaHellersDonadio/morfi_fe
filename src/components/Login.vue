<template>
  <div>

    <Header/>

    <div class="main-section login">

      <h1 id="welcome-text">{{ welcometext }}</h1>
      <p class="description-form"> {{ descriptionform }}</p>
      <hr>

      <form class="input-form" novalidate @submit.prevent="login()">
          <input type="email" :class="`form-control ${errors.email ? 'is-invalid' : ''}`" placeholder="Enter Email" v-model="email" required>

          <div class="invalid-feedback">{{ errors.email }}</div>

          <input type="password" :class="`form-control ${errors.password ? 'is-invalid' : ''}`" placeholder="Enter Password" v-model="password" required>

          <div class="invalid-feedback">{{ errors.password }}</div>

          <hr>

          <button class="formbtn form-control">Log in</button>

          <p id="signin"> {{ questionlog }} <router-link :to="{name: 'Signup'}">Sign Up</router-link></p>
      </form>

    </div>

    <Footer/>

  </div>
</template>

<script>

import Header from "./Header";
import Footer from "./Footer";

import validateLog from "../assets/js/validations/validateLog";

export default {
  name: "Login",
  components: {
    Footer,
    Header,

  },
  data () {
    return {
      email: "",
      password: "",
      errors: {},
      welcometext: "¡Hey, welcome back!",
      descriptionform: "Please fill this form to log in your account",
      questionlog: "You don't have an account?",
    }
  },
  methods: {
    login() {
      let credentials = {
        email: this.email,
        password: this.password,
      };

      const { isInvalid, errors } = validateLog(credentials);

      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};
        //login code goes here
        let IsUsers = sessionStorage.users;
        IsUsers = JSON.parse(IsUsers);
        let emailIndex = IsUsers.findIndex(
            (user) => user.email === credentials.email
        );

        if(emailIndex > -1) {
          let passwordIndex = IsUsers.findIndex(
              (user) => user.password === credentials.password
          );

          if(passwordIndex > -1) {
            let activeUser = IsUsers.find(
                (user) => user.email === credentials.email
            );
            sessionStorage.setItem('activeUser', JSON.stringify(activeUser));
            this.$router.push('/');
          } else {
            this.errors.password = "Password does not match!";
          }
        } else {
          this.errors.email = "Email does not exist!";
        }
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/css/Forms.css";

</style>