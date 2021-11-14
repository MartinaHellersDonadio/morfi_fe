<template>
  <div>

    <Header/>

    <section>
      <div class="container">
        <div class="accordion">

          <div class="accordion-item" id="question1">
            <a class="accordion-link" href="#question1">
              {{ question1 }}
              <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <div class="answer">
              <p> {{ answer1 }}</p>
            </div>
          </div>

          <div class="accordion-item" id="question2">
            <a class="accordion-link" href="#question2">
              {{ question2 }}
              <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <div class="answer">
              <p> {{ answer2 }}</p>
            </div>
          </div>

          <div class="accordion-item" id="question3">
            <a class="accordion-link" href="#question3">
              {{ question3 }}
              <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <div class="answer">
              <p> {{ answer3 }}</p>
            </div>
          </div>

          <div class="accordion-item" id="question4">
            <a class="accordion-link" href="#question4">
              {{ question4 }}
              <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
            <div class="answer">
              <p> {{ answer4 }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>


  </div>
</template>

<script>

import Header from "./Header";

export default {
  name: "Faqs",
  components: {Header},
  data () {
    return {
      question1: "What is the main purpose of Morfi's?",
      answer1: "Be the first place for people to turn to in search of gastronomic proposals that escape the traditional ones and to be a bridge for restaurant owners to make their proposals visible and connect with diners.",
      question2: "What benefits does subscribing to Morfi's newsletter bring me?",
      answer2: "Not only will you become part of Morfi's community for free but also you will receive the latest news about gastronomic events held all over Buenos Aires and be the first one to hear what the future holds for your favorite website",
      question3: "How do I book a place at the restaurant I want?",
      answer3: "It's simple! You just choose the proposal you like the most from the variety we offer in the \"RESTAURANTS\" section, fill in some information to contact you and the main details of the reservation and that's all!",
      question4: "If I am the owner of restaurant what should I do for my proposal to be part of Morfi?",
      answer4: "We compromise to make the process simple and fast from the very beginning so you should only complete, at the \"Do you have a restaurant?\" section, some personal information and some details we need to know about your proposal and after we received and evaluated it we will contact you to make the last arrangements",

    }
  }
}
</script>

<style scoped>
*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  box-sizing: border-box;
  background-color: #3c4053
}

section{
  width: 100%;
  height: 100%;
  background-color: #3c4053;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container{
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 250px;
  margin-bottom: 50px;
}

.accordion-item{
  background-color: #283042;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0.5rem 2px 0.5rem rgba(0,0,0,0.1)
}

.accordion-link{
  font-size: 1.6rem;
  color: rgba(255,255,255, 0.8);
  text-decoration: none;
  background-color: #283042;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.accordion-link i {
  color: #e7d5ff;
  padding: 0.5rem;
}

.accordion-link .chevron-down-outline{
  display: none;
}

.answer{
  overflow: hidden;
  max-height: 0;
  position: relative;
  background-color: #212838;
  transition: max-height 650ms;
}

.answer ::before{
  content: "";
  position: absolute;
  width: 0.6rem;
  height: 90%;
  background-color: #8FC460;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.answer p{
  color: rgba(255,255,255,0.6);
  font-size: 1.4rem;
  padding: 2rem;
}

.accordion-item:target .answer{
  max-height: 10rem;
}
</style>