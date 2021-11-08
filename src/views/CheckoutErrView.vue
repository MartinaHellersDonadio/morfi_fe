<template>
  <div>

    <Header/>

    <div class="container">
      <div class="subcontainer-reserve">
        <div class="text">
          <img class="error-image" src="../assets/img/error_image.png" alt="error icon">
          <h2 class="reserve-title"> {{ title }}</h2>
        </div>
      </div>

      <div class="text">
        <router-link to="/reserve"><button class="back-btn"><a class="button-title">{{ button }}</a></button></router-link>
      </div>

    </div>

    <Footer/>

  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "CheckoutErrView",
  components: {Header, Footer},
  data () {
    return {
      title: "Oops! We couldn't take your reservation, please try again please:)",
      button: "Reserve again",
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}

.container{
  align-items: center;
  margin:auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 150px;
  margin-bottom: 200px;
}

.subcontainer-reserve {
  width: 600px;
  height: 400px;
}

.error-image {
  height: 300px;
  width: 350px;
}

.text{
  text-align: center;
  margin: auto;
}

.reserve-title{
  font-size: 30px;
}

.back-btn{
  border-radius: 30px;
  background-color: #8FC460;
  font-size: 30px;
  margin-top: 200px;
  width: 600px;
  height: 80px;
  cursor: pointer;
  border: #8FC460;
  margin-top: 10px;
}

.back-btn:hover{
  background-color: #b1b1b1;
}

.button-title {
  color: whitesmoke;
}
</style>