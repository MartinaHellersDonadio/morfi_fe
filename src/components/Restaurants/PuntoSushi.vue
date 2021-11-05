<template>
  <div>
    <Header/>

    <div class="general-intro">

      <div class="sub-intro">

        <div class="intro-container">

          <p id="category-resto">{{ bondirestaurant["category"] }}</p>
          <h1 id="title-resto">{{ bondirestaurant["name"] }}</h1>
          <div class="location-container">
            <div class="location-subcontainer">
              <p id="location-resto">{{ bondirestaurant["location"] }}</p>

              <div class="location-subcontainer">
                <a href="https://www.google.com/maps/place/Bondi+Stop+Bar/@-34.5839651,-58.4434392,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5f87a385537:0xfd3132b1f2b7da37!8m2!3d-34.5839651!4d-58.4434392">
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
        <p class="info">{{ bondirestaurant["price"] }} </p>
        <h4 class="details-subtitle">Cuisine</h4>
        <p class="info">{{ bondirestaurant["cuisine"] }}</p>
        <h4 class="details-subtitle">Special Diets</h4>
        <p class="info">{{ bondirestaurant["special"] }}</p>
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
        <p class="info">{{ bondirestaurant["time"] }}</p>
        <h2 class="details-title">Public transport</h2>
        <p class="transport">{{ bondirestaurant["transport"]}}</p>
      </div>
    </div>

    <div class="general-intro">
      <div class="sub-intro">
        <h2 id="title-review"> | Comments & Reviews</h2>
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

import products from '../../assets/js/products';

export default {
  name: "PuntoSushi",
  components: {Footer, Header},
  data () {
    return {
      bondirestaurant: products.restaurantProducts[4],
      user: "",
      mapa: "see map",
      button1: "Reserve your table",
      button2: "Review",
    }
  },
  mounted() {
    if(sessionStorage.activeUser) {
      let activeUser = sessionStorage.activeUser;
      this.user = JSON.parse(activeUser);
    }
  },
  methods: {
    review() {
      this.$router.push('/reviewform')
    },
    reserve() {
      this.$router.push('/reserveform')
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