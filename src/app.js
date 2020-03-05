import '@babel/polyfill'
import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './routers'
import store from './stores'
import utils from './utils'
// import '../node_modules/swiper/dist/css/swiper.css'
// import MyRouter from './my-router'

// Vue.use(VueAwesomeSwiper)
Vue.use(utils)


new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
