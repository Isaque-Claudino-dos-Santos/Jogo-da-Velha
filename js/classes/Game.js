class Game extends Validations {
    player1 = {
        name: "",
        form: "",
        score: 0
    };

    player2 = {
        name: "",
        form: "",
        score: 0
    };

    gameStart = false;
    currentPlayer = this.player1;
    boardIsFilled = [9];
    board = [9];
    
    playerMove(input, board_home) {
        if (this.board[board_home] === undefined && this.gameStart == true) {
            input.innerHTML = this.currentPlayer.form;
            this.board[board_home] = this.currentPlayer.form;

            if (this.currentPlayer == this.player1) {
                this.currentPlayer = this.player2;
            } else {
                this.currentPlayer = this.player1;
            };

            this.boardIsFilled.push(input);
        }

        super.rules();
    };

    setValues() {
        let cfg = this.#getValueStartGame();
        this.player1.name = cfg.player1_name;
        this.player1.form = cfg.player1_piece;

        this.player2.name = cfg.player2_name;
        this.player2.form = cfg.player2_piece;
    }

    #getValueStartGame() {
        let player1_name = document.getElementById('player1_name').value;
        let player2_name = document.getElementById('player2_name').value;
        let player1_piece = document.querySelector('.player1_piece').value;
        let player2_piece = document.querySelector('.player2_piece').value;


        let cfg = {
            player1_name: player1_name,
            player2_name: player2_name,
            player1_piece: player1_piece,
            player2_piece: player2_piece
        }
      
        if (player1_piece == 'none' || player2_piece == 'none') {
            cfg.player1_piece = 'x';
            cfg.player2_piece = 'o';
        }

        if (player1_name.value == '' || player2_name.value == '') {
            cfg.player1_name = 'P1';
            cfg.player2_name = 'p2';
        }

        return cfg;
    }

    restart() {
        for (let i = 1; i < this.boardIsFilled.length; i++) {
            let board_home = this.boardIsFilled[i];
            board_home.innerHTML = "";
        };
        this.currentPlayer = this.player1;
        this.board = [9];
        this.boardIsFilled = [9];
    }
}



