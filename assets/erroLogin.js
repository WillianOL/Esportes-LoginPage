const formulario = document.getElementById('form');
const dadosLogin = document.querySelectorAll('.loginInputs')
const conteinerLogin = document.querySelectorAll('.loginDados')

dadosLogin[0].addEventListener('input', () => {
    if(dadosLogin[0].value.length < 3){
        conteinerLogin[0].classList.add('loginEmailErro')
    } else{
        conteinerLogin[0].classList.remove('loginEmailErro')
    }
});

dadosLogin[1].addEventListener('input', () => {
    if(dadosLogin[1].value.length < 8){
        conteinerLogin[1].classList.add('loginSenhaERRO')
    } else{
        conteinerLogin[1].classList.remove('loginSenhaERRO')
    }
});