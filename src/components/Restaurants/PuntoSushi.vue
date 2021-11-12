<template>
  <div>
    <Header/>

    <div class="general-intro">

      <div class="sub-intro">

        <div class="intro-container">

          <p id="category-resto">{{ sushirestaurant["category"] }}</p>
          <h1 id="title-resto">{{ sushirestaurant["name"] }}</h1>
          <div class="location-container">
            <div class="location-subcontainer">
              <p id="location-resto">{{ sushirestaurant["location"] }}</p>

              <div class="location-subcontainer">
                <a href="https://goo.gl/maps/7PhbN8ApNPRmfeDF9">
                  <p id="view-map">{{ mapa }}</p>
                </a>
              </div>

            </div>
          </div>

          <div class="clasificacion">
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star" >★</p>
          </div>

        </div>
      </div>

      <div class="sub-intro">
        <div v-if="!user">
          <router-link :to="{name: 'Signup'}" @click.native="scrollToTop"><button class="reserve-button">{{ button1 }}</button></router-link>
        </div>

        <div v-if="user">
          <a class="cta" href="" @click.prevent="reserve()"><button class="reserve-button">{{ button1 }}</button></a>
        </div>
      </div>

    </div>


    <div class="img-container">
      <div class="subcontainer">
        <img class="image-resto" src="../../assets/img/products/punto_sushi.jpg" alt="bondi menu">
      </div>

      <div class="subcontainer">
        <img class="image-resto" src="../../assets/img/products/punto_sushi2.jpg" alt="bondi location">
      </div>

      <div class="subcontainer">
        <img class="image-resto" src="../../assets/img/products/punto_sushi3.webp" alt="bondi menu">
      </div>
    </div>

    <div class="details-container">
      <div class="details-subcontainer">
        <h2 class="details-title">Details</h2>
        <h4 class="details-subtitle">Price range</h4>
        <p class="info">{{ sushirestaurant["price"] }} </p>
        <h4 class="details-subtitle">Cuisine</h4>
        <p class="info">{{ sushirestaurant["cuisine"] }}</p>
        <h4 class="details-subtitle">Special Diets</h4>
        <p class="info">{{ sushirestaurant["special"] }}</p>
        <img class="qr-image" src="../../assets/img/products/qr_sushi.png" alt="menu qr suhi point">
      </div>

      <div class="details-subcontainer">
        <h2 class="details-title">Ratings</h2>
        <h4 class="details-subtitle">Food</h4>
        <div class="clasificacion">
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle" >●</p>
        </div>
        <h4 class="details-subtitle">Service</h4>
        <div class="clasificacion">
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
        </div>
      </div>

      <div class="details-subcontainer">
        <h2 class="details-title">Opening Times</h2>
        <p class="info">{{ sushirestaurant["time"] }}</p>
        <h2 class="details-title">Public transport</h2>
        <p class="transport">{{ sushirestaurant["transport"]}}</p>
      </div>
    </div>

    <div class="general-intro comments">
      <div class="sub-intro">
        <h2 id="title-review"> | Comments & Reviews</h2>
      </div>
      <div>

      </div>
      <div class="sub-intro">
        <div v-if="!user">
          <router-link :to="{name: 'Signup'}" @click.native="scrollToTop"><button class="review-button">{{ button2 }}</button></router-link>
        </div>

        <div v-if="user">
          <a class="cta" href="" @click.prevent="review()"><button class="review-button">{{ button2 }}</button></a>
        </div>
      </div>
    </div>



    <Footer/>

  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";

import shops from '../../assets/js/shops';

import axios from "axios";

export default {
  name: "PuntoSushi",
  components: {Footer, Header},
  data () {
    return {
      sushirestaurant: shops.restaurantProducts[4],
      user: "",
      mapa: "see map",
      button1: "Reserve your table",
      button2: "Review",
      reviews: []
    }
  },
  beforeMount() {

  },
  mounted() {
    if(sessionStorage.activeUser) {
      let activeUser = sessionStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
    axios.get('http://localhost:5000/api/v1/reviews/' + this.sushirestaurant["shop_id"])
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
          this.$router.push({name: "ServerError"})
        });

  },
  methods: {
    review() {
      this.$router.push({name: "ReviewForm", params: {shop_id: this.sushirestaurant["shop_id"]}})
    },
    reserve() {
      this.$router.push('/reserve')
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
  }
}
</script>

<style scoped>
@import "../../assets/css/Restaurants.css";
</style>