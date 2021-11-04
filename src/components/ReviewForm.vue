<template>
  <body>
  <div style="display: flex; flex-direction: column; margin-left: 30px;">
    <form action="/tu-php.php">
      <div>
        <h1>Nombre de resto</h1>
        <h2>
          Your overall rating of this restaurant
        </h2>
        <p class="stars-row">
          <input type="radio" id="1star" name="stars" value="5" />
          <label class="star-label" for="1star"></label>
          <input type="radio" id="2star" name="stars" value="4" />
          <label class="star-label" for="2star"></label>
          <input type="radio" id="3star" name="stars" value="3" />
          <label class="star-label" for="3star"></label>
          <input type="radio" id="4star" name="stars" value="2" />
          <label class="star-label" for="4star"></label>
          <input type="radio" id="5star" name="stars" value="1" />
          <label class="star-label" for="5star"></label>
        </p>
      </div>
      <h2>Your review</h2>
      <textarea class="textarea" type="text" cols="40" rows="6" placeholder="Tell people about your experience: your meal, atmosphere, service?"></textarea>
      <h2 style="margin-top: 40px;">Date of visit</h2>
      <input style="width: 160px" type="date" id="date" name="review-date" />
      <h2 style="margin-top: 40px;">How expensive is this restaurant?</h2>
      <div style="display: flex; flex-direction: row;">
        <input type="radio" id="cheap" name="price-range" value="1" />
        <label class="price-label" for="cheap">
          <div>CHEAP EATS</div>
          <div>quick serve or self-service</div>
        </label>
        <input type="radio" id="mid-range" name="price-range" value="2" />
        <label class="price-label" for="mid-range">
          <div>MID RANGE</div>
          <div>casual, table service</div>
        </label>
        <input type="radio" id="fine" name="price-range" value="3" />
        <label class="price-label" for="fine">
          <div>FINE DINING</div>
          <div>more formal or dressy</div>
        </label>
      </div>
      <input type="submit" value="Submit my review" class="button" />
    </form>
  </div>
  </body>
</template>

<script>
export default {
  name: "ReviewForm"
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', sans-serif;
  box-sizing: content-box;
}

h1 {
  font-weight: bold;
  font-size: 32px;
}

h2 {
  font-weight: 500;
  font-size: 16px;
}


.stars-row {
  width: 200px;
  display: flex;
  flex-direction: row;
  direction: rtl;
  unicode-bidi: bidi-override;
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

.textarea {
  width: 600px;
  height: 250px;
}

.button {
  width: 150px;
  height: 30px;
  margin-top: 60px;
  background-color: #252422;
  border-radius: 4px;
  color: white;
  font-weight: bold;
}

.price-label {
  width: 280px;
  height: 125px;
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  box-shadow: 4px 7px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.price-label:hover {
  transform: scale(1.02);
}

.price-label:active {
  transform: scale(.98);
}

.price-label ~ .price-label {
  margin-left: 25px;
}

.price-label > div {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
}

.price-label > div ~ div {
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
</style>