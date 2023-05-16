const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));
     alert("anjw")
    dados.forEach(elemento => {
        if (elemento.email == email.value && elemento.senha ===senha.value) {
            evento.preventDefault();
            alert("logado");
            return true;
        } else {
            alert("Senha ou E-mail Incorreto")
        }
    });
}