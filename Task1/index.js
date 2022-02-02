function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
 
    if (username == "admin" && password == "Abc123EFG") {
        showText("login success");
    }
    else {
        if (username == "") {
            showText("user name field cannot be empty");
        }
        else if (password == "") {
            showText("password field cannot be empty");
        }
    
        else if (!(password.match(/[A-Z]/g)) || !(password.match(/[a-z]/g)) || (passwordd.length) < 8) {
            showText("enter the password contains uppercases and lower cases and the length is more than 8");
        }
        else {
            showText("login failed");
        }
    }
      
}

function showText(text) {
    document.getElementById("validator-text").innerText = text;
    document.getElementById("validator-text").style.display = 'block';
}


var passwordField = document.getElementById("password");
passwordField.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

passwordField.onblur = function () {
    document.getElementById("message").style.display = "none";
}

