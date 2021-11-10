<template>
  <body>
  <div class="review-container">

    <form method="post" @submit.prevent="review()">
      <div>
        <h2>
          Your overall rating of this restaurant
        </h2>
        <p class="stars-row">
          <input type="radio" id="1star" name="stars" value="5stars" v-model="picked"/>
          <label class="star-label" for="1star"></label>
          <input type="radio" id="2star" name="stars" value="4stars" v-model="picked"/>
          <label class="star-label" for="2star"></label>
          <input type="radio" id="3star" name="stars" value="3stars" v-model="picked"/>
          <label class="star-label" for="3star"></label>
          <input type="radio" id="4star" name="stars" value="2stars" v-model="picked"/>
          <label class="star-label" for="4star"></label>
          <input type="radio" id="5star" name="stars" value="1stars" v-model="picked"/>
          <label class="star-label" for="5star"></label>
        </p>
      </div>
      <h2>Your review</h2>

      <textarea class="textarea" type="text" cols="20" rows="4" v-model="comment" placeholder="Tell people about your experience: your meal, atmosphere, service?"></textarea>

      <h2>Date of visit</h2>

      <div class="section-bottom">
        <input type="date" id="date" name="review-date" v-model="date"/>

        <button type="submit" class="button">Submit my review</button>

      </div>

    </form>
  </div>
  </body>
</template>

<script>
import axios from "axios";

import shops from "../assets/js/shops";

export default {
  name: "ReviewForm",
  data () {
    return {
      picked: "",
      comment: "",
      date: "",
      shop_id: shops.restaurantProducts["shop_id"],
    }
  },
  methods: {
    review() {
      const active_user = JSON.parse(sessionStorage.getItem('activeUser'))
      axios.post( "http://localhost:5000/api/v1/reviews", {
        user_name: active_user.username,
        stars: this.picked,
        comment: this.comment,
        date: this.date,
        shop_id: shops.restaurantProducts["shop_id"]
      })
          .then(response => {
            console.log(response)
            this.$router.push({name: "JoinSuccess"})
          })
          .catch(error => {
            console.log(error);
            this.$router.push({name: "ServerError"})
          });
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: content-box;
}

.review-container {
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
}

h1 {
  font-weight: bold;
  font-size: 32px;
  text-align: center;
}

h2 {
  font-weight: 500;
  font-size: 16px;
  margin-top: 40px;
  text-align: center;
}


.stars-row {
  width: 200px;
  display: flex;
  flex-direction: row;
  direction: rtl;
  unicode-bidi: bidi-override;
  margin: auto;
}

.star-label:hover {
  background-image: url('../assets/img/filled-star.png');
}

.star-label:hover ~ label {
  background-image: url('../assets/img/filled-star.png');
}

.star-label {
  background-image: url('../assets/img/star.png');
  width: 40px;
  height: 40px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

input[type="radio"]:checked ~ .star-label {
  background-image: url('../assets/img/filled-star.png');
}

input[type="radio"] {
  display: none;
}

input[type="date"] {
  width: 160px;
  margin-top: 20px;
  margin: auto;
  margin-bottom: 80px;

}

.textarea {
  width: 300px;
  height: 200px;
  margin: auto;
}

.button {
  width: 150px;
  height: 30px;
  background-color: #252422;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  margin: auto;
}

.section-bottom {
  display: flex;
  flex-direction: column;
}

</style>