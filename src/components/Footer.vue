<template>
  <footer>
    <div class="footer_content">
      <h1>Suscribe to our newsletter</h1>
      <form>
        <div class="contenedor">
          <input id="email" type="email" name="email" placeholder="Ingresa tu e-mail">
          <input id="submit" type="submit" value="Subscribirme">
        </div>
      </form>
      <ul class="socials">
        <li><a href="#"><i class="fa fa-wordpress"></i></a></li>
        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
      </ul>
    </div>

    <div class="footer_bottom">
      <p>Copyright &copy;2020 MORFI | All rights reserved </p>
    </div>

  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
@import "../assets/css/Footer.css";
</style>