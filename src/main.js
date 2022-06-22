//Imports
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import './wcss.css'
import './registerServiceWorker'
import "bootstrap/dist/js/bootstrap.js"
import router from './router'
import {createPinia} from 'pinia'
import {BIconShare, BIconFacebook, BIconPinterest,
  BIconEnvelope, BIconWhatsapp, BIconChatDots, BIconMessenger} from 'bootstrap-icons-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//Slide
import { Slide } from 'vue3-burger-menu'
//Barcode
import VueBarcode from '@chenfengyuan/vue-barcode';
import A2Hs from '@/components/A2Hs'
import { SFacebook, SEmail, SSms, SFacebookMessenger, SPinterest, SWhatsApp } from 'vue-socials/dist/vue-socials.es'
//Firebase
// import firebaseMessaging from './firebase'



const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
  .component('BIconMessenger', BIconMessenger)
  .component('BIconChatDots', BIconChatDots)
  .component('BIconEnvelope', BIconEnvelope)
  .component('BIconWhatsapp', BIconWhatsapp)
  .component('BIconPinterest', BIconPinterest)
  .component('SFacebook', SFacebook)
  .component('SEmail', SEmail)
  .component('SFacebookMessenger', SFacebookMessenger)
  .component('SSms', SSms)
  .component('SPintrest', SPinterest)
  .component('SWhatsApp', SWhatsApp)
  .component('BIconShare',BIconShare)
  .component('BIconFacebook', BIconFacebook)
  .component('Slide', Slide)
  .component(VueBarcode.name, VueBarcode)
  .component('A2Hs', A2Hs)
  .use(pinia)
  .use(router)
  .mount('#app')
