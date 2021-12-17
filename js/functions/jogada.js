function jogada(click, pos) {

    if (tabuleiro[pos] === undefined && gameStartState == true) {
        click.innerHTML = jogadorAtual.forma;
        tabuleiro[pos] = jogadorAtual.forma;

        if (jogadorAtual === jogador1) {
            jogadorAtual = jogador2;
        } else {
            jogadorAtual = jogador1;
        };

        preenchido.push(click);
    }

    regras();
};