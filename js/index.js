let game = new Game();

window.onload = () => {
    if (!game.gameStart) {
        let main_game = document.querySelector('main');
        main_game.classList.remove('on')
        main_game.classList.add('off')
    }
}

function startGame() {
    game.gameStart = true;
    let main_game = document.querySelector('main');
    main_game.classList.remove('off')
    main_game.classList.add('on')
    game.setValues();
}

function returnBoardHome(input, board_home) {
    game.setValues();
    game.playerMove(input, board_home);
}






