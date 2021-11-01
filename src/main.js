import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
import App from './App.vue'
import HomePage from "@/components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import JoinUs from "./components/JoinUs";
import JoinSuccess from "./components/JoinSuccess";
import Faqs from "./components/Faqs";


const routes = [
  { path: '/', name: "HomePage", component: HomePage },
  { path: '/joinus', name: "Joinus", component: JoinUs},
  { path: '/login', name: "Login", component: Login},
  { path: '/signup', name: "Signup", component: Signup},
  { path: '/joinus/joinsuccess', name: "JoinSuccess", component: JoinSuccess},
  { path: '*', component: NotFound },
  { path:  '/faqs', name: "Faqs", component: Faqs},

]

const router = new VueRouter( {
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
