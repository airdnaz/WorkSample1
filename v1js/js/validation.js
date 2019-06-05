//---Beginning of salesmen.html validation---//

//Start of Form Validation
function validateFormOnSubmit() {
	if((validateName()) && (validateLastName()) && (validateAddress1()) && (validateAddress2()) && (validateZip()) && (validatePhone()) && (validateEmail()) && (validateConfirmEmail()) && (validatePassword()) && (validateConfirmPassword()) && (validateDOB()) && (validateSSN()) && (validateHire())) {
		return true;
	} else {
		return false;
	}
}
//Validate First Name
function validateName() {
	var fname = document.salesmen.firstname.value;
	var alpha = /^[a-zA-Z]+$/;
	if (fname.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter a first name</font>";
		document.getElementById('firstname').focus();
		return false;
	} else if(!fname.match(alpha)){
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Characters</font>";
		document.getElementById('firstname').focus();
		document.getElementById('firstname').value = document.getElementById('firstname').value.replace(/^\s+|\s+$/g,'');
		return false;
	} else {
		document.getElementById('firstname').value = document.getElementById('firstname').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
			return letter.toUpperCase();
		});
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate Last Name
function validateLastName() {
	var lname = document.salesmen.lastname.value;
	var alpha = /^[a-zA-Z]+$/;
	if (lname.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter a last name</font>";
		document.getElementById('lastname').focus();
		return false;
	} else if(!lname.match(alpha)){
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Characters</font>";
		document.getElementById('lastname').focus();
		document.getElementById('lastname').value = document.getElementById('lastname').value.replace(/^\s+|\s+$/g,'');
		return false;
	} else {
		document.getElementById('lastname').value = document.getElementById('lastname').value.toLowerCase().replace(/\b[a-z]/g, function(l) {
			return l.toUpperCase();
		});
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate Address
function validateAddress1() {
    var address1 = document.salesmen.address1.value;
    var alphanumeric = /^[A-Za-z\d\s,-.#]+$/;
    if(address1.length == 0) {
        document.getElementById('error').innerHTML = "<font color = 'red'> Please enter the address </font>";
        document.getElementById('address1').focus();
        return false;
    } else if(!address1.match(alphanumeric)) {
        document.getElementById('error').innerHTML = "<font color = 'red'> Invalid Characters</font>";
        document.getElementById('address1').focus();
        return false;
    } else {
        document.getElementById('error').innerHTML = "";
        return true;
    }
}
function validateAddress2() {
    var address2 = document.salesmen.address2.value;
    var alphanumeric = /^[A-Za-z\d\s,-.#]+$/;
    if(address2.length > 0) {
    	if(!address2.match(alphanumeric)) {
        document.getElementById('error').innerHTML = "<font color = 'red'> Invalid Characters</font>";
        document.getElementById('address2').focus();
        return false;
    	} else {
        	document.getElementById('error').innerHTML = "";
        	return true;
    	}
	} else {
		return true;
	}
}
//Validate Zip Code For Both Formats of ##### or #####-####
function validateZip() {
    var zipcode = document.salesmen.zip.value;
    var z = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if(zipcode.length == 0) {
        document.getElementById('error').innerHTML = "<font color = 'red'> Please enter the zip code</font>";
        document.getElementById('zip').focus();
        return false;
    } else if(!zipcode.match(z)) {
        document.getElementById('error').innerHTML = "<font color = 'red'>Format should be 12345 or 12345-6789</font>";
        document.getElementById('zip').focus();
        return false;
    } else {
        document.getElementById('error').innerHTML = "";
        return true;
    }
}
//Validate Phone # Checks To Make Sure It's Numbers Only
function validatePhone() {
	var phonefld1 = document.salesmen.phone1.value;
	var phonefld2 = document.salesmen.phone2.value;
	var phonefld3 = document.salesmen.phone3.value;
	if(phonefld1.length == 0 || phonefld2.length == 0 || phonefld3.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please make sure all phone number fields are filled in</font>";
		document.getElementById('phone1').focus();
		return false;
	} else if(isNaN(phonefld1)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Phone number should be numbers only</font>";
		document.getElementById('phone1').focus();
		return false;
	} 
	if(isNaN(phonefld2)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Phone number should be numbers only</font>";
		document.getElementById('phone2').focus();
		return false;
	} 
	if(isNaN(phonefld3)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Phone number should be numbers only</font>";
		document.getElementById('phone3').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	} 
}
//Validate E-mail Address For Right Format 
function validateEmail() {
	var Email = document.salesmen.email.value;
	var filter = /^[-a-z0-9-_]+(\.[-a-z0-9-_]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	if(Email.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter an e-mail address</font>";
		document.getElementById('email').focus();
		return false;
	} else if(!filter.test(Email)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Not a valid e-mail address</font>";
		document.getElementById('email').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate Confirm E-mail Check If Both E-mails Match
function validateConfirmEmail() {
	var Email = document.salesmen.email.value;
	var confirmEmail = document.salesmen.confirmemail.value;
	if(confirmEmail.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter an e-mail address to confirm</font>";
		document.getElementById('confirmemail').focus();
		return false;
	} else if (confirmEmail != Email) {
		document.getElementById('error').innerHTML = "<font color = 'red'>The e-mail addresses do not match</font>";
		document.getElementById('confirmemail').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Autofills Username field with text from comfirmemail field if first two emails match
function validateUsername() {
	var confirmEmail = document.salesmen.confirmemail.value;
	document.getElementById('username').value = confirmEmail;
}
//Validate Password
function validatePassword() {
	var p1 = document.salesmen.password.value;
	var user = document.salesmen.username.value;
	var passw = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/; 
	if(p1.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter a password</font>";
		document.getElementById('password').focus();
		return false;
	} else if (p1.length < 6) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Password field must contain 6 characters</font>";
		document.getElementById('password').focus();
		return false;
	} else if(!p1.match(passw)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Password must contain letters, numbers, and no special Characters</font>";
		document.getElementById('password').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate Confirm Password Check If Both Passwords Are The Same
function validateConfirmPassword() {
	var p1 = document.salesmen.password.value;
	var p2 = document.salesmen.confpassword.value;
	if(p2.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter a password to confirm</font>";
		document.getElementById('confpassword').focus();
		return false;
	} else if(p2.length < 6) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Not enough characts must have 6 characters</font>";
		document.getElementById('confpassword').focus();
		return false;
	} else if(p2 != p1) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Passwords do not match</font>";
		document.getElementById('confpassword').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate DOB If Input Has Right Format
function validateDOB() {
	var birthday = document.salesmen.dob.value;
	var checkdate = /^(0[1-9]|1[0-2])\/((0[1-9]|2\d)|3[0-1])\/((19\d\d)|([2-9]{1}\d{3}))$/;
	if(birthday.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter your birth date</font>";
		document.getElementById('dob').focus();
		return false;
	} if(!checkdate.test(birthday)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Format should be MM/DD/CCYY</font>";
		document.getElementById('dob').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate SSN To Make Sure It's Numbers Only
function validateSSN() {
	var s1 = document.salesmen.SSN1.value;
	var s2 = document.salesmen.SSN2.value;
	var s3 = document.salesmen.SSN3.value;
	if(s1.length == 0 || s2.length == 0 || s3.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please make sure all fields for SSN are filled in</font>";
		document.getElementById('SSN1').focus();
		return false;
	} else if(isNaN(s1)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid characters make sure it's numbers only</font>";
		document.getElementById('SSN1').focus();
		return false;
	} 
	if(isNaN(s2)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid characters make sure it's numbers only</font>";
		document.getElementById('SSN2').focus();
		return false;
	} 
	if(isNaN(s3)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid characters make sure it's numbers only</font>";
		document.getElementById('SSN3').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate Hire Date To Make Sure It's In Right Format
function validateHire() {
	var hire = document.salesmen.hiredate.value;
	var checkdate = /^((((0[13578])|(1[02]))[\/]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\/]?(([0-2][0-9])|(30)))|(02[\/]?[0-2][0-9]))[\/]?\d{4}$/;
	if(hire.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please choose a hire date</font>";
		document.getElementById('hiredate').focus();
		return false;
	} else if(!checkdate.test(hire)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Date Format</font>";
		document.getElementById('hiredate').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
function resetError() {
	document.getElementById('error').innerHTML = "";
}
//End of salesmen.html validation//


//---Beginning of employees.html validation---//

//Form Validation
function validateFormOnSubmit() {
	if((validateFirstName()) && (validateMI()) && (validateLastName()) && (validateDOB()) && (validateSSN()) && (validateAddress1()) && (validateAddress2()) && (validatePhoneType()) && (validatePhone()) && (validateEmail()) && (validateDLNum())  && (validateDLState()) && (validateDLExp()) && (validateEContact()) && (validateERelationship()) && (validateEPhone()) && (validateHireDate()) && (validatePassword()) && (validateConfPassword())) {
		return true;
	} else {
		return false;
	}
}
//Validate First Name
function validateFirstName() {
	var first = document.employee.firstname.value;
	var alpha = /^[a-zA-Z]+$/;
	if(first.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter a first name</font>";
		document.getElementById('firstname').focus();
		return false;
	} else if(!first.match(alpha)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Characters</font>";
		document.getElementById('firstname').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate MI 
function validateMI() {
	var m = document.employee.mi.value;
	var alpha = /^[a-zA-Z]+$/;
	if(m.length > 0) {
		if(!m.match(alpha)) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Character</font>";
			document.getElementById('mi').focus();
		} else {
			document.getElementById('error').innerHTML = "";
			return true;
		}
	} else {
		return true;
	}
}
//Validate Last Name
function validateLastName() {
	var last = document.employee.lastname.value;
	var alpha = /^[a-zA-Z]+$/;
	if(last.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter a last name</font>";
		document.getElementById('lastname').focus();
		return false;
	} else if(!last.match(alpha)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Characters</font>";
		document.getElementById('lastname').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate DOB & Check If Input Has Right Format
function validateDOB() {
	var dob = document.employee.DOB.value;
	var checkdate = /^(0[1-9]|1[0-2])\/((0[1-9]|2\d)|3[0-1])\/((19\d\d)|([2-9]{1}\d{3}))$/;
	if(dob.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter your date of birth</font>";
		document.getElementById('DOB').focus();
		return false;
	} else if(!checkdate.test(dob)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Format should be MM/DD/CCYY</font>";
		document.getElementById('DOB').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate SSN & Check To Make Sure It's Numbers Only
function validateSSN() {
	var s1 = document.employee.SSN1.value;
	var s2 = document.employee.SSN2.value;
	var s3 = document.employee.SSN3.value;
	var numbers = /^[0-9]+$/;
	if(s1.length == 0 || s2.length == 0 || s3.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please make sure all SSN fields are filled in</font>";
		document.getElementById('SSN1').focus();
		return false;
	} if(isNaN(s1)) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Invalid characters make sure it's numbers only</font>";
			document.getElementById('SSN1').focus();
			return false;
		} else {
			document.getElementById('error').innerHTML = "";
		}
	if(isNaN(s2)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid characters make sure it's numbers only</font>";
		document.getElementById('SSN2').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
	}
	if (isNaN(s3)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid characters make sure it's numbers only</font>";
		document.getElementById('SSN3').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate Address
function validateAddress1() {
    var address1 = document.employee.address1.value;
    var alphanumeric = /^[A-Za-z\d\s,-.#]+$/;
    if(address1.length == 0) {
        document.getElementById('error').innerHTML = "<font color = 'red'> Please enter the address </font>";
        document.getElementById('address1').focus();
        return false;
    } else if(!address1.match(alphanumeric)) {
        document.getElementById('error').innerHTML = "<font color = 'red'> Invalid Characters</font>";
        document.getElementById('address1').focus();
        return false;
    } else {
        document.getElementById('error').innerHTML = "";
        return true;
    }
}
//Validate Address 2 if needed
function validateAddress2() {
	var address2 = document.employee.address2.value;
	var alphanumeric = /^[A-Za-z\d\s,-.#]+$/;
	if(address2.length > 0) {
		if(!address2.match(alphanumeric)) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Characters</font>";
			document.getElementById('address2').focus();
			return false;
		} else {
			document.getElementById('error').innerHTML = "";
			return true;
		}
	} else {
		return true;
	}
}
//Validate Phone Type
function validatePhoneType() {
	var type = document.getElementById('phonetype');
	var strType = type.options[type.selectedIndex].value;
	if(strType == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please select a phone type</font>";
		document.getElementById('phonetype').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate Phone #
function validatePhone() {
	var p1 = document.employee.phone1.value;
	var p2 = document.employee.phone2.value;
	var p3 = document.employee.phone3.value;
	if(p1.length == 0 || p2.length == 0 || p3.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please make sure all phone number fields are filled in</font>";
		document.getElementById('phone1').focus();
		return false;
	} else if(isNaN(p1)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid characters</font>";
		document.getElementById('phone1').focus();
		return false;
	} 
	if(isNaN(p2)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid characters</font>";
		document.getElementById('phone2').focus();
		return false;
	}
	if(isNaN(p3)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid characters</font>";
		document.getElementById('phone3').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate E-mail Address
function validateEmail() {
	var Email = document.employee.emailAddress.value;
	var filter = /^[-a-z0-9-_]+(\.[-a-z0-9-_]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	if(Email.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter an e-mail address</font>";
		document.getElementById('emailAddress').focus();
		return false;
	} else if(!filter.test(Email)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Format</font>";
		document.getElementById('emailAddress').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate DL #
function validateDLNum() {
	var dl = document.employee.dlnumber.value;
	var alphanumeric = /^[A-Za-z\d\s]+$/;
	if(dl.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter a driver license number</font>";
		document.getElementById('dlnumber').focus();
		return false;
	} else if(!dl.match(alphanumeric)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Characters</font>";
		document.getElementById('dlnumber').focus();
		return false; 
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Validate DL State
function validateDLState() {
	var dlstate = document.employee.dlstate.value;
	var alpha = /^[A-Za-z]+$/;
	if(dlstate.length > 0) {
		if(dlstate.length < 2) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Must be 2 characters</font>";
			document.getElementById('dlstate').focus();
			return false;
		} else if(!dlstate.match(alpha)) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Characters</font>";
			document.getElementById('dlstate').focus();
			return false;
		} else {
			document.getElementById('error').innerHTML = "";
			return true;
		}
	} else {
		return true;
	}
}
function validateDLExp() {
	var expiration = document.employee.expdate.value;
	var dateFormat = /^((((0[13578])|(1[02]))[\/]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\/]?(([0-2][0-9])|(30)))|(02[\/]?[0-2][0-9]))[\/]?\d{4}$/;
	if(expiration.length > 0) {
		if(!expiration.match(dateFormat)) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Date Format</font>";
			document.getElementById('expdate').focus();
			return false;
		} else {
			document.getElementById('error').innerHTML = ""
			return true;
		}
	} else {
		return true;
	}
}
//Validate Emergency Contact
function validateEContact() {
	var e = document.employee.efname.value;
	var alpha = /^[A-Za-z\s]+$/;
	if(e.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please enter Emergency Contact first and last name</font>";
		document.getElementById('efname').focus();
		return false;
	} else if(!e.match(alpha)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Characters</font>";
		document.getElementById('efname').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
function validateERelationship() {
	var r = document.employee.erelation.value;
	var alpha = /^[A-Za-z\s-]+$/;
	if(r.length > 0) {
		if(!r.match(alpha)){
			document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Character</font>";
			document.getElementById('erelation').focus();
			return false;
		} else {
			document.getElementById('error').innerHTML = "";
			return true;
		}
	} else {
		return true;
	}
}
function validateEPhone() {
	var e1 = document.employee.ephone1.value;
	var e2 = document.employee.ephone2.value;
	var e3 = document.employee.ephone3.value;
	var eptype = document.getElementById('ephonetype');
	var numbers = /^[0-9]+$/;

	if(e1.length > 0) {
		if(e1.length < 3) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Make sure emergency phone fields have 3 numbers</font>";
			document.getElementById('ephone1').focus();
			return false;
		} else if (!e1.match(numbers)) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Make sure emergency phone fields have numbers only</font>";
			document.getElementById('ephone1').focus();
			return false;
		}
	}
	if(e2.length > 0) {
		if(e2.length < 3) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Make sure emergency phone fields have 3 numbers</font>";
			document.getElementById('ephone2').focus();
			return false;
		} else if (!e2.match(numbers)) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Make sure emergency phone fields have numbers only</font>";
			document.getElementById('ephone2').focus();
			return false;
		}
	}
	if(e3.length > 0) {
		if(e3.length < 3) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Make sure emergency phone fields have 3 numbers</font>";
			document.getElementById('ephone3').focus();
			return false;
		} else if (!e3.match(numbers)) {
			document.getElementById('error').innerHTML = "<font color = 'red'>Make sure emergency phone fields have numbers only</font>";
			document.getElementById('ephone3').focus();
			return false;
		} else {
			document.getElementById('error').innerHTML = "";
			return true;
		}
	} else {
		return true;
	} 
}
//Validate Hire Date
function validateHireDate() {
	var hdate = document.employee.Hire.value;
	var dateFormat = /^((((0[13578])|(1[02]))[\/]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\/]?(([0-2][0-9])|(30)))|(02[\/]?[0-2][0-9]))[\/]?\d{4}$/;
	if(hdate.length == 0) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Please select a hire date</font>";
		document.getElementById('Hire').focus();
		return false;
	} else if(!dateFormat.test(hdate)) {
		document.getElementById('error').innerHTML = "<font color = 'red'>Invalid Date Format</font>";
		document.getElementById('Hire').focus();
		return false;
	} else {
		document.getElementById('error').innerHTML = "";
		return true;
	}
}
//Autofills Username Field with text from Email field
function validateUsername() {
	var Email = document.employee.emailAddress.value;
	document.getElementById('username').value = Email;
	if(document.getElementById('username').value != Email) {
		document.getElementById('error').innerHTML = "<font color = 'red'>User name should be the same as your e-mail</font>";
		document.getElementById('username').focus();
		return false;
	}
}
//Validate Password
function validatePassword() {
	var check = document.getElementById('error');
	var password = document.employee.password.value;
	var p = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/; 
	if(password.length == 0) {
		check.innerHTML = "<font color = 'red'>Please enter a password</font>";
		document.getElementById('password').focus();
		return false;
	} else if(password.length < 6) {
		check.innerHTML = "<font color = 'red'>Password must have 6 characters</font>";
		document.getElementById('password').focus();
		return false;
	}else if(!password.match(p)) {
		check.innerHTML = "<font color = 'red'>Invalid characters</font>";
		document.getElementById('password').focus();
		return false;
	} else {
		check.innerHTML = "";
		return true;
	}
}
//Valdiate Confirm Password
function validateConfPassword() {
	var check = document.getElementById('error');
	var confpassword = document.employee.confirmPassword.value;
	var password = document.employee.password.value;
	if(confpassword.length == 0) {
		check.innerHTML = "<font color = 'red'>Please confirm your password</font>";
		document.getElementById('confirmPassword').focus();
		return false;
	} else if(confpassword.length < 6) {
		check.innerHTML = "<font color = 'red'>Not enough characters must have 6 characters</font>";
		document.getElementById('confirmPassword').focus();
		return false;
	} else if(confpassword != password) {
		check.innerHTML = "<font color = 'red'>Passwords do not match</font>";
		document.getElementById('confirmPassword').focus();
		return false;
	} else {
		check.innerHTML = "";
		return true;
	}
}
//Capitalizes First letters in names & Both Letters for state & trims spaces onkeyup
function upperCase() {
	document.getElementById('firstname').value = document.getElementById('firstname').value.replace(/^\s+|\s+$/g,'');
	document.getElementById('lastname').value = document.getElementById('lastname').value.replace(/^\s+|\s+$/g,'');
	document.getElementById('emailAddress').value = document.getElementById('emailAddress').value.replace(/^\s+|\s+$/g,'');
	document.getElementById('firstname').value = document.getElementById('firstname').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
		return letter.toUpperCase();
	});
	document.getElementById('mi').value = document.getElementById('mi').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
		return letter.toUpperCase();
	});
	document.getElementById('lastname').value = document.getElementById('lastname').value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
		return letter.toUpperCase();
	});
	document.getElementById('dlstate').value = document.getElementById('dlstate').value.toUpperCase();
}
function resetError() {
	document.getElementById('error').innerHTML = "";
}
//End of employees.html validation//

