const btnEntrar = document.querySelector("#entrar");
const btnRetorna = document.querySelector("#retorna");
const body = document.querySelector("body");

btnEntrar.addEventListener("click", function(){
    body.className = "sign-in-js"
});

btnRetorna.addEventListener("click", function(){
    body.className = "sign-up-js"
});
