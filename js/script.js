//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}

//Validação de Login



function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'admin' && senha == '12345678'){
        logado = 1;
        window.location = "index.html";
    }

    if( logado == 0){
       alert("Senha ou usuário incorreto.");
    }
}


//Ativar alert no botão cadastrar
function cadastro(){
    alert("Casdastro feito com sucesso");
    window.location.href = "index.html";
}