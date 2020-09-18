$( document ).ready(function() {

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



})