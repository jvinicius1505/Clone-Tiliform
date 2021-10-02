let botao = document.getElementById("x");
botao.onclick = function(){
        let cadastro = document.getElementById("cadastro");
        let aviso = document.querySelector(".aviso");
        cadastro.removeChild(aviso)
}

let titulo = document.querySelector(".nomeEmpresa");
titulo.onclick = function(){
    window.location.href = "/index.html"
}

function enviar(){
    document.getElementById("invisivel").style.display = "flex";
    document.querySelector("#iptNome").value = "";
    document.querySelector("#iptEmail").value = "";
    document.querySelector("#iptCurriculo").value = "";
    document.querySelector("textarea").value = "";
    document.querySelector("#iptTelefone").value = "" ;

}

function fecharPop(){
    document.getElementById("invisivel").style.display = "none";
}