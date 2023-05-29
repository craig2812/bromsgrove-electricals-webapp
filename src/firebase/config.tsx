import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getDatabase, ref } from 'firebase/database'
import {getStorage} from 'firebase/storage'


export const firebaseConfig = {
    apiKey: "AIzaSyAUG8MvYI1nD9aoEYRD5Nnlo6Bg_qLnD8Q",
    authDomain: "bromsgrovemaintenance7559.firebaseapp.com",
    projectId: "bromsgrovemaintenance7559",
    storageBucket: "bromsgrovemaintenance7559.appspot.com",
    messagingSenderId: "547025782639",
    appId: "1:547025782639:web:baaaf867f1e003c2de8a9a",
    measurementId: "G-EEG4JY02JS"
  };
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const database = getDatabase(app)