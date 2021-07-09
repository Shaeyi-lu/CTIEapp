
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBM75V8Mm881ufS4hCxtSnkUus3uNWYkg4",
    authDomain: "form-204e2.firebaseapp.com",
    projectId: "form-204e2",
    storageBucket: "form-204e2.appspot.com",
    messagingSenderId: "506325767761",
    appId: "1:506325767761:web:c2eed99dfc60bdcf3a8a70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");

    const promise = auth.createUserWithEmailAndPassword(email.value, pass.value);
    

    promise.catch(e => alert(e.message));
    alert("Signed Up");
    
}