<template>
  <div>

    <div id="notfound-container">

      <h1 id="notfound">{{ phrase1 }}<br><span>{{ phrase2 }}</span> {{ phrase3 }}</h1>

      <router-link :to="{name: 'HomePage'}"><img src="../assets/img/morfi_logo.png" alt="morfi logo"></router-link>

    </div>

  </div>
</template>

<script>

export default {
  name: "NotFound",
  components: {

  },
  data () {
    return {
      phrase1: "Oops,",
      phrase2: "nothing",
      phrase3: "here...",
    }
  }
}
</script>

<style scoped>

#notfound-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
}

#notfound {
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 130px;
  display: inline-block;
  padding-bottom: 100px;
}

span {
  color: gold;
}

</style>