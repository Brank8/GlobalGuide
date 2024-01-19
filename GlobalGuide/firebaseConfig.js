import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDAL-Ja4hkM2vmZtJC-r-03WeiB9YAabYU",
  authDomain: "globalguide-app.firebaseapp.com",
  projectId: "globalguide-app",
  storageBucket: "globalguide-app.appspot.com",
  messagingSenderId: "859767867537",
  appId: "1:859767867537:web:e9d8f853afd1d3c01c5730",
  measurementId: "G-5M696XCJCM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


// iOS:     859767867537-p7jif2unfvsp2opoubsrtksq9lqqpq9o.apps.googleusercontent.com

// Android: 859767867537-qg8g1i9vklf3r850i4l4kcnn89vumk9i.apps.googleusercontent.com

// Web:     859767867537-j8d9a0p4rdq2qlrqbg028u5vimhp478n.apps.googleusercontent.com