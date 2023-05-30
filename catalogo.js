const botaomodal = document.getElementById("btn");
const cards = document.querySelector(".cards");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("foto");

var emaillogado;
femaillogado();


carregarCatalogo();
function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadastrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        if(elemento.email == emaillogado){
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card")
        divcard.innerHTML = `<img src="imagens/${elemento.foto}"> 
        <div class="cardinfo">${elemento.nome}</div>
        <div class="info"><a onclick="editar(${indice})">editar</a>
        <a onclick="excluir(${indice})">excluir</a></div>
        </div>`;
        
        cards.appendChild(divcard);}
        
    });
}

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function editar(indice){
    var url ="item.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}

function femaillogado(){
    let dados = JSON.parse(sessionStorage.getItem("logado"));
    if (dados == null){
      window.location.assign("login.html");
    } else{
      emaillogado = dados[0].email;
    }
  }