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

//Reference messages collection
var messagesRef = firebase.database().ref('messages');


//Send form to realtime database
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
    console.log(`${e.target.name.value} ${e.target.email.value} ${e.target.message.value}`);
    e.preventDefault();
    messagesRef.push({
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value
    });
    form.reset();
    alert("Message sent!");
})
