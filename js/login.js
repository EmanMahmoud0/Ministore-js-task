let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("log-in");
let getMail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click" , function (e){
    e.preventDefault();
    if (email.value === "" || password.value === ""){
        alert("please enter your correct data")
    } else {
        if (getMail && getMail.trim() === email.value && getPassword && getPassword.trim() === password.value){
            setTimeout (() => {
                window.location = "index.html"
            } , 1000)
        } else {
            alert("incorrect data, please try again")
        }
    }
})