import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkc9iKoqOcTgLrRo_L3-gQ9bTck_PCR4A",
  authDomain: "react-music-app-9c72c.firebaseapp.com",
  databaseURL: "https://react-music-app-9c72c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-music-app-9c72c",
  storageBucket: "react-music-app-9c72c.firebasestorage.app",
  messagingSenderId: "402597653598",
  appId: "1:402597653598:web:268271d30aad81fcfed8cf",
  measurementId: "G-4CN3GGJ0NZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


