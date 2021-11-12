<template>
  <div>

    <Header/>

    <div class="container">
      <div class="subcontainer-reserve">
        <div class="text">
          <img class="tick-img" src="../assets/img/tick_reservation.png" alt="tick img">
          <h2 class="reserve-title"> {{ title }}</h2>
        </div>
      </div>

      <div class="text">
        <router-link to="/"><button class="back-btn"><a class="button-title">{{ button }}</a></button></router-link>
      </div>

    </div>

    <Footer/>

  </div>

</template>

<script>

import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "ReviewSuccessView",
  components: {Footer, Header},
  data () {
    return {
      title: "Thank you for submitting your review!",
      button: "Continue your experience at MORFI",
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}

.container{
  align-items: center;
  margin:auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 200px;
  margin-bottom: 200px;
}

.subcontainer-reserve {
  width: 600px;
  height: 400px;
}

.tick-img {
  height: 200px;
  width: 300px;
}

.text{
  text-align: center;
  margin: auto;
}

.reserve-title{
  font-size: 40px;
}

.reserve-paragraph{
  font-size: 30px;
  color: #24262b;
}

.back-btn{
  border-radius: 30px;
  background-color: darkcyan;
  font-size: 30px;
  margin-top: 100px;
  width: 600px;
  height: 80px;
  cursor: pointer;
  border: darkcyan;
  margin-top: 10px;
}

.back-btn:hover{
  background-color: #b1b1b1;
}

.button-title {
  color: whitesmoke;
}

.id {
  color: #E12424;
}
</style>