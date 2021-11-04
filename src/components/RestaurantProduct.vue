<template>
  <div id="restaurants-container">

    <div class="restaurant">
      <div class="image-wrap">
        <img class="image" v-bind:src="require('../assets/img/products/' + image)" v-bind:alt="productAlt">
        <a class="cta" href=""><div class="text-image">Look into it!</div></a>
      </div>

    </div>

    <div class="restaurant text">
        <p class="category">{{ category }}</p>
        <h1>{{ name }}</h1>
        <p>{{ location }}</p>
        <p>{{ price }}</p>
        <p class="discount">{{ discount }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "RestaurantProduct",
  props: [
    "category",
    "name",
    "image",
    "location",
    "price",
    "discount",
  ],
  data () {
    return {
      productAlt: "Restaurant Photo",
    }
  },
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
}

#restaurants-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  margin-right: 200px;
  margin-left: 200px;
}

.restaurant {
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 30px;
  display: table-cell;
  vertical-align: middle;
}

h1 {
  margin-bottom: 20px;
}

.category {
  font-size: 20px;
  color: #E12424;
  font-weight: lighter;

}

.text {
  margin-top: ;
  max-width: 500px;
}

image {
  height: 100px;
  width: 100px;
  margin: auto;
}

.image {
  border-radius: 6px;
  height: 100%;
  width: 100%;
  vertical-align: center;
}

.image-wrap {
  height: 300px;
  width: 500px;
  position: relative;
}
p {
  color: #24262b;
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

.image-wrap:hover .text-image {
  visibility: visible;
  opacity: 1;
}

.image:hover {
  filter: blur(5px);
  filter: brightness(0.5);
  cursor: pointer;
}

.discount {
  font-size: 40px;
  color: green;
  margin: auto;
  margin-top: 10px;
}

</style>