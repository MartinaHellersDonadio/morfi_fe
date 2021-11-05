import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
import App from './App.vue'
import HomeView from "./views/HomeView";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import JoinUs from "./components/JoinUs";
import JoinSuccess from "./components/JoinSuccess";
import Faqs from "./components/Faqs";
import SuscribeSuccess from "./components/SuscribeSuccess";
import BondiBar from "./components/Restaurants/BondiBar";
import ElChavo from "./components/Restaurants/ElChavo";
import ItalianBar from "./components/Restaurants/ItalianBar";
import NaturalezaSabia from "./components/Restaurants/NaturalezaSabia";
import PuntoSushi from "./components/Restaurants/PuntoSushi";
import BocaToro from "./components/Restaurants/BocaToro";
import ReviewForm from "./components/ReviewForm";
import ReserveForm from "./components/ReserveForm";
import Reviews from "./components/Reviews";
import ServerErrorView from "./views/ServerErrorView";


const routes = [
  { path: '/', name: "HomeView", component: HomeView},
  { path: '/joinus', name: "Joinus", component: JoinUs},
  { path: '/login', name: "Login", component: Login},
  { path: '/signup', name: "Signup", component: Signup},
  { path: '/joinus/joinsuccess', name: "JoinSuccess", component: JoinSuccess},
  { path: '*', component: NotFound },
  { path:  '/faqs', name: "Faqs", component: Faqs},
  { path: '/suscribesuccess', name: "SuscribeSuccess", component: SuscribeSuccess},
  { path: '/bondibar', name: "BondiBar", component: BondiBar},
  { path: '/elchavo', name: "ElChavo", component: ElChavo},
  { path: '/italianbar', name: "ItalianBar", component: ItalianBar},
  { path: '/naturalezasabia', name: "NaturalezaSabia", component: NaturalezaSabia},
  { path: '/puntosushi', name: "PuntoSushi", component: PuntoSushi},
  { path: '/bocatoro', name: "BocaToro", component: BocaToro},
  { path: '/reviewform', name: "ReviewForm", component: ReviewForm},
  { path: '/reserve', name: "ReserveForm", component: ReserveForm},
  { path: '/reviews', name: "Reviews", component: Reviews},
  { path: '/reserve/checkout/err', name: "ServerError", component: ServerErrorView},

]

const router = new VueRouter( {
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
