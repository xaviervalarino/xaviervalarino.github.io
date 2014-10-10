$(document).ready(function(){
	$('#txtEmail').focus();
		//check whether cookies is enable
		$.cookie('login','ok');
		if( $.cookie('login') === null ){
			$('#msgErr').show().html('You need to have cookies enabled to register');
		}
		else
		{
			$.removeCookie('login');
		}
});//end function

$(function() {
//Check User email
	var $email = $('input[name="email"]');

	$email.on("blur", function(){

		var emailVal = $email.val();
		var emailLength = $email.val().length;
		var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g;
		var noEmailInput = $('<p class="error"> Please check your email format </p>');
		var wrongEmailFormat = $('<p class="error"> You have not entered an email address </p>');

			//Is email format valid? 
			if ( !emailExp.test(emailVal) ){
				$email.next().remove();
				$email.addClass("errorColor");
				if ( emailLength > 0 ){
					$email.after(noEmailInput);
				} else {
					$email.after(wrongEmailFormat);
				}
			}
			else {
				$email.next().remove();
				$email.removeClass('errorColor');
			}
	}); // end blur
}); // end function

// WATCH USER PASSWORD INPUT
// Watch input for password
// update password help <li> as criteria is met
$(function(){

	password = $('input[name="password"]');
	var passConfirm = $('input[name="password_confirmation"]');
		
		// For password format tester
		var characters = $("#characters");
		
		var uplower = $("#uplower");
		var charCase = new RegExp('[A-Z].*?[a-z]|[a-z].*?[A-Z]');


		var numbers = $("#numbers");
		var digits = new RegExp('[0-9]+');
		
		var special = $("#special");
		var specialChar = new RegExp('[!@#$%^&*)(+=._-]+');

		var checkmark = "<span>&#x2713</span>";
		var errCross = "<span>X</span>";

		var passwordLongEnough;
		var mixedCase;
		var includesDigits;
		var includesSpecialChar;

//slide in password tester	
    password.focus(function() {
        $(this).next("ul").slideDown(600);
        $(this).closest("div").addClass('passwordHelp').fadeIn(400);
    });
	//Make sure password has at least 8 characters
		password.on('keyup',function(){
			if ( this.value.length >= 8 ){

				characters.addClass('green');
				characters.removeClass('error');
				$("span", characters).replaceWith(checkmark);
				
				passwordLongEnough = true;
			}
			else {

				characters.addClass('error');
				characters.removeClass('green');
				$("span", characters).replaceWith(errCross);

				passwordLongEnough = false;
			}
	//Make sure user password has at least 1 uppercase and 1 lowercase
			if ( this.value.match(charCase) ){

				uplower.addClass('green');
				uplower.removeClass('error');
				$("span", uplower).replaceWith(checkmark);

				mixedCase = true;
			}
			else {

				uplower.addClass('error');
				uplower.removeClass('green');
				$("span", uplower).replaceWith(errCross);

				mixedCase = false;
			}
	// Has any digit one or more times
			if ( this.value.match(digits)){

				numbers.addClass('green');
				numbers.removeClass('error');
				$("span", numbers).replaceWith(checkmark);

				includesDigits = true;
			}
			else {

				numbers.addClass('error');
				numbers.removeClass('green');
				$("span", numbers).replaceWith(errCross);

				includesDigits = false;
			}
	// Has special characters		
			if ( this.value.match(specialChar) ){

				special.addClass('green');
				special.removeClass('error');
				$("span", special).replaceWith(checkmark);

				includesSpecialChar = true;
			}
			else {

				special.addClass('error');
				special.removeClass('green');
				$("span", special).replaceWith(errCross);
			
				includesSpecialChar = false;
			}
		});//end keyup
	// Check password, slide up tester if true
		password.blur(function() {
			if ( !passwordLongEnough || !mixedCase || !includesDigits || !includesSpecialChar ) {
				$(this).addClass('errorColor');
			}
			else {
				$(this).removeClass('errorColor');
				$(this).next("ul").slideUp(600);
				$(this).closest("div").delay(800).removeClass('passwordHelp');
			}
		});//end blur

//Check that Password and Confirm Password match
	passConfirm.blur(function() {

		var noneMsg = '<p class="error" id="none"> You must confirm your password </p>';
		var none = $('#none');
		var noneConfirm = none.length;

		var mismatchMsg = '<p class="error" id="mismatch"> Passwords do not match </p>';
		var mismatch = $('#mismatch');
		var mismatchConfirm = mismatch.length;

		if ( this.value == 0 ){

			$(this).addClass('errorColor');
				if ( mismatchConfirm ) {
					mismatch.remove();
				}
				if ( !noneConfirm ) {
					$(this).after(noneMsg);
				}
		}
		else if ( password.val() != this.value ){

			$(this).addClass('errorColor');
				if ( noneConfirm ) {
					none.remove();
				}
				if ( !mismatchConfirm ) {
					$(this).after(mismatchMsg);
				}
		}
		else{
			none.remove();
			mismatch.remove();
			$(this).removeClass('errorColor');

		}
	});//end keyup

//~~~~~~~~~~~~~~ TO DO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Build out function with variables that are called to check if field is empty
//Can these variables be in an array?
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//	function isFieldEmpty(){
		
//		if ( fieldEmpty ) {
//			$(this).addClass('errorColor');
//			if ( !errorMsgExists ) {
//				$(this).after(specificErrorMessage);
//			}
//		else {
//			$(this).removeClass('errorColor');
//			specificErrorMessage.remove();
//		}
//	}//end isFieldEmpty
//Run function for First Name.blur()
//Run functon for Last Name.blur()
//Run Function for Company Name.blur()

});//end function

var validLicenseKey = "37KE8CKAHVJ6M336";
var outOfDateLicenseKey = "47KE8CKAHVJ6M336";

var objRegisterJSON = {
	"agent_version" : "1.1.1.1",
	"license_key" : "37KE8CKAHVJ6M336",
	"hostname" : "TANTANI-LSE",
	"device_type" : "notebook",
	"os_info" : {
		"os_family" : "Windows",
		"os_name" : "Windows 7 Enterprise",
		"os_vendor" : "Microsoft Corp.",
		"os_version" : "6.1.7601",
		"os_sp_version" : "1.7601",
		"os_architecture" : "64-Bit"
	},
	"user_info" : [ {
		"username" : "tantani",
		"domain" : "OPSWAT"
	} ],
	"hwid" : "ABCDEFGH",
	"network_adapter_info" : [ {
		"mac" : "00:14:d1:17:2b:ab",
		"ipv4" : "10.0.4.108",
		"ipv6" : "fe80::986e:62ee:8cf4:333"
	}, {
		"mac" : "00:21:9b:06:4b:96",
		"ipv4" : "169.254.147.143",
		"ipv6" : "fe80::b0ad:3ff:ff18:938f"
	} ]
};

var objReportAliveJSON = {
	"agent_version" : "1.1.1.1",
	"agent_token" : "123456789012345678901234",
	"hostname" : "TANTANI-LSE",
	"hwid" : "ABCDEFGH",
	"soh_hash" : "Sn3xjFGVKgXseLryYUPvfFcFtUA"
};

XMLHttpFactories = [ function() {
	return new XMLHttpRequest();
}, function() {
	return new ActiveXObject("Msxml2.XMLHTTP");
}, function() {
	return new ActiveXObject("Msxml3.XMLHTTP");
}, function() {
	return new ActiveXObject("Microsoft.XMLHTTP");
} ];

function createXHRObject() {
	var xhrobject = null;
	for ( var i = 0; i < XMLHttpFactories.length; i++) {
		try {
			xhrobject = XMLHttpFactories[i]();
		} catch (e) {
			continue;
		}
		break;
	}
	return xhrobject;
}

function postRegisteringJSON() {
	var methodName = "POST";
	var url = "http://localhost:8080/gears/api/1/agent/register";
	var xmlHttp = createXHRObject();
	xmlHttp.open(methodName, url, true);
	xmlHttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlHttp.send(JSON.stringify(objRegisterJSON));
}

function postReportAliveJSON() {
	var methodName = "POST";
	var url = "http://localhost:8080/gears/api/1/agent/imhere";
	var xmlHttp = createXHRObject();
	xmlHttp.open(methodName, url, true);
	xmlHttp.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
	xmlHttp.send(JSON.stringify(objReportAliveJSON));
}

// check login
function login() {
	var email = document.getElementById("txtEmail").value;
	var password = document.getElementById("txtPassword").value;
	var lblMsg = document.getElementById("msgErr");
	// validate input data
	if (email === '' || password === '') {
		lblMsg.innerHTML = 'Please fill in all required field with a "*" ';
		$('#msgErr').show().delay(5000).fadeOut(200);
		return false;
	}
	if (!isValidEmail(email)) {
		lblMsg.innerHTML = 'Invalid email format';
		$('#msgErr').show().delay(5000).fadeOut(200);
		return false;
	}
	return true;
}

// check register
function register() {

	// postRegisteringJSON();
	// postReportAliveJSON();

	var email = document.getElementById('txtEmail').value;
	var pass = document.getElementById('txtRegPass').value;
	var passConfirm = document.getElementById('txtRegPassConfirm').value;
	var fName = document.getElementById('txtFName').value;
	var lName = document.getElementById('txtLName').value;
	var checked = document.getElementById('cbAgree').checked;
	var lblMsg = document.getElementById("msgErr");

	if (email == '' || pass == '' || passConfirm == '' || fName == ''
			|| lName == '') {

		lblMsg.innerHTML = 'Please fill in all required field with a "*" ';
		$('#msgErr').show().delay(5000).fadeOut(200);
		return false;
	}
	if (!isValidEmail(email)) {
		lblMsg.innerHTML = 'Invalid email format';
		$('#msgErr').show().delay(5000).fadeOut(200);
		return false;

	}
	if (pass != passConfirm) {
		lblMsg.innerHTML = 'Password does not match the previous value, please type again.';
		$('#msgErr').show().delay(5000).fadeOut(200);
		return false;
	}

	if (!checked) {
		lblMsg.innerHTML = 'Please agree to the OPSWAT terms';
		$('#msgErr').show().delay(5000).fadeOut(200);
		return false;
	}
	return true;
}

// check whether check box is checked
function checkValidData() {
	var cbAgree = document.getElementById("cb_agree");
	if (cbAgree != null) {
		return cbAgree.isChecked;
	}
	return false;
}
// validate email format
function isValidEmail(email) {
	var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regEx.test(email);
}

function doAction(form){
	if($('#panelSignin').is(':hidden'))
	{
		//user login
		form.action = "register";
		return register();
	}
	else
	{
		//register new customer
		form.action = "checklogin";
		return login();
	}
}
