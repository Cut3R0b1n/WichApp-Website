import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV93oU0QoWcSCvancDvaDETZ_IVd71_Bk",
  authDomain: "wichapp-signup-form.firebaseapp.com",
  projectId: "wichapp-signup-form",
  storageBucket: "wichapp-signup-form.appspot.com",
  messagingSenderId: "322506376527",
  appId: "1:322506376527:web:03819469dabc5b4ff2b13a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Getting All the Objects of Html
var email = document.getElementById("email");
var password = document.getElementById("password");

window.login = function (e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (userCredential) {
      var user = userCredential.user;
      console.log(user.uid);
      alert("Login Successfully");
    })
    .catch(function (error) {
      window.location.replace("index.html");
      alert("Login error: " + error.message);
    });

  console.log(obj);
};

document.getElementById("login").addEventListener("click", login);
