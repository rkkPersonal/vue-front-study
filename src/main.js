// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// for customeize component
import MyComponent from './components/MyComponent.vue'
import Register from './components/Register.vue'
import HomePage  from './components/HomePage.vue'

// for  ajax request 
import axios from 'axios'
axios.defaults.withCredentials = true;


Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.component('my-component', MyComponent)
Vue.component('register-component', Register)
Vue.component('home-page', HomePage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
