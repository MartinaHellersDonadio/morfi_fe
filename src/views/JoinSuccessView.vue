<template>
  <div>

    <Header v-bind:show-button1="false"/>

    <div class="success-container">

      <div class="success-section">
        <img src="../assets/img/mail_icon.png" alt="mail icon">
      </div>

      <div class="success-container">
        <h1 class="success-text">Thank you <span id="title-join-success">{{ this.$route.params["clientName"]}}</span>!</h1>
        <h2 class="success-text">We received your information correctly and we will be contacting you via email in the next few hours</h2>
        <p></p>
      </div>

    </div>

    <Footer/>

  </div>
</template>

<script>

import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "JoinSuccessView",
  components: {Footer, Header}
}

</script>

<style scoped>
.success-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 800px;
  margin-bottom: 90px;

}

.success-section {
  display: flex;
  flex-wrap: wrap;
}

img{
  margin: auto;
  height: 280px;
  margin-top: 220px;
}

.success-text {
  margin: auto;
  text-align: center;
}

h1 {
  color: #E12424;
  font-size: 60px;
}

h2 {
  font-size: 30px;
  font-weight: lighter;
}

#title-join-success {
  font-family: Montserrat;
  color: orangered;
  text-transform: capitalize;

}
</style>