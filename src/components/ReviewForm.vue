<template>
  <body>
  <div class="review-container">

    <form method="post" @submit.prevent="review()">
      <div>
        <h2 class="text-review">
          Your overall rating of this restaurant from 1 - 10
        </h2>
        <input type="number" class="number-scale" min = "1" max="10" v-model="scale" required>
      </div>
      <h2 class="text-review">Your review</h2>

      <textarea class="textarea" type="text" cols="20" rows="4" v-model="comment" placeholder="Tell people about your experience: your meal, atmosphere, service?"></textarea>

      <h2 class="text-review">Date of visit</h2>

      <div class="section-bottom">
        <input type="date" id="date" name="review-date" v-model="date" required/>

        <button type="submit" class="button">Submit my review</button>

      </div>

    </form>
  </div>
  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "ReviewForm",
  data () {
    return {
      scale: "",
      comment: "",
      date: "",
      restaurant_id: this.$route.params["shop_id"],
    }
  },
  methods: {
    review() {
      const active_user = JSON.parse(sessionStorage.getItem('activeUser'))
      const body = {
        user_name: active_user.username,
        scale: this.scale,
        comment: this.comment,
        date: this.date,
        shop_id: this.restaurant_id,
      };
      console.log(this.$route.params)
      console.log(body)
      axios.post("http://localhost:5000/api/v1/reviews", body)
          .then(response => {
            console.log(response)
            this.$router.push({name: "ReviewSuccess"})
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 550px;
  height: 680px;
}


.text-review {
  font-weight: 500;
  font-size: 16px;
  margin-top: 40px;
  text-align: center;
  color: #E12424;
  font-weight: bolder;
}

input[type="number"]{
  margin: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

.number-scale {
  width: 50px;
  height: 50px;
  text-align: center;

}

input[type="text"]{
  margin: auto;
}

input[type="date"] {
  width: 160px;
  margin-top: 30px;
  margin: auto;
  margin-bottom: 80px;
  display: block;

}

.textarea {
  width: 300px;
  height: 200px;
  margin: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
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

.button:hover {
  background-color: #E12424;
  border-color: #E12424;

}

.section-bottom {
  display: flex;
  flex-direction: column;
}

</style>