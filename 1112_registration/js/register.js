document.addEventListener("DOMContentLoaded", function(event) { 

// DOM nodes
	var emailInput = document.getElementById('email');
	var passwordInput = document.getElementById('register-password');
	var confirmInput = document.getElementById('confirm-password');
	var noEmail = document.getElementById('no-email');
	var emailFormat = document.getElementById('email-format');
	var uppercase = document.getElementById('uppercase');
	var lowercase = document.getElementById('lowercase');
	var digits = document.getElementById('digits');
	var symbol = document.getElementById('symbol');
	var length = document.getElementById('length');
	var formBottom =	document.getElementById('bottom');
	var confirmPassword = document.getElementById('confirm');
	var confirmMismatch	= document.getElementById('no-match');
// Password requirements
	var containsUppercase = /[A-Z]/;
	var containsLowercase = /[a-z]/;
	var containsDigits = /[0-9]/;
	var containsSpecialChar = /[!@#$%^&*)(+=._-]+/;
// Password test variables
	var psswrdValue = {};
	var passwordLength;
	var includesUppercase;
	var inludesLowercase;
	var includesDigits;
	var includesSpecialChar;
	var isPasswordValid;


/* Email address must be correct format */

/* ------------------------------\
	Test password on keystroke
\-------------------------------*/
	passwordInput.addEventListener( 'input', function () {
		
		psswrdValue = passwordInput.value;

		//test input value against password requirements
		var lengthTest = psswrdValue.length >= 8;
		var uppercaseTest = containsUppercase.test(psswrdValue);
		var lowercaseTest = containsLowercase.test(psswrdValue);
		var digitTest = containsDigits.test(psswrdValue);
		var specialCharTest = containsSpecialChar.test(psswrdValue);

		passwordLength = checkPasswordFormat( lengthTest , length );
		includesUppercase = checkPasswordFormat( uppercaseTest , uppercase );
		inludesLowercase = checkPasswordFormat( lowercaseTest , lowercase );
		includesDigits = checkPasswordFormat( digitTest , digits );
		includesSpecialChar = checkPasswordFormat( specialCharTest , symbol );

		isPasswordValid =	(	passwordLength &&
								includesUppercase &&
								inludesLowercase &&
								includesDigits &&
								includesSpecialChar );
	
		/* -------------------\
			Password Tester
		\--------------------*/
		function checkPasswordFormat( test, requirement ) {

			test ? psswrdValid() : psswrdNotValid();
			return test;

			 function psswrdValid() {
			 	requirement.classList.add('success');
			 }

			 function psswrdNotValid() {
			 	var removeSuccessClass = requirement.classList.remove('success');
				requirement.className === 'li success' ? removeSuccessClass : {} ;
			}	
		}

	});


/* -----------------------------\
	Open/Close password input
\------------------------------*/
var textInputs = document.getElementsByClassName('text-input');
var msg = document.getElementsByClassName('msg');
	
	
	for ( var i=0 ; i < textInputs.length ; i++ ) {
		textInputs[i].addEventListener( 'focus', function() {
			

			for( i = 0 ; i < this.parentNode.childNodes.length ; i++ ) {
				/*if (this.parentNode.childNodes.className === 'msg error' ) {
					console.log( this.id );
					this.parentNode.childNodes.classList.remove('error');
				}*/
			}
		});
	}	
			
	passwordInput.addEventListener( 'focus', function() {
			
			formBottom.classList.add('animate-bottom');

	});

	confirmInput.addEventListener( 'blur', function() {
		
		var isDrawerOpen = formBottom.className === 'form animate-bottom';
		
		function closeDrawer() { formBottom.classList.remove('animate-bottom') }
		
		function errors() {
			for( i = 0; i < msg.length; i++ ) {
				if ( msg[i].tagName === "LI" ) {
					if ( msg[i].className !== 'msg success' ) {
						msg[i].classList.add('error');
					}
				}
			}
		}
		isPasswordValid ? closeDrawer() : errors() ;
	});

/* ----------------------------------\
		Open/Close confirm input
\-----------------------------------*/
var confirmValue = {};

	confirmInput.addEventListener( 'focus', function() {

		var psswrdLength = psswrdValue.length;

		// Dont show confirm test unless there is a password
		if ( psswrdLength > 0 ) {
				confirmPassword.classList.remove('hidden');
		}
	});

	confirmInput.addEventListener( 'input', function() {
			
		confirmValue = confirmInput.value;
		
		console.log( confirmValue );

		if ( psswrdValue === confirmValue ) {
			confirmPassword.classList.remove('error');
			confirmPassword.classList.add('success');
		} else {
			confirmPassword.classList.remove('success');
		}
	});

	confirmInput.addEventListener( 'blur', function(){
		
		console.log( psswrdValue );

		function passwordMismatchMsg() {
			if ( psswrdValue > 0 ) {
				confirmPassword.classList.add('hidden');
				confirmMismatch.classList.add('error');
				confirmMismatch.classList.remove('hidden');  
			}
		}
		psswrdValue !== confirmValue ? passwordMismatchMsg() : {} ; 
	});


/* ----------------------------------\
			email  Input
\-----------------------------------*/
	emailInput.addEventListener( 'blur', function() {
		var emailInputValue = emailInput.value;
		var emailInputLength = emailInputValue.length;
		var EmailFormat = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/i;
		var hasEmailFormat = EmailFormat.test(emailInputValue);

		if ( emailInputLength === 0 ) {

				emailFormat.classList.add('hidden');
				noEmail.classList.remove('hidden');

		} else if ( hasEmailFormat ) {

				noEmail.classList.add('hidden');
				emailFormat.classList.add('hidden');
	
		} else {

				noEmail.classList.add('hidden');
				emailFormat.classList.remove('hidden');
				noEmail.classList.add('hidden');

		}
	});
	var terms = document.getElementById('terms-checkbox');

	terms.addEventListener('click', function(){
    	var button = document.getElementById('submit-button');

    if(terms.checked)
      button.disabled = false;
    else
     button.disabled = true;    
  	});  
});