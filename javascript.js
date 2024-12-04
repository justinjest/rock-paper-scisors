function getComputerChoice() {
    let num = Math.random()
    if (num <= .333) {
        return "paper"
    } else if (num <= .666) {
        return "rock"
    } else {
        return "scisor"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scisor?")
    let lc = choice.toLowerCase()
    if (lc != "rock" && lc != "paper" && lc != "scisor") {
        console.log("That's not a valid input, please try again")
        return
    }
    return choice
}

let humanScore = 0
let computerScore = 0
initScore()
function playRound(choice) {
    let comp = getComputerChoice()
    let hum = choice
    if (hum === null) {
        console.log("Human entered invalid item")
    }
    if (comp === hum) {
        console.log("Tie! No one scores any points")
    }
    else if (comp === "rock") {
        if (hum === "paper") {
            console.log("Human wins!")
            humanScore++
        }
        else if (hum === "scisor") {
            console.log("Computer wins!")
            computerScore++
        }
    }
    else if (comp === "scisor") {
        if (hum === "rock") {
            console.log("Human wins!")
            humanScore++
        }
        else if (hum === "paper") {
            console.log("Computer wins!")
            computerScore++
        }
    }
    else if (comp === "paper") {
        if (hum === "scisor") {
            console.log("Human wins!")
            humanScore++
        }
        else if (hum === "rock") {
            console.log("Computer wins!")
            computerScore++
        }
    }
    updateScore()
    winner(humanScore, computerScore)
}

function initScore() {
    const container = document.querySelector("#score");

    const playerScore = document.createElement("div");
    playerScore.classList.add("player");
    playerScore.id = "player"
    playerScore.textContent = "Player score " + humanScore;
    container.appendChild(playerScore);

    const compScore = document.createElement("div");
    compScore.classList.add("computer");
    compScore.id = "computer"
    compScore.textContent = "Computer score " + computerScore;
    container.appendChild(compScore);
}

function updateScore() {

    const humContainer = document.querySelector("#score")
    const playerBox = humContainer.querySelector("#player")
    playerBox.textContent = "Player score " + humanScore;

    const compContainer = document.querySelector("#score")
    const compBox = compContainer.querySelector("#computer")
    compBox.textContent = "Computer score " + computerScore;
}

function winner(humanScore, computerScore) {
    if (humanScore >= 5) {
        alert("Human won!")
    } else if (computerScore >= 5) {
        alert("Computer won!")
    }
}
const btnP = document.querySelector("#btnP");
btnP.onclick = () => playRound("paper")
const btnS = document.querySelector("#btnS");
btnS.onclick = () => playRound("scisor")
const btnR = document.querySelector("#btnR");
btnR.onclick = () => playRound("rock")
