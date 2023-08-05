/* JavaScript Steps

1 Target id&classes

2 add Event Listener -> Submit

3 engine function

4 test the system 

*/


/* 1 Target id&classes */

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
submit = id("submit"),
faiulureIcon = classes("failure-icon"),
successIcon = classes("success-icon"),
errorMsg = classes("error");


/* 2 add Event Listener -> Submit */

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    engine(username, 0, "Por favor, digite seu nome");
    engine(email, 1, "Por favor, digite seu e-mail");
    engine(password, 2, "Por favor, digite sua senha");
})


/* 3 engine function */

const engine = (id, serial, message) => {

if (id.value.trim() === ""){

    errorMsg[serial].innerHTML = message;
    faiulureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";

}
else {

    errorMsg[serial].innerHTML = "";
    faiulureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";

}

}


      
/*  */


/* TESTS  */

/*
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


let username = id("username"),
 email = id("email"),
 password = id("password"), 
 form = id("form"),
 errorMsg = document.getElementsByClassName("error"),
 successIcon = classes("success-icon"),
 faiulureIcon = classes("failure-icon");


/* 2 add Event Listener -> Submit */

/*

form.addEventListener("submit", (e)=>{
    e.preventDefault(); //stop unexpected behavior

    engine(username, 0, "Nome não pode ficar em branco");
    engine(email, 1, "E-mail não pode ficar em branco");
    engine(password, 2, "Senha não pode ficar em branco");
   
})

*/
/* 3 engine function 

let engine = (id, serial, message) => {

    if(id.value.trim() === ''){
        errorMsg[serial].innerHTML = message;
        faiulureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else {
        errorMsg[serial].innerHTML = "";
        successIcon[serial].style.opacity = "1";
        faiulureIcon[serial].style.opacity = "0";
    }

}*/

