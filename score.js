// Iteration 8: Making scoreboard functional
let playAgnBtn = document.getElementById("play-again-button")
let scoreBoard = document.getElementById("score-board")

let params = new URLSearchParams(window.location.search)
let score = params.get("score")

scoreBoard.textContent = score

playAgnBtn.onclick = ()=>{
    window.location.href = "./game.html"
}