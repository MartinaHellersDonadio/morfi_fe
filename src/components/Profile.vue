<template>
  <div>
    <Header/>

    <div class="profile-container">
      <h1 class="title-profile">My reservations</h1>

      <table>
        <thead>
        <tr>
          <th>RESTAURANT</th>
          <th>DAY</th>
          <th>TIME</th>
          <th>QUANTITY</th>
          <th>RESERVATION ID</th>
          <th>CANCEL</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(reservation, index) in reservation" v-bind:key="index">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>CANCEL</td>
        </tr>
        </tbody>
      </table>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";


export default {
  name: "Profile",
  components: {Footer, Header},

}

</script>

<style scoped>
@import "../assets/css/Profile.css";
</style>