<template>
  <div class="general-container">
    <div class="subcontainer">
      <img class="banner" src="../assets/img/banner_left.png" alt="banner left">
    </div>
    <div class="subcontainer">
      <div class="join-main-section">
        <h2 class="title-form">Do you want your restaurant to appear in "Morfi"? </h2>
        <p class="description-form">Please fill the form to let us know if you want to join "Morfi".</p>
        <hr>
        <form class="input-form">
          <label for="ownersName"><b>Owners Name</b></label>
          <input type="text"  placeholder="Enter your name" name="ownersName" id="ownersName" tabindex="1" required>

          <label>Email</label>
          <input type="text" placeholder="Enter Email" v-model="email" required>

          <label for=restName><b>Restaurant Name</b></label>
          <input type="text"  placeholder="Enter your Restaurant Name" name="restaurantName" id="restName" tabindex="2" required>

          <label for="heading"><b>What type of restaurant do you have?</b></label>
          <input type="text"  name="typeRestaurant" id="heading" required tabindex="3">

          <label for="location"><b>Location</b></label>
          <input type="text"  placeholder="Location" name="loc" id="location" required tabindex="4">

          <label for="openTime"><b>Open</b></label>
          <input type="time"  name="opentime" id="openTime" required tabindex="5">

          <label for="closeTime"><b>Close</b></label>
          <input type="time"  name="closetime" id="closeTime" required tabindex="6">

          <textarea id="description" name="description" class="description" rows="4" cols="50" required maxlength="240"> Write a brief description of your restaurant</textarea>

          <button type="submit" class="formbtn">Submit</button>
        </form>
      </div>
    </div>
    <div class="subcontainer">
      <img class="banner" src="../assets/img/banner_right.png" alt="banner right">
    </div>

  </div>

</template>

<script>

export default {
  name: "JoinUs",
  components: {
  }
}
</script>

<style scoped>
@import "../assets/css/JoinUs.css"
</style>