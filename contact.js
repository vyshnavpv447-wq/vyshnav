function validateForm() {
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";

var username = document.getElementById("username").value;
var email = document.getElementById("email").value;

if (username.length < 3) {
    document.getElementById("usernameError").innerText = "username must be at least 3 characters";
    return false;
}
return true;


}