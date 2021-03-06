import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
import App from './App.vue'
import Home from "./components/Home";
import Restaurants from "./components/Restaurants";
import Events from "./components/Events";
import Login from "./components/Login";
import Signup from "./components/Signup";
import JoinUs from "./components/JoinUs";
import Faqs from "./components/Faqs";

import BondiBar from "./components/Restaurants/BondiBar";
import ElChavo from "./components/Restaurants/ElChavo";
import ItalianBar from "./components/Restaurants/ItalianBar";
import NaturalezaSabia from "./components/Restaurants/NaturalezaSabia";
import PuntoSushi from "./components/Restaurants/PuntoSushi";
import BocaToro from "./components/Restaurants/BocaToro";

import JoinSuccessView from "./views/JoinSuccessView";
import SubscribeSuccessView from "./views/SubscribeSuccessView";
import ReviewForm from "./components/ReviewForm";
import ReserveForm from "./components/ReserveForm";
import ReservationSuccessView from "./views/ReservationSuccessView";
import ReviewRender from "./components/ReviewRender";
import ReviewSuccessView from "./views/ReviewSuccessView";

import ServerErrorView from "./views/ServerErrorView";
import CheckoutErrView from "./views/CheckoutErrView";

import NotFound from "./components/NotFound";

const routes = [
  { path: '/', name: "Home", component: Home},
  { path: '/restaurants', name: "Restaurants", component: Restaurants},
  { path: '/events', name: "Events", component: Events},
  { path: '/joinus', name: "Joinus", component: JoinUs},
  { path: '/login', name: "Login", component: Login},
  { path: '/signup', name: "Signup", component: Signup},
  { path:  '/faqs', name: "Faqs", component: Faqs},

  { path: '/restaurants/bondibar', name: "BondiBar", component: BondiBar},
  { path: '/restaurants/elchavo', name: "ElChavo", component: ElChavo},
  { path: '/restaurants/italianbar', name: "ItalianBar", component: ItalianBar},
  { path: '/restaurants/naturalezasabia', name: "NaturalezaSabia", component: NaturalezaSabia},
  { path: '/restaurants/puntosushi', name: "PuntoSushi", component: PuntoSushi},
  { path: '/restaurants/bocatoro', name: "BocaToro", component: BocaToro},

  { path: '/joinus/joinsuccess', name: "JoinSuccess", component: JoinSuccessView},
  { path: '/subscribesuccess', name: "SubscribeSuccessView", component: SubscribeSuccessView},
  { path: '/reviewform', name: "ReviewForm", component: ReviewForm},
  { path: '/reviewform/reviewsuccess', name: "ReviewSuccess", component: ReviewSuccessView},
  { path: '/reviewrender', name: "ReviewRender", component: ReviewRender},
  { path: '/reserve', name: "ReserveForm", component: ReserveForm},
  { path: '/reserve/reservesuccess', name: "ReserveSuccess", component: ReservationSuccessView},

  { path: '/reserve/checkouterr', name: "CheckoutErr", component: CheckoutErrView},
  { path: '/err', name: "ServerError", component: ServerErrorView},

  { path: '*', component: NotFound },
]

const router = new VueRouter( {
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
