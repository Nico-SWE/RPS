let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    computerChoice = "Piedra";
  }
  if (computerChoice === 2) {
    computerChoice = "Papel";
  }
  if (computerChoice === 3) {
    computerChoice = "Tijeras";
  }
  console.log("CPU eligió: " + computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("Elige: Piedra, Papel o Tijeras");
  if (humanChoice === null) {
    console.log("Usuario canceló");
  } else if (humanChoice === "") {
    console.log("No ingresó nada");
  } else {
    console.log("Player eligió: " + humanChoice);
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Empate");
  } else if (
    (humanChoice === "Piedra" && computerChoice === "Tijeras") ||
    (humanChoice === "Papel" && computerChoice === "Piedra") ||
    (humanChoice === "Tijeras" && computerChoice === "Papel")
  ) {
    humanScore++;
    console.log("Ganó el jugador. Puntuación: " + humanScore);
  } else if (
    (computerChoice === "Piedra" && humanChoice === "Tijeras") ||
    (computerChoice === "Papel" && humanChoice === "Piedra") ||
    (computerChoice === "Tijeras" && humanChoice === "Papel")
  ) {
    computerScore++;
    console.log("Ganó la CPU. Puntaje: " + computerScore);
  } else {
    console.log("Elección no válida");
  }
}

function playGame() {
  console.log("Comenzando el juego...");
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(
    "Juego terminado. Puntaje final - Jugador: " +
      humanScore +
      ", CPU: " +
      computerScore
  );
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame();
