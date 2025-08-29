



let showPass = () => {
    var x = document.getElementById("login-password");
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






let myFunction = () => {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
        //   x.style.border = "1px solid red";
    } else {
        x.style.display = "block";
    }
}






let login = () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    let text1 =document.getElementById("foremail");
    let text2 =document.getElementById("forpass");

    const vertxt = JSON.parse(localStorage.getItem("txt"));

    const matchedUseremail = vertxt.find(user => user.email === email && user.password === password);
    console.log(matchedUseremail);
    // const matchedUserPass = users.find(user => user.password === password);
    if(!email || !password){
        text2.innerHTML = "fill the fields";
        // text1.innerHTML = "fill the fields";
        return;
    }

        if (!matchedUseremail) {
            text1.innerHTML = "Acc Not Found"
            text2.innerHTML = "Acc Not Found"
            console.log('invalid pss');
            return;
        }

    else {

        text2.innerHTML = "Pass matched";
        text1.innerHTML = "Email matched";
        text2.style.color="white";
        text1.style.color="white";

            window.location.href = "cartify-home.html";
    }
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUseremail));
    console.log("working?")
}








document.getElementById("login-btttn").addEventListener("click", function (event) {
    event.preventDefault();
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("login-btttn").click();
    }

});



