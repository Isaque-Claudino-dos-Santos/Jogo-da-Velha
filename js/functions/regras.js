

// REGRAS PARA GANHAR

function regras() {
    // ganha X
    // regras para ganha em linhas
    if (tabuleiro[1] === jogador1.forma &&
        tabuleiro[2] === jogador1.forma &&
        tabuleiro[3] === jogador1.forma) {
        ganhador(jogador1.forma);
    }

    if (tabuleiro[4] === jogador1.forma &&
        tabuleiro[5] === jogador1.forma &&
        tabuleiro[6] === jogador1.forma) {
        ganhador(jogador1.forma);
    }
    if (tabuleiro[7] === jogador1.forma &&
        tabuleiro[8] === jogador1.forma &&
        tabuleiro[9] === jogador1.forma) {
        ganhador(jogador1.forma);
    }

    // ganha O
    if (tabuleiro[1] === jogador2.forma &&
        tabuleiro[2] === jogador2.forma &&
        tabuleiro[3] === jogador2.forma) {
        ganhador(jogador2.forma);
    }

    if (tabuleiro[4] === jogador2.forma &&
        tabuleiro[5] === jogador2.forma &&
        tabuleiro[6] === jogador2.forma) {
        ganhador(jogador2.forma);
    }

    if (tabuleiro[7] === jogador2.forma &&
        tabuleiro[8] === jogador2.forma &&
        tabuleiro[9] === jogador2.forma) {
        ganhador(jogador2.forma);
    }

    // regras para ganha em colunas

    if (tabuleiro[1] === jogador1.forma &&
        tabuleiro[4] === jogador1.forma &&
        tabuleiro[7] === jogador1.forma) {
        ganhador(jogador1.forma);
    }

    if (tabuleiro[2] === jogador1.forma &&
        tabuleiro[5] === jogador1.forma &&
        tabuleiro[8] === jogador1.forma) {
        ganhador(jogador1.forma);
    }
    if (tabuleiro[3] === jogador1.forma &&
        tabuleiro[6] === jogador1.forma &&
        tabuleiro[9] === jogador1.forma) {
        ganhador(jogador1.forma);
    }

    // ganha O
    if (tabuleiro[1] === jogador2.forma &&
        tabuleiro[4] === jogador2.forma &&
        tabuleiro[7] === jogador2.forma) {
        ganhador(jogador2.forma);
    }

    if (tabuleiro[2] === jogador2.forma &&
        tabuleiro[5] === jogador2.forma &&
        tabuleiro[8] === jogador2.forma) {
        ganhador(jogador2.forma);
    }

    if (tabuleiro[3] === jogador2.forma &&
        tabuleiro[6] === jogador2.forma &&
        tabuleiro[9] === jogador2.forma) {
        ganhador(jogador2.forma);
    }


    // regras para ganha em diagonais

    // ganha X
    if (tabuleiro[1] === jogador1.forma &&
        tabuleiro[5] === jogador1.forma &&
        tabuleiro[9] === jogador1.forma) {
        ganhador(jogador1.forma);
    }

    if (tabuleiro[3] === jogador1.forma &&
        tabuleiro[5] === jogador1.forma &&
        tabuleiro[7] === jogador1.forma) {
        ganhador(jogador1.forma);
    }

    // ganha O
    if (tabuleiro[1] === jogador2.forma &&
        tabuleiro[5] === jogador2.forma &&
        tabuleiro[9] === jogador2.forma) {
        ganhador(jogador2.forma);
    }

    if (tabuleiro[3] === jogador2.forma &&
        tabuleiro[5] === jogador2.forma &&
        tabuleiro[7] === jogador2.forma) {
        ganhador(jogador2.forma);
    }
    else {
        ganhador("velha");
    }
}
