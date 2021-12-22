class Validations {

    winner(form) {
        let winner_message = document.querySelector(".winner_message");

        if (form === this.player1.form) {
            let score_player1 = document.querySelector(".score_player1");
            score_player1.innerHTML = `${this.player1.name}:${this.player1.score += 1}`;
            winner_message.innerHTML = `${this.player1.name} WIN`;
            this.restart();

        } else if (form === this.player2.form) {
            let score_player2 = document.querySelector(".score_player2");
            score_player2.innerHTML = `${this.player2.name}:${this.player2.score += 1}`;
            winner_message.innerHTML = `${this.player2.name} WIN`;
            this.restart();

        } else if (form === "old") {
            if (this.boardIsFilled.length === 10) {
                winner_message.innerHTML = "a Tie";
                this.restart();
            }
        }
    }

    rules() {
        // win player1
        // rule for win line
        if (this.board[1] === this.player1.form &&
            this.board[2] === this.player1.form &&
            this.board[3] === this.player1.form) {
            this.winner(this.player1.form);
        }

        if (this.board[4] === this.player1.form &&
            this.board[5] === this.player1.form &&
            this.board[6] === this.player1.form) {
            this.winner(this.player1.form);
        }
        if (this.board[7] === this.player1.form &&
            this.board[8] === this.player1.form &&
            this.board[9] === this.player1.form) {
            this.winner(this.player1.form);
        }

        // win player2

        if (this.board[1] === this.player2.form &&
            this.board[2] === this.player2.form &&
            this.board[3] === this.player2.form) {
            this.winner(this.player2.form);
        }

        if (this.board[4] === this.player2.form &&
            this.board[5] === this.player2.form &&
            this.board[6] === this.player2.form) {
            this.winner(this.player2.form);
        }

        if (this.board[7] === this.player2.form &&
            this.board[8] === this.player2.form &&
            this.board[9] === this.player2.form) {
            this.winner(this.player2.form);
        }

        // win player1
        // rules for win column

        if (this.board[1] === this.player1.form &&
            this.board[4] === this.player1.form &&
            this.board[7] === this.player1.form) {
            this.winner(this.player1.form);
        }

        if (this.board[2] === this.player1.form &&
            this.board[5] === this.player1.form &&
            this.board[8] === this.player1.form) {
            this.winner(this.player1.form);
        }
        if (this.board[3] === this.player1.form &&
            this.board[6] === this.player1.form &&
            this.board[9] === this.player1.form) {
            this.winner(this.player1.form);
        }

        // win player2

        if (this.board[1] === this.player2.form &&
            this.board[4] === this.player2.form &&
            this.board[7] === this.player2.form) {
            this.winner(this.player2.form);
        }

        if (this.board[2] === this.player2.form &&
            this.board[5] === this.player2.form &&
            this.board[8] === this.player2.form) {
            this.winner(this.player2.form);
        }

        if (this.board[3] === this.player2.form &&
            this.board[6] === this.player2.form &&
            this.board[9] === this.player2.form) {
            this.winner(this.player2.form);
        }


        // win player1
        // rules for win diagonal

        if (this.board[1] === this.player1.form &&
            this.board[5] === this.player1.form &&
            this.board[9] === this.player1.form) {
            this.winner(this.player1.form);
        }

        if (this.board[3] === this.player1.form &&
            this.board[5] === this.player1.form &&
            this.board[7] === this.player1.form) {
            this.winner(this.player1.form);
        }

        // win player2

        if (this.board[1] === this.player2.form &&
            this.board[5] === this.player2.form &&
            this.board[9] === this.player2.form) {
            this.winner(this.player2.form);
        }

        if (this.board[3] === this.player2.form &&
            this.board[5] === this.player2.form &&
            this.board[7] === this.player2.form) {
            this.winner(this.player2.form);
        }
        else {
            this.winner("old");
        }
    }
}