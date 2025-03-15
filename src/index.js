// Ensures the DOM is fully loaded before the script runs
document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetBtn = document.getElementById("reset");
    const statusText = document.getElementById("status"); // New: Display game status

    // Convert NodeList to an array
    const cellItems = [...cells];

    // Store X and O in an array
    const xAndO = ["X", "O"];

    // Default starting player
    let flag = "X";

    // Stores player moves
    let player_1 = [];
    let player_2 = [];

    // Possible winning combinations
    const winningCombos = [
        ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], // Rows
        ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"], // Columns
        ["1", "5", "9"], ["3", "5", "7"] // Diagonals
    ];

    // Click event for each cell
    cellItems.forEach(eachElement => {
        eachElement.addEventListener("click", () => {
            let playerChoice = eachElement.getAttribute("value");

            // Check if flag is X or O and update the board
            if (flag === "X") {
                eachElement.textContent = xAndO[0];
                flag = "O";
                player_1.push(playerChoice);
            } else {
                eachElement.textContent = xAndO[1];
                flag = "X";
                player_2.push(playerChoice);
            }

            // Disable clicked cell
            eachElement.classList.add("disabled");

            console.log("Player 1:", player_1, "\nPlayer 2:", player_2);

            // Check for winner    to see if it is a draw or a win
            let winner = checkWinner(player_1, player_2);
            if (winner) {
                statusText.textContent = `Player ${winner} Wins!`; // display the which player is the winner
                disableBoard();
            } else if (player_1.length + player_2.length === 9) {
                statusText.textContent = "It's a Draw!";   // display its a draw if the tile is full and no winner has been found
            }
        });
    });

    // Reset the game
    resetBtn.addEventListener("click", () => {
        cellItems.forEach(eachItem => {
            eachItem.textContent = "";
            eachItem.classList.remove("disabled");
        });

        flag = "X";
        player_1 = [];
        player_2 = [];
        statusText.textContent = "";
    });
     // This is a tryOut
    // Yassir and Faith to implement this function

    // Function to check winner
    function checkWinner(player1, player2) {
        for (let combo of winningCombos) {
            if (combo.every(num => player1.includes(num))) {       // if player_1 has reached the winning combo player 1 win
                return "X"; // Player 1 wins
            }
            if (combo.every(num => player2.includes(num))) {     // if player_2 has reached the winning combo player 2 win
                return "O"; // Player 2 wins
            }
        }
        return null;
    }

    // Disable board after a win
    function disableBoard() {
        cellItems.forEach(cell => cell.classList.add("disabled"));   // if winning combo has been reached before the board is full the remaining tiles is locked/disabled and cannot be clicked on
    }
});
