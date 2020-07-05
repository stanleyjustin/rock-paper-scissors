// player selection rock
const rock = document.querySelector('#play-rock');
rock.addEventListener("click", function() {
    let computer = computerPlay();
    let player = "rock";
    console.log(playRound(player, computer));
});
//player selection paper
const paper = document.querySelector('#play-paper');
paper.addEventListener("click", function() {
    let computer = computerPlay();
    let player = "paper";
    console.log(playRound(player, computer));
});
//player selection scissors
const scissors = document.querySelector('#play-scissors');
scissors.addEventListener("click", function() {
    let computer = computerPlay();
    let player = "scissors";
    console.log(playRound(player, computer));
});
//starting scores, round counter, score messge  = 0
let cScore = 0;
let pScore = 0;
let round = 0;

let endmsg = document.querySelector('#endmsg');
endmsg.textContent = ("");

let scoremsg = document.querySelector('#scoremsg');
scoremsg.textContent =("Choose rock, paper, or scissors to begin!");

let scoreboard = document.querySelector('#scoreboard');
scoreboard.textContent =("Player: "+pScore+" Computer: "+cScore+" Round: "+round);

// computer play function - generates a random number between 0 and 2 then assigns a choice based on the random number
function computerPlay(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    let computerChoice = Math.floor(Math.random() * (max - min)) + min;
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// single round determining message and point distribution
function playRound(playerSelection, computerSelection) {
    let message = "";
// player choose rock    
    if (playerSelection === "rock" && computerSelection === "rock") {
        round++;
        message = "You and the computer both choose rock. It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        cScore++;
        round++;
        message = "Your rock was covered in computer's paper. You lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        pScore++;
        round++;
        message = "Your rock smashed computer's scissors to bits. You win!";
    }
// player choose paper
    if (playerSelection === "paper" && computerSelection === "rock") {
        pScore++;
        round++;
        message = "You cover the computer's pathetic rock in paper. Victory is yours!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        round++;
        message = "You and the computer both choose paper. It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        cScore++;
        round++;
        message = "You throw paper and the computer turns it into confetti with their scissors. You lose!";
    }
// player choose scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
        cScore++;
        round++;
        message = "Your precious scissors are smashed to smitherines by the computer's rock! You lose!";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        pScore++;
        round++;
        message = "You shred computer's paper like legal documents during the last financial crisis. You win!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        round++;
        message = "You and the computer both throw scissors. They make a terrible sound together and nobody wins. Tie!";
    }
    scoremsg.textContent =(message);
    scoreboard.textContent =("Player: "+pScore+" Computer: "+cScore+" Round: "+round);
    if (round === 5) {
        gameOver();
    }
}
// function ends game and resets score
function gameOver() {
    if (pScore > cScore) {
        alert ("You win! You put that machine in it's place!");
        pScore = 0;
        cScore = 0;
        round = 0;
    } else if (cScore > pScore) {
        alert ("The computer wins. Tsk Tsk. Try again!");
        pScore = 0;
        cScore = 0;
        round = 0;
    } else {
        alert ("It's a tie; now do it again! There can only be one Highlander!");
        pScore = 0;
        cScore = 0;
        round = 0
    }
    scoremsg.textContent=("Choose rock, paper, or scissors to begin!");
    scoreboard.textContent =("Player: "+pScore+" Computer: "+cScore+" Round: "+round);
}


