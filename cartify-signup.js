
let showPass = () => {
  var x = document.getElementById("signup-password");
  var f =document.getElementById("lik");
  if (x.type === "password") {
    x.type = "text";
    f.innerHTML ="Hide";
  } else {
    x.type = "password";
    f.innerHTML ="Show"
  }
}
document.getElementById("lik").addEventListener("click", function (event) {
  event.preventDefault();

});

let signUp = () => {
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const msg = document.getElementById("myDIV");



  if (!firstName || !lastName || !email || !password ) {
    msg.innerText = "Please fill all fields.";
    return;
  }
   if (password !== confirmPassword) {
    msg.innerText = "Passwords do not match.";
    return;
  }

  let users =  JSON.parse(localStorage.getItem("txt")) || [];
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    msg.innerText = "User with this email already exists.";
    return;
  }
  const newUser = {
    confirmPassword,
    firstName,
    lastName,
    email,
    password
    // confirmPassword
  };


  users.push(newUser);
  localStorage.setItem("txt", JSON.stringify(users));


  msg.innerText = "User registered successfully!";
}


let myFunction = () => {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
