const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const HUMAN = "human";
const COMPUTER = "computer";

function getComputerChoice() {
  let choice = Math.random() * 3;
  if (choice < 1) {
    return ROCK
  } else if (choice < 2) {
    return PAPER
  } else {
    return SCISSOR
  }
}

function getHumanChoice() {
  let humanChoice = prompt(`Pick: ${ROCK} ${PAPER} or ${SCISSOR}:`);
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

  //// pseudocode for playRound()
  //
  // TRANSFORM both choices into lowercase versions (for case insensitive comparison)
  // INIT winner with null;
  // IF botch chose the same option: PASS (tie -> don't increase either points)
  // ELSE IF human win (rock > scissor > paper > rock):
  //    INCREMENT human score
  //    SET winner to human
  // ELSE:
  //    INCREMENT computer score
  //    SET winner to computer
  // IF winner is human
  //    PRINT you win, <human choice> beats <computer choice>
  // ELSE IF winner is computer
  //    PRINT you lose, <computer choice> beats <human choice>

function displayScore() {
  console.log(`Score:\nPlayer:   ${humanScore}\nComputer: ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  let winner = null;

  if (humanChoice === computerChoice) {
    console.log(`Tie! You both chose ${computerChoice}`); // print computer choice to make any potential bug obvious
    // displayScore(); // TODO: remove
    return
  }

  let humanWin = (
    (humanChoice === ROCK && computerChoice === SCISSOR)      // rock crushes scissor
    || (humanChoice === SCISSOR && computerChoice === PAPER)  // scissor cuts paper
    || (humanChoice === PAPER && computerChoice === ROCK)     // paper wraps rock
  );

  if (humanWin) {
    humanScore++;
    winner = HUMAN;
  } else {
    computerScore++;
    winner = COMPUTER;
  }

  if (winner === HUMAN) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${humanChoice} gets beaten by ${computerChoice}`);
  }
  // displayScore(); // TODO: remove
}

console.log("Testing all possible combinations of the game:");

// ties
playRound(ROCK, ROCK);
playRound(SCISSOR, SCISSOR);
playRound(PAPER, PAPER);

// human wins
playRound(ROCK, SCISSOR);
playRound(SCISSOR, PAPER);
playRound(PAPER, ROCK);

// computer wins
playRound(SCISSOR, ROCK);
playRound(PAPER, SCISSOR);
playRound(ROCK, PAPER);
