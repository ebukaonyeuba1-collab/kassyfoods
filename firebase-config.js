// ============================================================
// KASSY FOODS — FIREBASE CONFIGURATION
// ============================================================
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com
// 2. Click "Add project" and name it "kassy-foods"
// 3. Once created, click the </> (Web) icon to add a web app
// 4. Name the app "Kassy Foods Web"
// 5. Copy the firebaseConfig object values below
// 6. Enable Authentication: Console > Build > Authentication > Sign-in method > Email/Password
// 7. Enable Firestore: Console > Build > Firestore Database > Create database (start in test mode)
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ADMIN EMAIL — Change this to your own email address
// Only this email will have access to admin.html
export const ADMIN_EMAIL = "admin@kassyfoods.com";
