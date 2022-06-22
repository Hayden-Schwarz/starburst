importScripts('https://www.gstatic.com/firebasejs/9.8.3/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.3/firebase-messaging-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/9.8.3/firebase/init.js');

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
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: 'From worker' + payload.notification.body,
    icon: 'img/icons/android-chrome-192x192.png',
    redirectUrl: 'https://www.strburst.co.za/promotions'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
