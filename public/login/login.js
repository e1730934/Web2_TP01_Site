
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

// Initialize the FirebaseUI Widget using Firebase.
var uiConfig = {
    signInSuccessUrl: 'accesEmployes.html',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
}

var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

