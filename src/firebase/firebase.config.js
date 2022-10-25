// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3-gLXsO7JMHKVlLP3yMzQcMPO4qPx9ZM",
    authDomain: "learn-yourself-5b6c4.firebaseapp.com",
    projectId: "learn-yourself-5b6c4",
    storageBucket: "learn-yourself-5b6c4.appspot.com",
    messagingSenderId: "909420154677",
    appId: "1:909420154677:web:20d9261d203f0de2d1467c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app