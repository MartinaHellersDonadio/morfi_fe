<template>
  <div>

    <Header/>

    <section>
      <div class="container">
        <h3>Reservation</h3>
        <form method="post" @submit.prevent="reserve()">
          <div class = "form-row">
            <select name = "days" v-model="day">
              <option value="">Select a Day</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>

            <select name="hours" v-model="time">
              <option value="">Select Hour</option>
              <option value="12:00">12: 00</option>
              <option value="13:00">13: 00</option>
              <option value="14:00">14: 00</option>
              <option value="18:00">18: 00</option>
              <option value="20:00">20: 00</option>
              <option value="19:00">19: 00</option>
              <option value="21:00">21: 00</option>
              <option value="22:00">22: 00</option>
            </select>

            <select name="restaurant" v-model="restaurant">
              <option value="">Select a Restaurant</option>
              <option value="Bondi Stop Bar">Bondi Stop Bar</option>
              <option value="Naturaleza Sabia">Naturaleza Sabia</option>
              <option value="El Chavo">Parrila El Chavo</option>
              <option value="D'Oro Italian Bar">D'Oro Italian Bar</option>
              <option value="Punto Sushi">Punto Sushi</option>
              <option value="Boca Toro">Boca de Toro</option>
            </select>
          </div>

          <div class="form-row">
            <input type="text" placeholder="Full Name" v-model="fullName">
            <input type="text" placeholder="Phone Number" v-model="phoneNumber">
          </div>

          <div class="form-row">
            <input type="number" placeholder="How Many Persons?" min = "1" max="16" v-model="quantity">
            <input type="submit" value = "BOOK TABLE">
          </div>
        </form>
      </div>
    </section>

    <Footer/>

  </div>

</template>

<script>
import Footer from "./Footer";
import Header from "./Header";

import axios from "axios";
export default {
  name: "ReserveForm",
  components: {Footer, Header},
  data () {
    return {
      day: '',
      time: '',
      restaurant: '',
      fullName: '',
      phoneNumber: '',
      quantity: '',
    }
  },
  methods: {
    reserve() {
      axios.post("http://localhost:5000/api/v1/reservations",{
        day: this.day,
        time: this.time,
        restaurant: this.restaurant,
        full_name: this.fullName,
        phone_number: this.phoneNumber,
        quantity: this.quantity,

      })
          .then(response => {
            console.log(response)
            this.$router.push({name: "ReserveSuccess", params: {reservation_id: response.data["reservation_id"]}})
          })
          .catch(error => {
            console.log(error);
            this.$router.push({name: "CheckoutErr"})
          });
    },
  },
}
</script>

<style scoped>

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body{
  font-family: 'Montserrat', sans-serif;
}

section{
  text-align: center;
  padding: 10px 20px 10px 20px;
  margin: 200px auto;
  width: 900px;
}
.container{
  display: flow;
}
h3{
  font-size: 30px;
}
.form-row{
  display: flex;
  width: 80%;
  margin: 0 auto;

}
form select, form input{
  display: block;
  width: 90%;
  margin: 15px 12px;
  padding: 5px;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  font-weight: 300;
}
form input[type = text], form input[type = number], form input::placeholder, select{
  color: #9a9a9a;
}
form input[type = submit]{
  color: #fff;
  background: #f2745f;
  padding: 12px 0;
  border-radius: 4px;
  cursor: pointer;}
form input[type = submit]:hover{
  opacity: 0.9;
}
</style>