<template>
  <div>
    <footer>
      <div class="footer-container">
        <div class="row">
          <div class="footer-col">
            <h3>Contact</h3>
            <h4>We care to know what you think about the experience in Morfi to adjust what does not go so well</h4>
            <ul>
              <li><a href="mailto:morfi@info.com.ar?Subject=Newsletter">morfi@info.com.ar</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Get Help</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Check our Website</h3>
            <ul>
              <li><a href="#">Events</a></li>
              <li><a href="#">Restaurants</a></li>
              <li><a href="#">Home</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Join our newsletter</h3>
            <h4>Find out about our news before anyone else</h4>
            <input type="email"  v-model="footerEmail" id="footer-email" placeholder="Enter Your Email Address" required>
            <button type="submit" class="footer-email-btn">Suscribe</button>
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