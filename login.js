const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("base"));

    dados.array.array.forEach((elemento) => {
        if (elemento.email == email.value && elemento.senha ===senha.value) {
            evento.preventDefault();
            mensagem.innerHTML("logado");
            return true;
        } else {
            mensagem.innerHTML = "Senha ou E-mail Incorreto"
        }
    });
}