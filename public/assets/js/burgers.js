$( document ).ready(function() {

    // This creates new burgers
    $('.create-form').on('submit', function(event) {
        event.preventDefault();
        const newBurger = {
            name: $('#burgerOrder').val().trim()
        };
        $.post("/api/burgers", newBurger).then((data) => {
            console.log(data);
            console.log('New burger creation...going down....');
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
            console.log(data);
            console.log(`Devoured that thing!!!`);
            location.reload();
        });
    });

    $('.deleteButton').on('click', function(event) {
        // event.preventDefault();
        const id = $(this).data('id');

        $.ajax(`/api/burgers/${id}`, {
            type: "DELETE", 
        }).then((data) => {
            console.log(data);
            console.log(`Deleted that thing!!!`);
            location.reload();
        });
    });
    
})