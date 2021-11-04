<template>
  <div class="main-container">
    <h1>Choose your favorite place!</h1>

    <div class="resto-container">
      <div class="subcontainer">
        <div class="section-resto">
          <div class="image-wrapper">
            <router-link to="/BondiBar"><img class="image" src="../assets/img/products/bondi_img.jpg" alt="bondi menu"></router-link>
            <div class="text-image">Look into it!</div>
          </div>
          <h1 class="name">Bondi Stop Bar</h1>
          <div class="row">
            <p class="price">Price average: $1000</p>
            <p class="discount">-20%</p>
          </div>
        </div>
      </div>

      <div class="subcontainer">
        <div class="image-wrapper">
          <router-link to="/ElChavo"><img class="image" src="../assets/img/products/el_chavo.jpg" alt="bondi location"></router-link>
          <div class="text-image">Look into it!</div>
        </div>
        <h1 class="name">Parilla El Chavo</h1>
        <p class="price">Price average: $500</p>
      </div>

      <div class="subcontainer">
        <div class="image-wrapper">
          <img class="image" src="../assets/img/products/italian_bar.jpg" alt="bondi menu">
          <div class="text-image">Look into it!</div>
        </div>
        <h1 class="name">D´oro Italian Bar</h1>
        <div class="row">
          <p class="price">Price average: $2000</p>
          <p class="discount">-30%</p>
        </div>
      </div>
    </div>

    <div class="resto-container">
      <div class="subcontainer">
        <div class="image-wrapper">
          <img class="image" src="../assets/img/products/naturaleza_sabia.jpg" alt="bondi menu">
          <div class="text-image">Look into it!</div>
        </div>
        <h1 class="name">Naturaleza Sabia</h1>
        <p class="price">Price average: $500</p>
      </div>

      <div class="subcontainer">
        <div class="image-wrapper">
          <img class="image" src="../assets/img/products/punto_sushi.jpg" alt="bondi location">
          <div class="text-image">Look into it!</div>
        </div>
        <h1 class="name">Punto Sushi</h1>
        <div class="row">
          <p class="price">Price average: $750</p>
          <p class="discount">-30%</p>
        </div>
      </div>

      <div class="subcontainer">
        <div class="image-wrapper">
          <img class="image" src="../assets/img/products/boca_toro.jpg" alt="bondi menu">
          <div class="text-image">Look into it!</div>
        </div>
        <h1 class="name">Boca de Toro</h1>
        <p class="price">Price average: $2000</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "Restaurants",
  components: {
  },
}
</script>

<style scoped>
.main-container {
  margin: auto;
  margin-bottom: 80px;
  text-align: center;
}

h1 {
  color: #E12424;
  margin-top: 200px;
  text-align: center;
  font-size: 60px;
  margin-bottom: 50px;
}

.resto-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
}

.subcontainer {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
}

.image {
  height: 300px;
  width: 400px;
  border-radius: 6px;
  vertical-align: center;
}

.image-wrapper {
  position: relative;
}

.text-image {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 30px;
}

.image-wrapper:hover .text-image {
  visibility: visible;
  opacity: 1;
}

.image:hover {
  filter: blur(5px);
  filter: brightness(0.5);
  cursor: pointer;
}



.name {
  color: darkorange;
  font-size: 40px;
  margin: 0;
}

.price {
  color: #24262b;
  font-size: 20px;
}

.discount {
  color: green;
  margin: auto;
  font-size: 30px;
  font-weight: bold;
  padding: 0;
}

.row {
  display: flex;
  flex-direction: row;
}
</style>