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

function playRound() {
    let comp = getComputerChoice()
    let hum = getHumanChoice()
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
}

function playGame() {
    console.log("hello")
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
}

playGame()
