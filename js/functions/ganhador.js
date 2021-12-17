function ganhador(forma) {
    let msg3 = document.querySelector(".ganhador");

    if (forma === jogador1.forma) {
        let msg1 = document.querySelector(".pontos1");
        msg1.innerHTML = `${jogador1.nome}:${jogador1.postos += 1}`;
        msg3.innerHTML = `${jogador1.nome} WIN`;
        reinicia();

    } else if (forma === jogador2.forma) {
        let msg2 = document.querySelector(".pontos2");
        msg2.innerHTML = `${jogador2.nome}:${jogador2.postos += 1}`;
            msg3.innerHTML = `${jogador2.nome} WIN`;
        reinicia();

    } else if (forma === "velha") {
        if (preenchido.length === 10) {
            msg3.innerHTML = "Empate";
            reinicia();
        }
    }
}