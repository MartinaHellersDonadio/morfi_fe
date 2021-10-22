<template>
  <div id="home">
    <div id="first-container">
      <div class="subcontainer">
        <img id="img-home" src="../assets/img/img_home.png" alt="image brand">
      </div>

      <div class="subcontainer">
        <h1 id="slogan">{{ slogan1 }}<br> {{ slogan2 }} <span>{{ slogan3 }}</span></h1>
        <img id="scroll-down" src="../assets/img/scroll_down.png" alt="scroll down icon">
      </div>
    </div>

    <div class="second-container">
      <h1 id="us">{{ title2 }}</h1>
    </div>

    <div id="third-container">
      <div class="about-us">
        <p id="description-us">{{ description }}</p>
      </div>

      <div class="about-us">
        <img id="img-about" src="../assets/img/about_us.png" alt="img about us">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      title2: "About Us",
      description: "We seek to offer a space where diners can easily find, review and reserve the best gastronomic experiences in Buenos Aires. Our main objective is to be able to increase the visualization of those marginalized proposals that, in times of pandemic, seek to strengthen the approach to their clients",
      slogan1: "It's not just food,",
      slogan2: "it's",
      slogan3: "the experience.",
    }
  },
}

</script>

<style scoped>
@import "../assets/css/Home.css";
</style>