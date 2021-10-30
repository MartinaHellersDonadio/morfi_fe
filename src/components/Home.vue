<template>
  <div id="home">

    <div class="first-container">

      <div class="subcontainer">
        <img id="img-home" src="../assets/img/img_home.png" alt="image brand">
      </div>

      <div class="subcontainer">
        <h1 id="slogan">{{ slogan1 }}<br> {{ slogan2 }} <span>{{ slogan3 }}</span></h1>
        <img id="scroll-down" src="../assets/img/scroll_down.png" alt="scroll down icon">
      </div>

    </div>

    <div class="second-container">

      <div class="process">
        <img class="icon" src="../assets/img/user_icon.png" alt="identity icon">
        <p class="description-icon">{{ icon1 }}</p>
      </div>

      <div class="process">
        <img class="icon" src="../assets/img/shop_icon.png" alt="shop icon">
        <p class="description-icon">{{ icon2 }}</p>
      </div>

      <div class="process">
        <img class="icon" src="../assets/img/star_icon.png" alt="star icon">
        <p class="description-icon">{{ icon3 }}</p>
      </div>

    </div>

    <div class="third-container">
      <h1 id="us">{{ title2 }}</h1>
    </div>

    <div id="fourth-container">

      <div class="about-us">
        <p id="description-us">{{ description }}</p>
      </div>

      <div class="about-us">
        <img id="img-about" src="../assets/img/compu.png" alt="img about us">
      </div>

    </div>

    <div class="fifth-container">

      <h2 id="ending-phrase"> {{ phrase }}</h2>
      <img id="ending-home" src="../assets/img/gif_home.gif" alt="img bottom home">

    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      slogan1: "It's not just food,",
      slogan2: "it's",
      slogan3: "the experience.",
      icon1: "Sign up or Log in to start your experience at Morfi",
      icon2: "Choose a gastronomic proposal and reserve your place",
      icon3: "And enjoy!",
      title2: "About Us",
      description: "We seek to offer a space where diners can easily find, review and reserve the best gastronomic experiences in Buenos Aires. Our main objective is to be able to increase the visualization of those marginalized proposals that, in times of pandemic, seek to strengthen the approach to their clients",
      phrase: "And if you have gotten this far, we want to tell you we couldn't be happier with your visit to MORFI",
    }
  },
}

</script>

<style scoped>
@import "../assets/css/Home.css";
</style>