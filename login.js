const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));
    dados.forEach(elemento => {
        if (elemento.email == email.value && elemento.senha ===senha.value) {
            mensagem.innerHTML = "aguarde redirecionamento..."
            let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
            dados.push(
                {
                email : email.value
                }
            )
            sessionStorage.setItem("logado", JSON.stringify(dados) );
            evento.preventDefault();
            window.location.assign("catalogo.html");
            return true;
        } else {
            alert("Senha ou E-mail Incorreto")
        }
    });
}