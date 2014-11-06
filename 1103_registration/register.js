(function(){
// DOM Elements
	var passwordInput = document.getElementById('password');
	var passConfirmInput = document.getElementById('confirm-password')
	var uppercase = document.getElementById('uppercase');
	var lowercase = document.getElementById('lowercase');
	var digits = document.getElementById('digits');
	var symbol = document.getElementById('symbol');
	var length = document.getElementById('length');
	var formBottom =	document.getElementById('bottom');
	var li = document.getElementsByClassName('li');
// Password Requirements
	var containsUppercase = /[A-Z]/;
	var containsLowercase = /[a-z]/;
	var containsDigits = /[0-9]/;
	var containsSpecialChar = /[!@#$%^&*)(+=._-]+/;
// Password test variables
	var passwordLength;
	var includesUppercase;
	var inludesLowercase;
	var includesDigits;
	var includesSpecialChar;
	var isPasswordValid =	(	passwordLength &&
								includesUppercase &&
								inludesLowercase &&
								includesDigits &&
								includesSpecialChar );

/* email address must be correct format */

/* -------------\
	Test password on keystroke
\---------------*/
	passwordInput.addEventListener( 'input', function () {

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
		Password Tester
	\---------------*/
		function checkPasswordFormat( test, requirement ) {

			test ? psswrdReqMet() : removeSuccess();
			return test;

			 function psswrdReqMet() {

			 	requirement.classList.add('success');
			 }

			 function removeSuccess() {

			 	var removeSuccess= requirement.classList.remove('success');
				requirement.className === 'li Success' ? removeSuccessClass : {} ;
			}			
	}
/* -------------\
	Open and Close requirements drawer
\---------------*/
	passwordInput.addEventListener( 'focus', function(){
		
		isPasswordValid ? {} : formBottom.classList.add('animate-bottom');
		
	});
	// TODO make this modular so you can use if for Confirm password
	passwordInput.addEventListener( 'blur', function(){

		isPasswordValid =	(	passwordLength &&
								includesUppercase &&
								inludesLowercase &&
								includesDigits &&
								includesSpecialChar );
		isPasswordValid ? (
			( 
			formBottom.classList.remove('animate-bottom') ,
			console.log(isPasswordValid)
			)
		) : (
			errors()
		);
	})

	function errors(){
		for( i = 0; i < li.length; i++ ) {
			//li[i].className === "li success" ? {} :(
				li[i].classList.add('error')
			//);
			// TODO make this per only the correct li
		}
	}
/* -------------\
	If password passes test
\---------------*/

})();