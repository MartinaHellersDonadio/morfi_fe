<template>
  <div class="general-container">

    <div class="subcontainer">
      <img class="banner" src="../assets/img/banner_left.png" alt="banner left">
    </div>

    <div class="subcontainer">
      <div class="join-main-section">

        <h2 class="title-form"> {{ titleform }}</h2>
        <p class="description-form">{{ descriptionform }}</p>
        <hr>

        <form class="input-form" method="post" @submit.prevent="join()" @click.native="scrollToTop">

          <label><b>Owners Name</b></label>
          <input type="text"  placeholder="Enter your name" v-model="ownerName" id="ownersName" tabindex="1" required>

          <label><b>Email</b></label>
          <input type="text" placeholder="Enter Email" v-model="email" required>

          <label><b>Restaurant Name</b></label>
          <input type="text"  placeholder="Enter your Restaurant Name" v-model="restaurantName" id="restName" tabindex="2" required>

          <label><b>What type of restaurant do you have?</b></label>
          <input type="text"  name="typeRestaurant" id="heading" required tabindex="3">

          <label><b>Location</b></label>
          <input type="text"  placeholder="Enter the address" v-model="address" id="location" required tabindex="4">

          <br>

          <label><b>Open</b></label>
          <input type="time"  name="openTime" id="openTime" required tabindex="5" v-model="openTime">

          <label><b>Close</b></label>
          <input type="time" name="closeTime" id="closeTime" required tabindex="6" v-model="closeTime">
          <br>

          <textarea id="description" name="description" class="description" rows="4" cols="50" required maxlength="240" v-model="description"> Write a brief description of your restaurant and your gastronmic proposal</textarea>

          <button type="submit" class="formbtn">Submit</button>
        </form>

      </div>

      <div>
        <router-link :to="{name: 'Home'}"><button id="button-back">Go back</button></router-link>
      </div>
    </div>

    <div class="subcontainer">
      <img class="banner" src="../assets/img/banner_right.png" alt="banner right">
    </div>

  </div>

</template>

<script>

import axios from "axios";

export default {
  name: "JoinUs",
  components: {
  },
  data () {
    return {
      ownerName: "",
      email: "",
      restaurantName: "",
      address: "",
      openTime: "",
      closeTime: "",
      description: "",
      titleform: "What are you waiting to join Morfi?",
      descriptionform: "Please fill the form to let us know if you want to be part",
    }
  },
  methods: {
    join() {
      axios.post("http://localhost:5000/api/v1/requestjoin",{
        owner_name: this.ownerName,
        email: this.email,
        restaurant_name: this.restaurantName,
        address: this.address,
        open_time: this.openTime,
        close_time: this.closeTime,
        description: this.description,
      })
      .then(response => {
        console.log(response)
        this.$router.push({name: "JoinSuccess", params: {clientName: this.ownerName}})
      })
      .catch(error => {
        console.log(error);
        this.$router.push({name: "ServerError"})
      });
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
  },
}
</script>


<style scoped>
@import "../assets/css/JoinUs.css";
</style>

