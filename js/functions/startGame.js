function startGame() {
    let cfg = getSetingValue();
    jogador1.nome = cfg.p1_name;
    jogador2.nome = cfg.p2_name;
   
    gameStartState = true;
}