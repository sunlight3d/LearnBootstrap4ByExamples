function isEmail(inputEmail) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(inputEmail);
}
function validatePassword(inputPassword) {
	return inputPassword.length() > 4;
}

$(document).ready(function (){
	$("#email").change(function(){				
		var email = this.val().strip();
		if(!isEmail(email)) {
			$("#email").html("Email is not valid format");
		} else {
			$("#email").html("");
		}
	});
	$("#password").change(function(){				
		var password = this.val();		
		if(!isEmail(password)) {
			$("#password").html("Password must be at least 5 characters");
		} else {
			$("#password").html("");
		}
	});
});




