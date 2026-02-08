// Firebase configuration
const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "kyp-admission-portal.firebaseapp.com",
  projectId: "kyp-admission-portal",
  storageBucket: "kyp-admission-portal.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
