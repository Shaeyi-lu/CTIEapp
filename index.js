 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDsBBBeYKwcOuAl4ZJ1Q_5-lef7wOPP_vk",
    authDomain: "ctieapp.firebaseapp.com",
    projectId: "ctieapp",
    storageBucket: "ctieapp.appspot.com",
    messagingSenderId: "872354465781",
    appId: "1:872354465781:web:614531615204992e5542bc",
    measurementId: "G-YEFB8Y0XD0"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const auth = firebase.auth();

function signUp(){
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");

    const promise = auth.createUserWithEmailAndPassword(email.value,pass.value);

    promise.catch(e=>alert(e.message));
    alert("Signed Up");
    
}