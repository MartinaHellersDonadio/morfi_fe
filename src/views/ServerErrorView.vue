<template>
  <div class="error-container">
    <h1 class="title-error">Oops! There has been an error! It's not your fault!</h1>
    <div>
      <router-link :to="{name: 'Home'}"><button id="button-back">Go back</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerErrorView"
}
</script>

<style scoped>
.title-error {
  color: red;

}

#button-back {
  border-radius: 30px;
  background-color: #24262b;
  color: whitesmoke;
  width: 500px;
  margin-bottom: 230px;
  margin-top: 100px;
  font-size: 40px;
  cursor: pointer;
}

.error-container {
  margin: auto;
  text-align: center;
  margin-top: 200px;
  width: 500px;
}
</style>