



let computerPlay = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)]


function result() {
    if (computerPlay === userPlay) {
    return result = "This is a tie."
    }
    else if (computerPlay === "rock" && userPlay === "paper") {
    return result = "You won!"
    }
    else if (computerPlay === "paper" && userPlay === "rock") {
    return result = "You lost."
    }
    else if (computerPlay === "scissors" && userPlay === "paper") {
    return result = "You lost."
    }
    else if (computerPlay === "paper" && userPlay === "scissors") {
    return result = "You won!"
    }
    else if (computerPlay === "rock" && userPlay === "scissors") {
    return result = "You lost."
    }
    else if (computerPlay === "scissors" && userPlay === "rock") {
    return result = "You won!"
    }
    else {
        return result = "This is not a valid choice.";
    }
}

let userPlay = prompt("Choose between Rock, Paper and Scissors. The result will be displayed in the console.").toLowerCase();

console.log("Your choice was " + userPlay + ". " + "Computer chose "+ computerPlay + ". " + result())

