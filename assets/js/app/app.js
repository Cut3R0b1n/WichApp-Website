import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"; // Use 'firebase-auth' em vez de 'firebase-app' para autenticação.

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
const auth = getAuth(); // Não é necessário desestruturar aqui.

// Getting All the Objects of Html
var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");

// Making a function for storing data
window.signup = function (e) {
  e.preventDefault();
  var obj = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password) // Correção aqui.
    .then(function (success) {
      alert("SignUp Successfully");
    })
    .catch(function (err) {
      alert("Error: " + err); // Correção aqui.
    });

  console.log(obj);
};
