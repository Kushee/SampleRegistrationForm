
var fv = {};

fv.main = function() {

    var a = fv.uid_validation();
    var b = fv.password_validation();
    var c = fv.username_validation();
    var d = fv.address_validation();
    var e = fv.country_validation();

    return (a && b && c && d && e);
};


fv.uid_validation = function() {

    var uid = document.registrationForm.userid;
    var min = 5, max =12;
    var uidLength = uid.value.length;
    if (uidLength == 0) {
        document.getElementById('uid_error').innerHTML = 'User ID should not be empty';
        uid.focus();
        return false;
    } else if (uidLength < min) {
        document.getElementById('uid_error').innerHTML = 'User ID should not be less than 5 characters';
        uid.focus();
        return false;
    } else if (uidLength > max) {
        document.getElementById('uid_error').innerHTML = 'User ID should not be more than 12 characters';
        uid.focus();
        return false;
    }
    document.getElementById('uid_error').innerHTML = "";
    return true;
};

fv.password_validation = function() {

    var pswd = document.registrationForm.password;
    var min = 5, max =12;
    var pswdLength = pswd.value.length;
    if (pswdLength == 0) {
        document.getElementById('pswd_error').innerHTML = 'Password should not be empty';
        pswd.focus();
        return false;
    } else if (pswdLength < min) {
        document.getElementById('pswd_error').innerHTML = 'Password should not be less than 5 characters';
        pswd.focus();
        return false;
    } else if (pswdLength > max) {
        document.getElementById('pswd_error').innerHTML = 'Password should not be more than 12 characters';
        pswd.focus();
        return false;
    }
    document.getElementById('pswd_error').innerHTML = "";
    return true;
};

fv.username_validation = function() {

    var uname = document.registrationForm.username;
    var sample = /^[A-za-z]+$/;
    if(uname.value.match(sample)){
        document.getElementById('uname_error').innerHTML = "";
        return true;
    } else {
        document.getElementById('uname_error').innerHTML = 'Username must have only alphabets';
        uname.focus();
        return false;
    }
};

fv.address_validation = function() {

    var uadrs = document.registrationForm.address;
    var sample = /[0-9A-za-z]/;
    if(uadrs.value.match(sample)){
        document.getElementById('uadrs_error').innerHTML = "";
        return true;
    } else {
        document.getElementById('uadrs_error').innerHTML = 'Address must have only alphabets and numbers';
        uadrs.focus();
        return false;
    }
};

fv.country_validation = function() {

    var ucountry = document.registrationForm.country;
    if(ucountry.value == "Default") {
        document.getElementById('ucountry_error').innerHTML = 'Please select the country';
        ucountry.focus();
        return false;
    } else {
        document.getElementById('ucountry_error').innerHTML = "";
        return true;
    }
};

fv.resetAll = function(){

    document.registrationForm.userid.value = "";
    document.registrationForm.password.value = "";
    document.registrationForm.username.value = "";
    document.registrationForm.address.value = "";
    document.registrationForm.country.value = "";

    document.getElementById('uid_error').innerHTML = "";
    document.getElementById('pswd_error').innerHTML = "";
    document.getElementById('uname_error').innerHTML = "";
    document.getElementById('uadrs_error').innerHTML = "";
    document.getElementById('ucountry_error').innerHTML = "";

    document.registrationForm.userid.focus();
    return true;
};
