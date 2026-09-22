// choices per round
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const NUMBER_OF_ROUNDS = 5;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // since the random float returned by Math.random()
  // includes zero but excludes 1, i.e. [0, 1)
  // we also use less-than for the other two boundaries
  // instead of less-than-or-equal to give the 3 ranges
  // [0, 1)
  // [1, 2)
  // [2, 3)
  const choice = Math.random() * 3;
  if (choice < 1) {
    return ROCK;
  } else if (choice < 2) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

// NOTE: there's intentionally no validation!
//       => in the future the player will select an option
//       via a UI (e.g. buttons) on a webpage.
//       But if we wanted to validate then we'd have to:
//       1. handle null (in case user hits escape)
//       2. map to constants (ROCK, PAPER or SCISSORS) for single source of truth
//       3. handle undefined | invalid input
function getHumanChoice() {
  const userInput = prompt(`Pick: ${ROCK} ${PAPER} or ${SCISSORS}`, ROCK);
  return userInput.trim().toLowerCase();
}

function displayFinalResult() {
  console.log(`FINAL SCORE:\nPlayer: ${humanScore}\nComputer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (computerScore > humanScore) {
    console.log("You lose!");
  } else {
    console.log("Tie!");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Tie! You both chose ${humanChoice}`);
    return;
  }

  const humanWonRound = (
    (humanChoice === ROCK && computerChoice === SCISSORS)      // rock crushes scissors
    || (humanChoice === SCISSORS && computerChoice === PAPER)  // scissors cuts paper
    || (humanChoice === PAPER && computerChoice === ROCK)      // paper covers rock
  );

  if (humanWonRound) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${humanChoice} gets beaten by ${computerChoice}`);
  }
}

function isGameOver() {
  return (humanScore >= NUMBER_OF_ROUNDS || computerScore >= NUMBER_OF_ROUNDS);
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  while (!isGameOver()) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  displayFinalResult();
}

playGame();
