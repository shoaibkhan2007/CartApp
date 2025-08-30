let user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user) {
  window.location.href = "cartify-login.html";
}