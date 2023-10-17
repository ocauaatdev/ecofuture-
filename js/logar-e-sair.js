var sairBtn = document.getElementById('sairOption')
var logarBtn = document.getElementById('login-button')

//Se o usuario não estiver logado, o botao de login e cadastro fica visivel
if(localStorage.getItem('token') == null){
    logarBtn.style.display = 'block'
    sairBtn.style.display = 'none'

}else{ //Se ele estiver logado, o botao de login e cadastro nao fica visivel
    logarBtn.style.display = 'none'
    sairBtn.style.display = 'block'
}

function deslogar(){

    //Se o token de usuario logado estiver vazio nada acontece
    if(localStorage.getItem('token') == null){

    }else{ //Se tiver algum valor no token
        localStorage.removeItem('token')
        logarBtn.style.display('block')
    }
}