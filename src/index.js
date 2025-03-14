// This event listener ensures that HTML is first loaded before the JS
document.addEventListener("DOMContentLoaded", () => {
    // store the divs class called cells in cells variable
    // cells in an array
    const cells = document.querySelectorAll(".cell");
    console.log(cells);

    // store the reset button in resetBtn variable
    const resetBtn = document.getElementById("reset");

    // store the cells array in a new Array called cellItems
    const cellItems = [...cells]

    // Store X and O in an array 
    const xAndO = ["X", "O"]

    // Default starting option in the X and O game
    let flag = "X"
    
    // This will store the players option of the chosen div
    let player_1 = [];
    let player_2 = [];

    // Adding an event listener of click to all the cells using a loop
    // Add a function that add either an X or an O to the selected cells
    cellItems.map(eachElement =>{
        eachElement.addEventListener("click", ()=>{
            // This line captures the selected cell
            let playerChoice = eachElement.getAttribute("value")

            // Check if flag is X or O
            flag == "X" ? (eachElement.textContent = xAndO[0], flag = "O", player_1.push(playerChoice)) : (eachElement.textContent = xAndO[1], flag = "X", player_2.push(playerChoice))
            // Add dynamically a disabled CSS class check CSS page for this
            eachElement.classList.add("disabled");

            console.log("player_1",player_1,"\nplayer_2", player_2)
        })
    })
    // Clears everything on board and sets everything to default
    resetBtn.addEventListener("click", ()=>{
        cellItems.map(eachItem =>{
            // Remove the X and O
            eachItem.textContent = ""
            // Remove the disabled CSS class 
            eachItem.classList.remove("disabled")
        })
        // Default starting option in the X and O game
        flag = "X";
        player_1 = []
        player_2  = []
    })
    // This is a tryOut
    // Yassir and Faith to implement this function
    function winning_player(defaultPlayer1, defaultPlayer2){

    }
})

