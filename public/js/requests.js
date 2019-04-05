$(document).ready(function () {
    // Event listeners
    $('#search-button').on('click', function(event) {
        event.preventDefault();
        var recipeSearch = $('#recipe-search').val().trim();
        if (!recipeSearch) {
            alert("Please enter something!");
            $('#recipe-search').val('').focus();
        } else {
            window.location = '/api/search?search=' + recipeSearch;
        }
    });

    $('.save-fave').on('click', function(event) {
        event.preventDefault();
        var data = {
            name: $(this).attr("data-name"),
            image: $(this).attr("data-image"),
            instructions: $(this).attr("data-instructions"),
            ingredientName: $(this).attr("data-ingredients"),
            ingredientMeasure: $(this).attr("data-measurements")
        };
        console.log(data);

        $.post("/api/save", data).then(function (response) {
            console.log("Data logged to server");
            console.log(response);
        });
    });

    $("#create-recipe-button").on("click", function(event) {
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

    $('.delete-fave').on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr("data-id");
        window.location = '/api/delete?id=' + id;
    });
});


    // Change full view modal text to editable text
    // ==================================================
    $(document).on('click','.update-recipe', function() {
        var $button = $(".update-recipe");
        $button.text("Save Updates");
        $button.removeClass("update-recipe").addClass("save-updates");

        var $input = $(".edit-input").attr('contenteditable');
            if ($input === "false") {
                $(".edit-input").attr('contenteditable', 'true');
            }
        $(".edit-input").addClass("inline-edit-styling");

    });

    $(document).on('click','.save-updates', function() {

        var data = {
            id: $(".save-updates").attr('data-id'),
            instructions: $("#instructions-update").text(),
            ingredientName: $("#ingredients-update").text(),
            ingredientMeasure: "something",
            comments: $("#comments-update").text()
        }

        var $button = $(".save-updates");
        $button.text("Update Recipe");
        $button.removeClass("save-updates").addClass("update-recipe");

        var $stopInput = $(".edit-input").attr('contenteditable');
            if ($stopInput === "true") {
                $(".edit-input").attr('contenteditable', 'false');
            }

                    
        $(".edit-input").removeClass("inline-edit-styling");

        $.ajax({
            url: "/api/update",
            type: "PUT",
            data: data
        }).then(function(response) {
            console.log(response);
        });
    });
    // ==================================================