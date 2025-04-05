let heading_content = document.getElementById("heading").innerHTML;
document.writeln(heading_content + "<br>");

function validateForm(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message;

    if (email == "") {
        message = "email is required.";
        document.getElementById("validation_message").style.color = "red";
    }
    else if (password == "") {
        message = "Password is required.";
        document.getElementById("validation_message").style.color = "red";
    }
    else {
        message = "form is submitted";
        document.getElementById("validation_message").style.color = "green";
    }

    document.getElementById("validation_message").innerText = message;
}