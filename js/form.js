const showPassword = document.querySelectorAll('.show')
const pass = document.querySelector('.show--pass')
const input = document.querySelector('.password')
console.log(input)
pass.onclick = function  (){
    for(i = 0 ; i < showPassword.length ; i++){
        showPassword[i].classList.toggle('active')
    }
    if(input.type == "password"){
        input.type = "text"
    }else{
        input.type = "password"
    }
}


 const confim = document.querySelectorAll('.confim')
 const passconfim = document.querySelector('.confim--pass')
const inputConfim = document.querySelector('.password--confim')
passconfim.onclick = function(){
    for(j = 0 ; j<confim.length ; j ++){
        confim[j].classList.toggle('active')
    }
    if(inputConfim.type == "password"){
        inputConfim.type = "text"
    }else{
        inputConfim.type = "password"
    }
}