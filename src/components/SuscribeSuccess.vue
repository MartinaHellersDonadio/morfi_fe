<template>
  <div class="container">
    <div class="text">
      <img id="tick-gif" src="../assets/img/tick_gif.gif" alt="tick gif">
      <h2>{{ titlesubscribe }}</h2><br>
    </div>
    <div class="text">
      <p> {{ paragraph1 }}</p>
    </div>
    <div class="text">
      <router-link to="/"><button class="back-btn"><a>Back</a></button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuscribeSuccess",
  data () {
    return {
      titlesubscribe: "Thank you for joining our newsletter",
      paragraph1: "From now on, you will be the first one to receive any news! ",
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
  margin-top: 100px;
}

#tick-gif {
  height: 150px;
  width: 150px;
}

.text{
  text-align: center;
  margin: auto;
}

h2{
  font-size: 60px;
}

p {
  font-size: 30px;
  font-style: italic;
  color: #24262b;
}

.back-btn{
  border-radius: 30px;
  background-color: #24262b;
  font-size: 30px;
  margin-top: 100px;
  width: 300px;
  height: 80px;
  cursor: pointer;
  color: whitesmoke;
  border: #24262b;
}

.back-btn:hover{
  background-color: #b1b1b1;
}
</style>