const firebaseConfig = {
    apiKey: "AIzaSyDo6uEMccejvqobrUk0aqDrLaquJ0r3Vp8",
    authDomain: "projetweb2-5b51e.firebaseapp.com",
    databaseURL: "https://projetweb2-5b51e-default-rtdb.firebaseio.com",
    projectId: "projetweb2-5b51e",
    storageBucket: "projetweb2-5b51e.appspot.com",
    messagingSenderId: "632401154469",
    appId: "1:632401154469:web:6af8cf132b03cc0cf1184c",
    measurementId: "G-9WYNQPBGQ7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Override form signup with firebase signup
const form = document.getElementById("signup-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // catch errors
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        form.reset();
    });
})
