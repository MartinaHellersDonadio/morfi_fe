<template>
  <div>
    <div id="notfound-container">
      <h1 id="notfound">{{ phrase1 }}<br><span>{{ phrase2 }}</span> {{ phrase3 }}</h1>
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
@import "../assets/css/NotFound.css"
</style>