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

initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var uid = user.uid;
            user.getIdToken().then(function (accessToken) {
                document.getElementById('sign-in-status').textContent = 'Signed in';
                document.getElementById('account-details').innerHTML = `
            <form id="CV Send">
            <div class="form-group field">
                <label class="label" for="firstName">First Name</label>
                <input type="text" class="form-control input" id="firstName" placeholder="First Name">
            </div>
            <div class="form-group">
                <label class="label" for="lastName">Last Name</label>
                <input type="text" class="form-control input" id="lastName" placeholder="Last Name">
            </div>
            <div class="form-group">
                <label class="label" for="homePhone">Home Phone</label>   
                <input type="tel" class="form-control input" id="homePhone" placeholder="Home Phone">
            </div>
            <div class="form-group">
                <label class="label" for="cellPhone">Cell Phone</label>
                <input type="tel" class="form-control input" id="cellPhone" placeholder="Cell Phone">
            </div>
            <div class="form-group">
                <label class="label" for="email">Email</label>
                <input type="email" class="form-control input" id="email" placeholder="Email">
            </div>
            <div class="form-group field">
                <label class="label" for="post">Post</label>
                <div class="control">
                    <div class="select">
                        <select class="form-control" id="post">
                            <option>Poste 1</option>
                            <option>Poste 2</option>
                            <option>Poste 3</option>
                            <option>Poste 4</option>
                            <option>Poste 5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group field">
                <label class="label" for="quebecRegion">Quebec Region</label>
                <div class="control">
                    <div class="select">
                        <select class="form-control" id="quebecRegion">
                            <option>Region 1</option>
                            <option>Region 2</option>
                            <option>Region 3</option>
                            <option>Region 4</option>
                            <option>Region 5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label class="label" for="cv">CV</label>
                <input type="file" class="form-control-file input" id="cv">
            </div>
            <div class="form-group">
                <label class="label" for="activitySectors">Activity Sectors</label>
                <div class="form-check">
                    <input class="form-check-input checkbox" type="checkbox" value="" id="activitySectors1">
                    <label class="checkbox" for="activitySectors1">
                        Activity Sector 1
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input checkbox" type="checkbox" value="" id="activitySectors2">
                    <label class="checkbox" for="activitySectors2">
                        Activity Sector 2
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input checkbox" type="checkbox" value="" id="activitySectors3">
                    <label class="checkbox" for="activitySectors3">
                        Activity Sector 3
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input checkbox" type="checkbox" value="" id="activitySectors4">
                    <label class="checkbox" for="activitySectors4">
                        Activity Sector 4
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input checkbox" type="checkbox" value="" id="activitySectors5">
                    <label class="checkbox" for="activitySectors5">
                        Activity Sector 5
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary button is-primary">Submit</button>
        </form>`
                document.getElementById('account-details').innerHTML += JSON.stringify({
                    uid: uid,
                    accessToken: accessToken,
                }, null, '  ');
            });
        } else {
            // User is signed out.
            document.getElementById('sign-in-status').textContent = 'Signed out';
            document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
        }
    }, function (error) {
        console.log(error);
    });
};

window.addEventListener('load', function () {
    initApp()
});
