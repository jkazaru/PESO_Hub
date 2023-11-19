document.getElementById("btn-back").onclick = function () {
    location.href = "sample-html.html";
};


document.getElementById("btn-next").addEventListener("click", function(event){
    var form = document.querySelector('form'); // Replace 'form' with the id or class of your form if it has one

    if (!form.checkValidity()) {
        return; // If the form is not valid, exit the function
    }

    var fields = ['validationCustom01', 'validationCustom02', 'validationCustom03', 'validationCustom04, ', 'validationCustom05'];
    var allFieldsFilled = fields.every(function(id) {
        var field = document.getElementById(id);
        return field && field.value;
    });

    if(allFieldsFilled){
        event.preventDefault(); // Prevent form from submitting only if all fields are filled
        location.href = "user-nav-bar.html";
    }
});


// document.getElementById("btn-next").addEventListener("click", function(event){
//     event.preventDefault()

//     var fields = ['validationCustom01', 'validationCustom02', 'validationCustom03', 'validationCustom04'];
//     var allFieldsFilled = fields.every(function(id) {
//         var field = document.getElementById(id);
//         return field && field.value;
//     });

//     if(allFieldsFilled){
//         location.href = "user-nav-bar.html";
//     }
// });



