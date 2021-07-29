let jogador1 = {
    nome: "P1",
    forma: "x",
    postos: 0
};

let jogador2 = {
    nome: "P2",
    forma: "o",
    postos: 0
};

let jogadorAtual = jogador1;
let preenchido = [9];
let tabuleiro = [9];

function verificar(click, pos) {
    if (tabuleiro[pos] === undefined) {
        click.innerHTML = jogadorAtual.forma;
        tabuleiro[pos] = jogadorAtual.forma;

        if (jogadorAtual === jogador1) {
            jogadorAtual = jogador2;
        } else {
            jogadorAtual = jogador1;
        };

        preenchido.push(click);
    };

    regras();
};

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

// Reinicia o jogo

function reinicia() {
    for (let i = 1; i < preenchido.length; i++) {
        let casa = preenchido[i];
        casa.innerHTML = "";
    };
    jogadorAtual === jogador1;
    tabuleiro = [9];
    preenchido = [9];
}

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

