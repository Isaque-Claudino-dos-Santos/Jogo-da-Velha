function startGame() {
    let navMenu = document.querySelector('.menuCenter');
    navMenu.classList.remove('menuCenter');
    navMenu.classList.add('menuLeft');

    let tabuleiro = document.querySelector('.jogo');
    tabuleiro.classList.remove('ocuto');
    tabuleiro.classList.add('ativo');
 
    let cfg = getSetingValue();
    jogador1.nome = cfg.p1_name;
    jogador1.forma = cfg.p1_peca;

    jogador2.nome = cfg.p2_name;
    jogador2.forma = cfg.p2_peca;
   
    gameStartState = true;
}