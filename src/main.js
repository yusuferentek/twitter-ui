import Vue from 'vue'
import App from './App.vue'
import '../src/assets/style.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa"
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/router.js'
import VueRouter from 'vue-router'
import store from './store'
Vue.use(VueRouter)



const Fa = Object.values({ ...FaIcons })
addIcons(...Fa);

Vue.component("v-icon", OhVueIcon);

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
