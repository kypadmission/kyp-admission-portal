<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpeujBjXSBgEntW_tZ7GaGRxOauub5BLA",
  authDomain: "kyp-admission-portal.firebaseapp.com",
  projectId: "kyp-admission-portal",
  storageBucket: "kyp-admission-portal.appspot.com",
  messagingSenderId: "696364940629",
  appId: "1:696364940629:web:b6e7a5adeedcb439fcc3dc"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
