const formulario = document.getElementById('form');
const dadosLogin = document.querySelectorAll('.loginInputs')
const conteinerLogin = document.querySelectorAll('.loginDados') 

dadosLogin[1].addEventListener('input', () => {
    if(dadosLogin[1].value.length < 8){
        conteinerLogin[1].classList.add('loginDadosErro')
    } else{
        conteinerLogin[1].classList.remove('loginDadosErro')
    }
});

dadosLogin[0].addEventListener('input', () => {
    if(dadosLogin[0].value.length < 3){
        conteinerLogin[0].classList.add('loginDadosErro')
    } else{
        conteinerLogin[0].classList.remove('loginDadosErro')
    }
});

