$( document ).ready(function() {

    // This creates new burgers
    $('.create-form').on('submit', function(event) {
        event.preventDefault();
        const newBurger = {
            name: $('#burgerOrder').val().trim()
        };
        $.post("/api/burgers", newBurger).then((data) => {
            location.reload();
        });
    });


    // This "Devours" the burgers
    $('.devourButton').on('click', function(event) {
        // event.preventDefault();
        const id = $(this).data('id');

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT", 
            data: {
                devoured: 1
            }
        }).then((data) => {
            location.reload();
        });
    });

    $('.deleteButton').on('click', function(event) {
        // event.preventDefault();
        const id = $(this).data('id');

        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE", 
        }).then((data) => {
            location.reload();
        });
    });
    
})