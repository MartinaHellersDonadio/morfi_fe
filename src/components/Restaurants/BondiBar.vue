<template>
  <div>
    <Header/>

    <div class="general-intro">

      <div class="sub-intro">

        <div class="intro-container">
          <p id="category">{{ category }}</p>
          <h1 id="title">{{ title }}</h1>
          <div class="location-container">
            <div class="location-subcontainer">
              <p id="location">{{ location }}</p>

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
            <p class="subclasificacion" >★</p>
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
        <img class="image" src="../../assets/img/products/bondi_img.jpg" alt="bondi menu">
      </div>

      <div class="subcontainer">
        <img class="image" src="../../assets/img/products/bondi_2.jpg" alt="bondi location">
      </div>

      <div class="subcontainer">
        <img class="image" src="../../assets/img/products/bondi_3.jpg" alt="bondi menu">
      </div>
    </div>

    <div class="details-container">
      <div class="details-subcontainer">
        <h2>Details</h2>
        <h4>Price range</h4>
        <p class="info">{{ price }} </p>
        <h4>Cuisine</h4>
        <p class="info">{{ cuisine }}</p>
        <h4>Special Diets</h4>
        <p class="info">{{ special }}</p>
      </div>

      <div class="details-subcontainer">
        <h2>Ratings</h2>
        <h4>Food</h4>
        <div class="clasificacion">
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle" >●</p>
        </div>
        <h4>Service</h4>
        <div class="clasificacion">
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion circle">●</p>
          <p class="subclasificacion">●</p>
        </div>
      </div>

      <div class="details-subcontainer">
        <h2>Opening Times</h2>
        <p class="info">Open <span>from Wednesday to Monday</span></p>
        <p class="info">From <span>17:00 to 00:00</span></p>
        <h2>Public transport</h2>
        <span>Bus lines 140, 108, 151, 168, 39</span>
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

export default {
  name: "BondiBar",
  components: {Footer, Header},
  data () {
    return {
      user: "",
      category: "AMERICAN • FOR FRIENDS",
      title: "Bondi Stop Bar",
      location: "Niceto Vega 5976, C1414 Buenos Aires",
      mapa: "see map",
      button1: "Reserve your table",
      price: "ARS 600 - ARS 1500",
      cuisine: "Grill, Steakhouse, Bacon Burger, Barbecue",
      special: "Vegetarian options",
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
span {
  color: #24262b;
  font-weight: bolder;
  font-size: 20px;
}

.general-intro {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.sub-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-container{
  text-align: left;
  margin-top: 200px;
  margin-bottom: 80px;
}

p{
  font-weight: lighter;
  padding: 0px;
}

#category {
  font-size: 20px;
  color: #E12424;
  margin-bottom: 20px;
}

#title {
  font-size: 60px;
  color: #0F0D0D;
  margin-bottom: 50px;
}

#location {
  color: #0F0D0D;
  font-size: 25px;
}

.location-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.location-subcontainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

a {
  text-decoration: none;
  cursor: pointer;
}

#view-map {
  text-transform: uppercase;
  color: #E12424;
  font-weight: bold;
  font-size: 25px;

}

.clasificacion {
  display: inline-block;
  display: row;

}

.subclasificacion {
  display: inline-block;
  font-size: 60px;
  color: #b1b1b1;
}

.star {
  color: gold;
}

.circle {
  color: #E12424;
}

.reserve-button {
  background-color: #E12424;
  border-radius: 10px;
  border: transparent;
  cursor: pointer;
  margin-top: 80px;
  font-size: 40px;
  text-transform: uppercase;
  width: 400px;
}

.review-button {
  background-color: #8FC460;
  border-radius: 10px;
  border: transparent;
  cursor: pointer;
  font-size: 40px;
  text-transform: uppercase;
  width: 400px;
}

.image {
  height: 300px;
  width: 400px;
  position: relative;
}

.img-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 90px;
}

.subcontainer {
  display: flex;
  flex-direction: column;
}


.details-container {
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 100px;
  margin-right: 100px;
}

.details-subcontainer {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 400px;
}

h2 {
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 25px;
  color: #E12424;
  text-align: left;
}

h4 {
  color: #24262b;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 25px;
  text-align: left;
}

.info {
  color: grey;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: left;
}

#title-review {
  font-size: 60px;
  margin-left: 100px;
  color: #8FC460;
}


</style>