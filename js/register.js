let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let createBtn = document.getElementById("create-account");

createBtn.addEventListener("click" , function (e){
    e.preventDefault();
    if ( firstName.value === "" || lastName.value === "" || email.value === "" || password.value === ""){
        alert("please insert your missing data")
    } else {
        localStorage.setItem("firstName" , firstName.value);
        localStorage.setItem("lastName" , lastName.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);

        setTimeout(() => {
            window.location = "login.html"
        } , 1000 )
    }
})
