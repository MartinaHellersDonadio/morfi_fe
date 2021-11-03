<template>
  <div>

    <footer>
      <div class="footer-container">
        <div class="row">

          <div class="footer-col">
            <h3>{{ title1 }}</h3>
            <h4>{{ description1 }}</h4>
            <ul>
              <li><a href="mailto:morfi@info.com.ar?Subject=Suggestions%20and/or%20queries"> {{ link1 }}</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3> {{ title2 }} </h3>
            <ul>
              <li><router-link to="/faqs"> {{ link2 }}</router-link></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3> {{ title3 }}</h3>
            <h4> {{ description3 }}</h4>
            <form method="post" @submit="suscribe()">
              <input type="email"  v-model="footerEmail" id="footer-email" placeholder="Enter Your Email Address" required>
              <button type="submit" class="footer-email-btn">Suscribe</button>
            </form>
          </div>

        </div>
          <p class="footer-bottom">{{ copyRight }}</p>
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
      title1: "Contact",
      description1: "We care to know what you think about the experience in Morfi to adjust what does not go so well",
      link1: "morfi@info.com.ar",
      title2: "Get Help",
      link2: "FAQs",
      title3: "Join our newsletter",
      description3: "Find out about our news before anyone else",
      copyRight: "@ Copyright 2020 MORFI | All rights reserved ",
    }
  },
  methods: {
    suscribe() {
      this.$router.push({name: "SuscribeSuccess"})
    }
  },
}
</script>

<style scoped>
@import "../assets/css/Footer.css";
</style>