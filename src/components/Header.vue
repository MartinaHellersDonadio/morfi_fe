<template>
  <header>

    <router-link to="/"><img id="logo" src="../assets/img/morfi_logo.png" alt="Morfi Logo"></router-link>
    <h2 id="title">{{ title }}</h2>

    <nav>
      <ul class="nav-links">
        <router-link to="/"><li><p class="links">{{ section1 }}</p></li></router-link>
        <router-link to="/restaurants"><li><p class="links">{{ section2 }}</p></li></router-link>
        <router-link to="/events"><li><p class="links">{{ section3 }}</p></li></router-link>
      </ul>
    </nav>

    <div v-if="showButton1">
      <router-link :to="{name: 'Joinus'}"><a class="cta"><button class="button button1">{{ button1 }}</button></a></router-link>
    </div>

    <div v-if="!user">
      <router-link :to="{name: 'Login'}"><a class="cta" ><button class="button button2">{{ button2 }}</button></a></router-link>
    </div>

    <div v-if="!user">
      <router-link :to="{name: 'Signup'}"><a class="cta"><button class="button button3">{{ button3 }}</button></a></router-link>
    </div>

    <div class="logout" v-if="user">
      <div class="logout-subsection">
        <router-link to="/profile"><img id="logout-id" src="../assets/img/login_icon.png" alt="login icon"></router-link>
      </div>

      <div class="logout-subsection">
        <a class="cta" href="" @click.prevent="logout()" @click="alert()"><button class="button4">{{ button4 }}</button></a>
      </div>

    </div>


  </header>
</template>


<script>
export default {
  name: "Header",
  props: {
    showButton1: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      title: "Morfi",
      section1: "Home",
      section2: "Restaurants",
      section3: "Events",
      button1: "Do you have a restaurant?",
      button2: "Log in",
      button3: "Sign up",
      user: "",
      button4: "Log out",
    };
  },
  mounted() {
    if(sessionStorage.activeUser) {
      let activeUser = sessionStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
  },
  methods: {
    logout(){
      sessionStorage.removeItem('activeUser');
      this.$router.push('/');
      window.location.reload();
    },
    alert() {
      alert("You have successfully logged out of your account!");
    }
  },
};
</script>

<style scoped>
@import "../assets/css/Header.css";
</style>