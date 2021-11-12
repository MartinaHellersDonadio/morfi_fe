<template>
  <section class="testimonies">

    <div class="testimonies_container">

        <div class="box_top">

          <div class="profile">
            <div class="username">
              <p class="comment user">Username</p>
              <p class="comment">Date</p>
            </div>
          </div>

          <div class="points">
            <p> <span id="number">/10</span></p>
          </div>

        </div>

        <div class="clients_comments">
          <p class="comment">A very charming place, nice music</p>
        </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "ReviewRender"
}
</script>

<style scoped>
.testimonies{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
  margin-top: 100px;
}

.testimonies_container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 500px;
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
.username span{
  color: #979797;
  font-size: 1.1rem;
  margin: 1px;
}

.box_top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.clients_comments{
  color: #4b4b4b;
}


.comment {
  color: #0F0D0D;
}

.user {
  color: #E12424;
  font-size: 30px;
}

#number {
  color: #8FC460;
  font-size: 80px;
}
</style>