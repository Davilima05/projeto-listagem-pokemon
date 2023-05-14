const botaoAltearTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaotrocaDeTema = document.querySelector(".imagem-botao");

botaoAltearTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaotrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});