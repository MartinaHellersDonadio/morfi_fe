<template>
  <div>

    <Header/>

    <div class="container">
      <div class="subcontainer-reserve">
        <div class="text">
          <img class="tick-img" src="../assets/img/tick_reservation.png" alt="tick img">
          <h2 class="reserve-title"> {{ title }}</h2>
        </div>

        <div class="text">
          <p class="reserve-paragraph"> {{ subtitle }}</p>
          <p class="reserve-paragraph"> Reservation id: </p>
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
  name: "ReservationSuccessView",
  components: {Footer, Header},
  data () {
    return {
      title: "Awesome!",
      subtitle: "You successfully book your table!",
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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
  font-size: 60px;
}

.reserve-paragraph{
  font-size: 30px;
  font-style: italic;
  color: #24262b;
}

.back-btn{
  border-radius: 30px;
  background-color: #E12424;
  font-size: 30px;
  margin-top: 100px;
  width: 600px;
  height: 80px;
  cursor: pointer;
  border: #E12424;
  margin-top: 10px;
}

.back-btn:hover{
  background-color: #b1b1b1;
}

.button-title {
  color: whitesmoke;
}
</style>