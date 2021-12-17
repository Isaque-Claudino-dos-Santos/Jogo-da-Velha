

// REGRAS PARA GANHAR

function regras() {
    // ganha X
    // regras para ganha em linhas
    if (tabuleiro[1] === "x" &&
        tabuleiro[2] === "x" &&
        tabuleiro[3] === "x") {
        ganhador("x");
    }

    if (tabuleiro[4] === "x" &&
        tabuleiro[5] === "x" &&
        tabuleiro[6] === "x") {
        ganhador("x");
    }
    if (tabuleiro[7] === "x" &&
        tabuleiro[8] === "x" &&
        tabuleiro[9] === "x") {
        ganhador("x");
    }

    // ganha O
    if (tabuleiro[1] === "o" &&
        tabuleiro[2] === "o" &&
        tabuleiro[3] === "o") {
        ganhador("o");
    }

    if (tabuleiro[4] === "o" &&
        tabuleiro[5] === "o" &&
        tabuleiro[6] === "o") {
        ganhador("o");
    }

    if (tabuleiro[7] === "o" &&
        tabuleiro[8] === "o" &&
        tabuleiro[9] === "o") {
        ganhador("o");
    }

    // regras para ganha em colunas

    if (tabuleiro[1] === "x" &&
        tabuleiro[4] === "x" &&
        tabuleiro[7] === "x") {
        ganhador("x");
    }

    if (tabuleiro[2] === "x" &&
        tabuleiro[5] === "x" &&
        tabuleiro[8] === "x") {
        ganhador("x");
    }
    if (tabuleiro[3] === "x" &&
        tabuleiro[6] === "x" &&
        tabuleiro[9] === "x") {
        ganhador("x");
    }

    // ganha O
    if (tabuleiro[1] === "o" &&
        tabuleiro[4] === "o" &&
        tabuleiro[7] === "o") {
        ganhador("o");
    }

    if (tabuleiro[2] === "o" &&
        tabuleiro[5] === "o" &&
        tabuleiro[8] === "o") {
        ganhador("o");
    }

    if (tabuleiro[3] === "o" &&
        tabuleiro[6] === "o" &&
        tabuleiro[9] === "o") {
        ganhador("o");
    }


    // regras para ganha em diagonais

    // ganha X
    if (tabuleiro[1] === "x" &&
        tabuleiro[5] === "x" &&
        tabuleiro[9] === "x") {
        ganhador("x");
    }

    if (tabuleiro[3] === "x" &&
        tabuleiro[5] === "x" &&
        tabuleiro[7] === "x") {
        ganhador("x");
    }

    // ganha O
    if (tabuleiro[1] === "o" &&
        tabuleiro[5] === "o" &&
        tabuleiro[9] === "o") {
        ganhador("o");
    }

    if (tabuleiro[3] === "o" &&
        tabuleiro[5] === "o" &&
        tabuleiro[7] === "o") {
        ganhador("o");
    }
    else {
        ganhador("velha");
    }
}
