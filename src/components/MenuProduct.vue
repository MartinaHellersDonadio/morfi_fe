<template>
  <div id="main">
    <h2 class="product-title">{{ name }}</h2>
    <div class="main-subcontainer">
      <div class="section">
        <a href="https://www.google.com/maps/d/u/0/embed?mid=1siY21nn9fB8T2CBk_xLZbc6jgzpV7ITz"><img class="product-img" v-bind:src="require('../assets/img/products/' + image)" v-bind:alt="productAlt"></a>
      </div>
      <div class="section text">
          <p class="text-container">{{ description }}</p>
          <p class="text-time">{{ time }}</p>
          <a href="https://www.google.com/maps/d/u/0/embed?mid=1siY21nn9fB8T2CBk_xLZbc6jgzpV7ITz"><p class="text-location">{{ location }}</p></a>
          <p class="text-price">{{ price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuProduct",
  props: [
    "name",
    "image",
    "description",
    "time",
    "location",
    "price",
  ],
  data () {
    return {
      productAlt: "Foto Producto"
    }
  }
}
</script>

<style scoped>
#main {
  font-family: Montserrat;

}

.product-title {
  margin-top: 60px;
  background-color: lightskyblue;
  width: 500px;
  font-size: 40px;
}

.main-subcontainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}

.text {
  width: 700px;
  height: 360px;
}

.text:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.text-container {
  color: #E12424;
  font-weight: 25px;
}

.text-time {
  font-weight: bolder;
  font-size: 20px;
  text-transform: uppercase;
}

.text-location {
  color:darkcyan;
  font-weight: bolder;
}

.text-price {
  background-color: greenyellow;
  border-radius: 30px;
}

.product-img {
  height: 400px;
  width: 550px;
  margin: auto;
}

p {
  color: #0F0D0D;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

</style>