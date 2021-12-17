// Reinicia o jogo

function reinicia() {
    for (let i = 1; i < preenchido.length; i++) {
        let casa = preenchido[i];
        casa.innerHTML = "";
    };
    jogadorAtual = jogador1;
    tabuleiro = [9];
    preenchido = [9];
}