<template>
  <div>

    <Header/>

    <div class="main-section login">

      <h1 id="welcome-text">{{ welcometext }}</h1>
      <p class="description-form"> {{ descriptionform }}</p>
      <hr>

      <form class="input-form" novalidate @submit.prevent="login()">
          <input type="text" :class="`form-control ${errors.username ? 'is-invalid' : ''}`" placeholder="Enter Username" v-model="username" required>

          <div class="invalid-feedback">{{ errors.username }}</div>

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
      username: "",
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
        username: this.username,
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
        let usernameIndex = IsUsers.findIndex(
            (user) => user.username === credentials.username
        );

        if(usernameIndex > -1) {
          let passwordIndex = IsUsers.findIndex(
              (user) => user.password === credentials.password
          );

          if(passwordIndex > -1) {
            let activeUser = IsUsers.find(
                (user) => user.username === credentials.username
            );
            sessionStorage.setItem('activeUser', JSON.stringify(activeUser));
            this.$router.push('/');
          } else {
            this.errors.password = "Password does not match!";
          }
        } else {
          this.errors.username = "Username does not exist!";
        }
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/css/Forms.css";

</style>