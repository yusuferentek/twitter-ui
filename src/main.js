import Vue from 'vue'
import App from './App.vue'
import '../src/assets/style.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa"

const Fa = Object.values({ ...FaIcons })
addIcons(...Fa);

Vue.component("v-icon", OhVueIcon);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
