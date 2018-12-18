/*
Nguyen Duc Hoang (Mr)
Youtube channel: https://www.youtube.com/c/nguyenduchoang
Programming tutorial channel
*/
function isEmail(inputEmail) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(inputEmail);
}
function validatePassword(inputPassword) {
	return inputPassword.length > 4;
}

$(document).ready(function(){
    $('#email').change(function(){
        var email = $(this).val().trim();
        // alert(`email = ${JSON.stringify(email)}`)
        if(!isEmail(email)) {
            //Error ?
            $(".emailError").html("Email is not valid format");
        } else {
            $(".emailError").html("");
        }
    });
    $('#password').change(function(){
        var password = $(this).val();	
        if(!validatePassword(password)) {
			$(".passwordError").html("Password must be at least 5 characters");
		} else {
			$(".passwordError").html("");
		}
    });
});

