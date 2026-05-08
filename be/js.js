
const board = document.querySelector(".game")

for (let i = 0; i < 9; i++){
    const cells = document.createElement("div")
    board.append(cells)
    cells.classList.add("cell")
    // cells.className = "cell"
    // cells.setAttribute("class", "cell")

}
let currentPlayer = "X"

const cells = document.querySelectorAll(".cell")

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent !== "") return
        cell.textContent = currentPlayer

        if (checkWin()) {
            alert(currentPlayer + " победил!")
            resetGame()
            return
        }if ([...cells].every(c => c.textContent !== "")) {
            alert("Ничья")
            resetGame()
            return
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X"
    })
})

function checkWin() {
    const winCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    return winCombos.some(combo => {
        return combo.every(i => cells[i].textContent === currentPlayer)
    })
}


function resetGame() {
    cells.forEach(cell => cell.textContent = "")
    currentPlayer = "X"
}