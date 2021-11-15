<template>
  <section class="testimonies">

    <div class="testimonies_container">
      <div class="testimonies_box">
        <div class="box_top">

          <div class="profile">
            <div class="username">
              <p class="comment user">@{{ user_name }}</p>
              <p class="comment date">{{ date }}</p>
            </div>
          </div>

          <div class="points">
            <p id="number-input"> {{ scale }}<span id="number"> / 10</span></p>
          </div>

        </div>

        <div class="clients_comments">
          <p class="comment review">{{ comment }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "ReviewRender",
  props: ["user_name", "date", "comment", "scale"]
}
</script>

<style scoped>
.testimonies{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 30px;
}

.testimonies_container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  overflow-wrap: break-word;
}
.testimonies_box{
  width: 800px;
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;
  margin: 15px;
}


.profile{
  display: flex;
  align-items: center;
}
.username{
  display: flex;
  flex-direction: column;
}

.username strong {
  color: #3d3d3d;
  font-size: 1.3rem;
}
.date strong{
  color: #3d3d3d;
  font-size: 1.3rem;
}

.box_top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.clients_comments{
  color: #4b4b4b;
}


.comment {
  color: #0F0D0D;
}

.user {
  color: #E12424;
  font-size: 40px;
}

.date {
  font-size: 25px;
  font-weight: bolder;
}

.review {
  font-size: 30px;
  font-weight: lighter;
  font-style: italic;
}

#number {
  color: #8FC460;
  font-size: 80px;
}

#number-input {
  color: #3d3d3d;
  font-size: 80px;
}
</style>