import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import "bootstrap/dist/js/bootstrap.js"
import router from './router'
import {createPinia} from 'pinia'
import {BIconShare} from 'bootstrap-icons-vue'
import VueSocialSharing from 'vue-social-sharing'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Slide } from 'vue3-burger-menu'
/* import specific icons */

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
  .component('BIconShare',BIconShare)
  .component('Slide', Slide)
  .use(pinia)
  .use(VueSocialSharing)
  .use(router).mount('#app')
