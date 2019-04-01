
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAsThNShgq4fKrF4P6MXxYKXu0_QlycYrM",
    authDomain: "yumme-aa883.firebaseapp.com",
    databaseURL: "https://yumme-aa883.firebaseio.com",
    projectId: "yumme-aa883",
    storageBucket: "yumme-aa883.appspot.com",
    messagingSenderId: "1034737329949"
};
firebase.initializeApp(config);

$(document).ready(function () {

    //event listeners
    $('#login').on('click', e => {
        //grab dom elements
        var emailText = $('#email').val();
        var password = $('#password').val();

        firebase.auth().signInWithEmailAndPassword(emailText, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    });

    $('#sign-up').on('click', e => {
        event.preventDefault();
        console.log('sign up');
        //grab dom elements
        var emailText = $('#signup-email').val();
        var password = $('#signup-password').val();

        firebase.auth().createUserWithEmailAndPassword(emailText, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    });

    $('#log-out').on('click', e => {
        firebase.auth().signOut();
    });

    //
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var uid = user.uid;
            console.log(displayName);
            console.log(email);
            console.log(uid);

        } else {
            console.log('no one is signed in');
        }
    });

});