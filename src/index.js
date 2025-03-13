document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const resetBtn = document.getElementById("reset");
    console.log(cells);
    const cellItems = [...cells]
    const xO = ["X", "O"]
    let flag = "X"
    cellItems.map(eachElement =>{
        eachElement.addEventListener("click", ()=>{
            console.log("I have been clicked")
            flag == "X" ? (eachElement.textContent = xO[0], flag = "O") : (eachElement.textContent = xO[1], flag = "X")
            eachElement.classList.add("disabled");
        })
    })
    resetBtn.addEventListener("click", ()=>{
        cellItems.map(eachItem =>{
            eachItem.textContent = ""
            eachItem.classList.remove("disabled")
        })
    })

})

