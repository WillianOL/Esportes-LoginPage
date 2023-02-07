const formulario = document.getElementById('form');
const dadosLogin = document.querySelectorAll('.loginInputs')
const conteinerLogin = document.querySelectorAll('.loginDados')
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

dadosLogin[0].addEventListener('input', () => {
    if(dadosLogin[0].value === regexEmail){
        conteinerLogin[0].classList.add('loginDadosERRO')
    } else{
        conteinerLogin[0].classList.remove('loginDadosERRO')
    }
});