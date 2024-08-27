document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('signupForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        map();
    });

    form.addEventListener('reset', function() {
        clearErrors();
    });
});


function validation() {

    document.getElementById("e").innerHTML = "";
    document.getElementById("u").innerHTML = "";
    document.getElementById("pa").innerHTML = "";
    document.getElementById("cp").innerHTML = "";

    var email = document.getElementById("1").value;
    var valid = /^[a-z0-9.]+@[a-z]+\.[a-z]{2,}$/;
    if (email == "") {
        document.getElementById("e").innerHTML = "Please enter email id"
        return false;
    }
    else if (!valid.test(email)) {
        document.getElementById("e").innerHTML = "Email address wrong format example: username@somewhere.sth"
        return false;

    }

    var us = document.getElementById("2").value;
    var user = /^[a-zA-z0-9.\-_!@$*]{3,40}$/;
    if (us == "") {
        document.getElementById("u").innerHTML = "Please enter username"
        return false;
    }
    else if (us.length > 40) {
        document.getElementById("u").innerHTML = "Username is too long. Maximum is 40 characters"
        return false
    }
    else if (!user.test(us)) {
        document.getElementById("u").innerHTML = "Username is invalid. Be sure it does not contain strange symbols or have extra spaces anywhere"
        return false;

    }

    var pass = document.getElementById("venugopal").value;
    var password = /^(?=.*[0-9]).*$/;
    if (pass == "") {
        document.getElementById("pa").innerHTML = "Please enter password";
        return false;
    }
    else if (!password.test(pass)) {
        document.getElementById("pa").innerHTML = "Password is invalid. It must contain letters and at least one digit.";
        return false;
    }

    var confirmPassword = document.getElementById("4").value;
    if (confirmPassword !== pass) {
        document.getElementById("cp").innerHTML = "Passwords do not match";
        return false;
    }
    return true;

}

function map(){
    var email=document.getElementById("1").value;
    var user=document.getElementById("2").value;
    var pass=document.getElementById("venugopal").value;
    var confirm=document.getElementById("4").value;
    document.getElementById("print").innerHTML=`
        <p>Email: ${email}</p>
        <p>Username: ${user}</p>
        <p>Password: ${pass}</p>
        <p>Confirm Password: ${confirm}</p>
    `;
    
    

}

