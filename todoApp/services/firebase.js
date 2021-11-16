// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqxpOj8FT8in8SC7NglLDSRaFIdIJR_PY",
  authDomain: "fir-auth-edd9a.firebaseapp.com",
  projectId: "fir-auth-edd9a",
  storageBucket: "fir-auth-edd9a.appspot.com",
  messagingSenderId: "784142416766",
  appId: "1:784142416766:web:9dd087bfcce124840b512f"
};

// Initialize Firebase
let app;
if(!getApps.length){
    app = initializeApp(firebaseConfig);
}

const db = getFirestore(app)
const auth = getAuth(app)

export {db,auth};