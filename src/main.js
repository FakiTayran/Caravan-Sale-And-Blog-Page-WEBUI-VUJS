import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {store} from './store/store'

export const eventBus = new Vue();
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  render: h => h(App)
})
