import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'
import HomeDetail from '../views/home/HomeDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'HomePage',
    component: HomePage
  }, {
    path: '/home/detail/:id',
    name: 'HomeDetail',
    component: HomeDetail
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }]
})
