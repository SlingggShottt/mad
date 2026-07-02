localStorage.setItem("username", "rvce");
localStorage.setItem("passme1", "rvce");

function verify() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let un = localStorage.getItem("username");
    let pas = localStorage.getItem("passme1");

    if (un === username && pas === password) {
        alert("authentication done");
    } else {
        alert("authentication failure");
    }
}