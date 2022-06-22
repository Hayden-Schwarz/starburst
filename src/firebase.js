import {initializeApp} from 'firebase/app'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyAqUjZ-16mgqWNFPruWui-K571hWh05vME',
  authDomain: 'strburst-7a23d.firebaseapp.com',
  projectId: 'strburst-7a23d',
  storageBucket: 'strburst-7a23d.appspot.com',
  messagingSenderId: '875724211389',
  appId: '1:875724211389:web:bf48e91d28a572d9e023d4',
  measurementId: 'G-RZGWSZWWKF'
}

const app = initializeApp(firebaseConfig)

export default getMessaging(app)
