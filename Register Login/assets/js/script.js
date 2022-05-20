const button = document.querySelector("button");
const form = document.querySelector("form");

const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

let arrayuser = [];

form.addEventListener("submit", function(e){

    e.preventDefault();

    const userinfo ={
        firstname: firstname.value,
        lastname: lastname.value,
        username: username.value,
        email: email.value,
        password: password.value
    };

    arrayuser.push(userinfo);

    localStorage.setItem("Info", JSON.stringify(arrayuser));

})