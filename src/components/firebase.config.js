import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


// import {getFirebase} from './firebase/firestore'
// import { getStorage} from './firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBuPhs6bp4MKlcqoQO6vtAVpWP_8hAKAZE",
    authDomain: "restaurantapp-602df.firebaseapp.com",
    databaseURL: "https://restaurantapp-602df-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-602df",
    storageBucket: "restaurantapp-602df.appspot.com",
    messagingSenderId: "605525020997",
    appId: "1:605525020997:web:abb7b471974b314500ae2c"
  };  

   export const app = getApp.Lenght > 0 ? getApp() : initializeApp(firebaseConfig)

  export const firestore = getFirestore(app)
  export const storage = getStorage(app)
  

