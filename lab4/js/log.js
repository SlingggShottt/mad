log.js

localStorage.setItem("username", "rvce");
localStorage.setItem("passme1", "rvce");

function verify() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let un = localStorage.getItem("username");
  let pas = localStorage.getItem("passme1");

  let stun = un.localeCompare(username);
  let spass = pas.localeCompare(password);

  if (stun === 0 && spass === 0) {
    alert("authentication done");
  } else {
    alert("authentication failure");
  }
}
