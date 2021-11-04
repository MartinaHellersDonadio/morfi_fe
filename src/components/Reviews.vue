<template>
  <section class="testimonies">
    <div class="testimonies_header">
    </div>
    <div class="testimonies_container">
      <!--Review 1 -->
      <div class="testimonies_box">
        <div class="box_top">
          <div class="profile">
            <div class="username">
              <strong>Cecilia Rodriguez</strong>
              <strong>7/10/2021</strong>
            </div>
          </div>
          <div class="reviews">
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion" >★</p>
          </div>
        </div>
        <div class="clients_comments">
          <p class="comment">A very charming place, nice music, nice people, but maybe you should improve the treatment with the clients. Above all, we enjoy a lovely night!</p>
        </div>
      </div>
      <!--Review 2 -->
      <div class="testimonies_box">
        <div class="box_top">
          <div class="profile">
            <div class="username">
              <strong>Cecilia Rodriguez</strong>
              <strong>7/10/2021</strong>
            </div>
          </div>
          <div class="reviews">
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion" >★</p>
          </div>
        </div>
        <div class="clients_comments">
          <p class="comment">A very charming place, nice music, nice people, but maybe you should improve the treatment with the clients. Above all, we enjoy a lovely night!</p>
        </div>
      </div>
      <!--Review 3 -->
      <div class="testimonies_box">
        <div class="box_top">
          <div class="profile">
            <div class="username">
              <strong>Cecilia Rodriguez</strong>
              <strong>7/10/2021</strong>
            </div>
          </div>
          <div class="reviews">
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion" >★</p>
          </div>
        </div>
        <div class="clients_comments">
          <p class="comment">A very charming place, nice music, nice people, but maybe you should improve the treatment with the clients. Above all, we enjoy a lovely night!</p>
        </div>
      </div>
      <!--Review 4 -->
      <div class="testimonies_box">
        <div class="box_top">
          <div class="profile">
            <div class="username">
              <strong>Cecilia Rodriguez</strong>
              <strong>7/10/2021</strong>
            </div>
          </div>
          <div class="reviews">
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion star">★</p>
            <p class="subclasificacion" >★</p>
          </div>
        </div>
        <div class="clients_comments">
          <p class="comment">A very charming place, nice music, nice people, but maybe you should improve the treatment with the clients. Above all, we enjoy a lovely night!</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Reviews"
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
}
.testimonies_header {
  margin: 50px 0;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.testimonies_header span{
  font-size:2.2rem;
  color:#252525;
  margin-bottom: 25px;
}

.testimonies_container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
.testimonies_box{
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
.reviews{
  color: #f9d71c;
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
</style>