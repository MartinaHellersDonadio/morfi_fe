import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
import App from './App.vue'
import HomePage from "@/components/HomePage";
import Restaurants from "./components/Restaurants";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import Events from "./components/Events";
import JoinUs from "./components/JoinUs";


const routes = [
  { path: '/', name: "HomePage", component: HomePage },
  { path: '/restaurants', name: "Restaurants", component: Restaurants},
  { path: '/login', name: "Login", component: Login},
  { path: '/signup', name: "Signup", component: Signup},
  { path: '*', component: NotFound },
  { path: '/events', name: "Events", component: Events},
  { path: '/joinus', name: "JoinUs", component: JoinUs},

]

const router = new VueRouter( {
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
