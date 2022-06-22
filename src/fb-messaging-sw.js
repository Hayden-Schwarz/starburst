import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
  apiKey: "AIzaSyAqUjZ-16mgqWNFPruWui-K571hWh05vME",
  authDomain: "strburst-7a23d.firebaseapp.com",
  databaseURL: "https://strburst-7a23d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "strburst-7a23d",
  storageBucket: "strburst-7a23d.appspot.com",
  messagingSenderId: "875724211389",
  appId: "1:875724211389:web:bf48e91d28a572d9e023d4",
  measurementId: "G-RZGWSZWWKF"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
onBackgroundMessage(messaging, (payload) => {
  console.log('Received background message ', payload);
});
