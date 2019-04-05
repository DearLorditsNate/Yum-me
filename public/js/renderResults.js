///USER-ID global for signed-in status
var uid;

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

//firebase authentication listener, and navbar button hiding for signed out/signed in users
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        uid = user.uid;
        $('#search, #saved, #log-out').show();
        $('#home').hide();
        $('#welcome-message').show();
        console.log('USER ID= ' + uid);

        //ajax call to get user's name and populate nav bar with their name
        $.get('/api/User', {
            firebaseId: uid
        }).then(function (response) {
            $('#nav-bar-name').text(response.firstName);
        });
    } else {
        console.log('no one is signed in');
        $('#search, #saved, #log-out').hide();
        $('#welcome-message').hide();
    };
});


$(document).ready(function () {

    //hide wrong email/password message
    $('#bad-sign-in-message').hide()

    // Event listeners
    $('#search-button').on('click', function (event) {
        event.preventDefault();
        var recipeSearch = $('#recipe-search').val().trim();
        if (!recipeSearch) {
            alert("Please enter something!");
            $('#recipe-search').val('').focus();
        } else {
            window.location = '/api/search?search=' + recipeSearch;
        }
    });

    //save a favorite
    $('.save-fave').on('click', function (event) {
        event.preventDefault();
        var data = {
            name: $(this).attr("data-name"),
            image: $(this).attr("data-image"),
            instructions: $(this).attr("data-instructions"),
            ingredientName: $(this).attr("data-ingredients"),
            ingredientMeasure: $(this).attr("data-measurements"),
            firebaseID: uid
        };
        console.log(data);

        $.post("/api/save", data).then(function (response) {
            console.log("Data logged to server");
            console.log(response);
        });
    });

    //create a new recipe
    $("#create-recipe-button").on("click", function (event) {
        event.preventDefault();
        var data = {
            name: $('#name').val(),
            image: $('#photo').val(),
            instructions: $('#instructions').val(),
            ingredientName: $('#ingredients').val(),
            ingredientMeasure: "something"
        }

        $.post('/api/save', data).then(function (response) {
            console.log("Data logged to server");
            console.log(response);
        });
    });

    //delete a favorite
    $('.delete-fave').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr("data-id");
        window.location = '/api/delete?id=' + id;
    });

    //load saved pages with dynamic user id parameter
    $('#saved').on('click', function () {
        window.location = '/favorites/' + uid;
    })

    //sign in user with firebase
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

    //sign up user with firebase
    $('#sign-up').on('click', e => {
        event.preventDefault();
        //grab dom elements
        var firstName = $('#first-name').val();
        var lastName = $('#last-name').val();
        var emailText = $('#signup-email').val();
        var password = $('#signup-password').val();

        firebase.auth().createUserWithEmailAndPassword(emailText, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });

        //timer to allow firebase to create the ID before sending it to SQL
        setTimeout(function () {
            $.post('/api/newUser', {
                firstName: firstName,
                lastName: lastName,
                firebaseId: uid,
                email: emailText,
                password: password
            }).then(function (response) {
                console.log("User created")
                console.log(response)
            });
        }, 2000);

    });

    //log out user
    $('#log-out').on('click', e => {
        firebase.auth().signOut();
    });

    //signup AND login submit button timer and authentication check
    $('.redirect-submit-button').on('click', function () {
        setTimeout(function () {
            if (uid !== undefined) {
                window.location = '/search'
            } else {
                $('#bad-sign-in-message').show();
                $('#email').val("")
                $('#email').val("")
            }
        }, 2000)
    })

    //update recipe
    $(document).on('click', '.update-recipe', function () {
        event.preventDefault();
        var $button = $(".update-recipe");
        $button.text("Save Updates");
        $button.removeClass("update-recipe").addClass("save-updates");

        var $input = $(".edit-input").attr('contenteditable');
        if ($input === "false") {
            $(".edit-input").attr('contenteditable', 'true');
        }
        $(".edit-input").addClass("inline-edit-styling");

    });

    $(document).on('click', '.save-updates', function () {
        event.preventDefault();
        var data = {
            id: $(this).attr('data-id'),
            instructions: $("#instructions-update").text().trim(),
            ingredientName: $("#ingredients-update").text().trim(),
            ingredientMeasure: "something",
            comment: $("#full-view-comments").text().trim()
        }

        console.log(data);

        $.ajax({
            url: "/api/update",
            type: "PUT",
            data: data
        }).then(function (response) {
            console.log(response);
        });

        var $button = $(".save-updates");
        $button.text("Update Recipe");
        $button.removeClass("save-updates").addClass("update-recipe");

        var $stopInput = $(".edit-input").attr('contenteditable');
        if ($stopInput === "true") {
            $(".edit-input").attr('contenteditable', 'false');
        }

        $(".edit-input").removeClass("inline-edit-styling");

    });
});