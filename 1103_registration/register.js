(function(){
// DOM Elements
	var passwordInput = document.getElementById('password');
	var uppercase = document.getElementById('uppercase');
	var lowercase = document.getElementById('lowercase');
	var digits = document.getElementById('digits');
	var symbol = document.getElementById('symbol');
	var length = document.getElementById('length');
// Password Requirements
	var containsUppercase = /[A-Z]/;
	var containsLowercase = /[a-z]/;
	var containsDigits = /[0-9]/;
	var containsSpecialChar = /[!@#$%^&*)(+=._-]+/;

	var passwordLength;
	var includesUppercase;
	var inludesLowercase;
	var includesDigits;
	var includesSpecialChar;

/* email address must be correct format */
/* -------------\
	Password Tester
\---------------*/
		function checkPasswordFormat( test, requirement ) {
			if (test) {
				requirement.classList.add("success");
			//	return true;
			}else{
				requirement.classList.remove("success");
			//	return false;
		}
	}
/* -------------\
	Test on input event
\---------------*/
	passwordInput.addEventListener( 'input', function() {
		var value = passwordInput.value;
		//test input value against password requirements
		var lengthTest = value.length >= 8;
		var uppercaseTest = containsUppercase.test(value);
		var lowercaseTest = containsLowercase.test(value);
		var digitTest = containsDigits.test(value);
		var specialCharTest = containsSpecialChar.test(value);

		passwordLength = checkPasswordFormat( lengthTest , length );
		includesUppercase = checkPasswordFormat( uppercaseTest , uppercase );
		inludesLowercase = checkPasswordFormat( lowercaseTest , lowercase );
		includesDigits = checkPasswordFormat( digitTest , digits );
		includesSpecialChar = checkPasswordFormat( specialCharTest , symbol );
	});

/* -------------\
	If password passes test
\---------------*/
	// password.blur(function() {
	// 	if ( !passwordLongEnough || !mixedCase || !includesDigits || !includesSpecialChar ) {
	// 		$(this).addClass('errorColor');
	// 	}
	// 	else {
	// 		$(this).removeClass('errorColor');
	// 		$(this).next("ul").slideUp(600);
	// 		$(this).closest("div").delay(800).removeClass('passwordHelp');
	// 	}
	// });//end blur

// 	// If Password field is in focus,
// 		ul variables
// 		// 	show psswrdTester
// 			if psswrdTester !== all success
// 		// 	else hide psswrdTester

// 	// Password Requirements
// 		TEST VARIABLES
// 		// Longer than 8 characters
// 		// Has uppercase
// 		// Has lowercase
// 		// Has a numeric digit
// 		// Has a special characters
// 		TEST PASSWORD on keyup
// 			password.value within function
// 		// If password value pass (req)
// 		// 	show success in li
// 		// 	else remove

// /* Match Confirm Password */

// /* 1st name, last name, company name must have more than 2 characters */
	
// 	on.keyupfunction(){
// 		// test
// 	}
})();