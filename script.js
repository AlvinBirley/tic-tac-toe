//select square divs
const divs = document.querySelectorAll('.square');


function gameBoard() {
    return {
        board: [null, null, null, null, null, null, null, null, null]
    };
}

const staticBoard = gameBoard().board;

function player(name, marker) {
    return { name, marker };
}

const Mark = player("Mark", "X");
const David = player("David", "O");

let gameOver = false;  // Flag to track if the game is over

function checkWinner() {
    // Check all win conditions for X and O
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
        [0, 4, 8], [2, 4, 6]              // diagonals
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;

        if (staticBoard[a] && staticBoard[a] === staticBoard[b] && staticBoard[a] === staticBoard[c]) {
            return staticBoard[a];  // Returns 'X' or 'O' if there's a winner
        }
    }

    return null;  // No winner yet
}

function checkDraw() {
    // A draw occurs if there are no empty spaces and no winner
    const isBoardFull = !staticBoard.includes(null);
    const winner = checkWinner();  // Check for a winner

    if (isBoardFull && !winner) {
        return true;  // It's a draw if the board is full and there's no winner
    }

    return false;
}

function gamePlay(playerMarker, squareNumber) {
    divs.forEach(div => {
        if (parseInt(div.dataset.value) === squareNumber) {
          div.innerHTML = playerMarker.marker; 
        }
      });


    if (gameOver) {
        console.log("Game over. No more moves can be made.");
        return;  // Stop if the game is already over
    }

    staticBoard[squareNumber - 1] = playerMarker.marker;
  
    const winner = checkWinner();  // Check if there's a winner after the move

    if (winner) {
        console.log(`${winner === "X" ? Mark.name : David.name} wins!`);
        gameOver = true;  // Mark the game as over
    } else if (checkDraw()) {
        console.log("It's a draw!");
        gameOver = true;  // Mark the game as over in case of a draw
    } 
}

gamePlay(Mark, 4)
gamePlay(David, 1)
gamePlay(Mark, 7)
gamePlay(Mark, 8)
gamePlay(Mark, 9)

