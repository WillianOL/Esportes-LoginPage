const dadosLogin = document.querySelectorAll('.loginInputs')
const conteinerLogin = document.querySelectorAll('.loginDados') 
//Verificação do input de senha.
dadosLogin[1].addEventListener('input', () => {
    if(dadosLogin[1].value.length < 8){ // Caso a senha tenha menos de 8 digitos, aplica-se a classe
        conteinerLogin[1].classList.add('loginDadosErro')
    } else{
        conteinerLogin[1].classList.remove('loginDadosErro') // Caso a senha seja OK, remove-se a classe
    }
});

dadosLogin[0].addEventListener('input', () => {
    if(dadosLogin[0].value.length < 3){
        conteinerLogin[0].classList.add('loginDadosErro')
    } else{
        conteinerLogin[0].classList.remove('loginDadosErro')
    }
});