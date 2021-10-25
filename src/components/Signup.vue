<template>
  <div class="main-section">
    <h2 class="title-form"> Before using "Morfi" please sign up to enjoy our website</h2>
    <p class="description-form">Please fill in this form to create an account.</p>
    <hr>
    <form class="input-form">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
        <hr>

        <button type="submit" class="formbtn">Register</button>

        <p id="signin">Already have an account? <a href="">Sign in</a>.</p>
    </form>
  </div>
</template>

<script>


export default {
  name: "Signup",
  components: {

  }
}
</script>

<style scoped>
@import "../assets/css/Forms.css";
</style>