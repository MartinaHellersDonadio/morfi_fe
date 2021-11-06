<template>
  <div>
    <section>
      <div class="container">
        <h3>Reservation</h3>
        <form>
          <div class = "form-row">
            <select name = "days">
              <option value="day-select">Select Day</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </select>

            <select name="hours">
              <option value="hour-select">Select Hour</option>
              <option value="10">12: 00</option>
              <option value="10">13: 00</option>
              <option value="10">14: 00</option>
              <option value="10">18: 00</option>
              <option value="10">20: 00</option>
              <option value="10">19: 00</option>
              <option value="10">21: 00</option>
              <option value="10">22: 00</option>
            </select>

            <select name="restaurant">
              <option value="restaurant-select">Select a Restaurant</option>
              <option value="bondi">Bondi Stop Bar</option>
              <option value="sabia">Naturaleza Sabia</option>
              <option value="elchavo">Parrila El Chavo</option>
              <option value="d'oro">D'Oro Italian Bar</option>
              <option value="sushi">Punto Sushi</option>
              <option value="bocatoro">Boca de Toro</option>
            </select>
          </div>

          <div class="form-row">
            <input type="text" placeholder="Full Name">
            <input type="text" placeholder="Phone Number">
          </div>

          <div class="form-row">
            <input type="number" placeholder="How Many Persons?" min = "1" max="16">
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
export default {
  name: "ReserveForm",
  components: {Footer}
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