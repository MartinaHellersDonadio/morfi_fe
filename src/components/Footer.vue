<template>
  <div>
    <footer>
      <div class="footer-container">
        <div class="row">
          <div class="footer-col">
            <h4>Morfi</h4>
            <ul>
              <li><router-link to="/home">About Us</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#"></a> </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Check our Website</h4>
            <ul>
              <li><a href="#">Events</a></li>
              <li><a href="#">Restaurants</a></li>
              <li><a href="#">Home</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Join our newsletter</h4>
            <input type="email"  v-model="footerEmail" id="footer-email" placeholder="Enter Your Email Address">
            <button type="submit" class="footer-email-btn">Submit</button>
          </div>
        </div>
          <p class="footer-bottom">Copyright &copy;2020 MORFI | All rights reserved </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
      footerEmail: "",
    }
  }
}
</script>

<style scoped>
@import "../assets/css/Footer.css";
</style>