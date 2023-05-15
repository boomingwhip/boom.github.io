
var password = "1";

function passcheck() {

    if(document.getElementById("pass").value != password) {
        alert("wrong password");
        return False;
    }

    if(document.getElementById("pass").value == password) {
        alert("correct");
        window.open("passwords.html");
    }

}