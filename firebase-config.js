import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAklkvHKiuALu8qChGmAo1G4wHdYASH1f4",
  authDomain: "kassyfoods-15eb9.firebaseapp.com",
  projectId: "kassyfoods-15eb9",
  storageBucket: "kassyfoods-15eb9.firebasestorage.app",
  messagingSenderId: "1434381589",
  appId: "1:1434381589:web:d0b7798ad21550823b0d1c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ⚠️ Change this to YOUR real email — this is the only email that can access admin.html
export const ADMIN_EMAIL = "ebukaonyeuba1@gmail.com";
