(function(){
// DOM nodes
	var passwordInput = document.getElementById('password');
	var passConfirmInput = document.getElementById('confirm-password')
	var uppercase = document.getElementById('uppercase');
	var lowercase = document.getElementById('lowercase');
	var digits = document.getElementById('digits');
	var symbol = document.getElementById('symbol');
	var length = document.getElementById('length');
	var formBottom =	document.getElementById('bottom');
	var li = document.getElementsByClassName('li');
// Password requirements
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
// State checks
	var isPasswordValid =	(	passwordLength &&
								includesUppercase &&
								inludesLowercase &&
								includesDigits &&
								includesSpecialChar );
	var isDrawerOpen = formBottom.className ====  'form animate-bottom';

/* Email address must be correct format */

/* ------------------------------\
	Test password on keystroke
\-------------------------------*/
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

		// If user invalidates password after it was valid
		isPasswordValid ? ( console.log(isPasswordValid) ) : isDrawerOpen ? ( console.log(isDrawerOpen) ): openPsswrdDrawer();
	});

	/* -------------------\
		Password Tester
	\--------------------*/
		function checkPasswordFormat( test, requirement ) {

			test ? psswrdIsValid() : removeSuccess();
			return test;

			 function psswrdIsValid() {
			 	requirement.classList.add('success');
			 }

			 function removeSuccess() {
			 	var removeSuccessClass= requirement.classList.remove('success');
				requirement.className === 'li Success' ? removeSuccessClass : {} ;
			}			
	}
/* ----------------------------------\
	Open/Close requirements drawer
\-----------------------------------*/
	passwordInput.addEventListener( 'focus', openPsswrdDrawer() );
		
	function openPsswrdDrawer(){
		isPasswordValid? {} : formBottom.classList.add('animate-bottom');
	}

	passwordInput.addEventListener( 'blur', function(){

		isPasswordValid ? (
			( 
			formBottom.classList.remove('animate-bottom') ,
			console.log(isPasswordValid)
			)
		) : (
			errors()
		);
	});

	function errors(){
		for( i = 0; i < li.length; i++ ) {
			//li[i].className === "li success" ? {} :(
				li[i].classList.add('error')
			//);
		}
	}

})();