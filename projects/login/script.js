// User Login

// add event listener to button
document.getElementById("loginBtn").addEventListener("click", login);

// event function
function login() {
    // input username and password
    let username = document.getElementById("userIn").value;
    let password = document.getElementById("passIn").value;

    // check username and password
    if (username === "admin" && password === "1234") {
        alert("Login Successful");

    } else if (username === "admin") {
        alert("Invalid Password");
        
    } else {
        alert("Invalid Username");
    }
}