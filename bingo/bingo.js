function initRandomValues(arr) {
  for (let i = 1; i < 100; i++) {
    arr.push(i);
  }
  return arr;
}

function getRandomNumber(arr) {
  const randomInt = Math.floor(Math.random() * arr.length);
  return arr.splice(randomInt, 1)[0];
}

function createBingoCard() {
  const arr = initRandomValues([])
  let newBingoCard1 = [];
  let newBingoCard2 = [];
  let newBingoCard3 = [];
  do {
    newBingoCard1.push(getRandomNumber(arr));
    newBingoCard2.push(getRandomNumber(arr));
    newBingoCard3.push(getRandomNumber(arr));
  }
  while (newBingoCard1.length < 5 && newBingoCard2.length < 5 && newBingoCard3.length < 5);
  let bingoCard = [newBingoCard1, newBingoCard2, newBingoCard3];
  alert(bingoCard);
  return bingoCard;
}

function changeNumberToX(val) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      let currVal = bingoCard[i][j];
      if (val === currVal) {
        bingoCard[i][j] = "X";
        alert("Se ha encontrado el n\u00FAmero " + val);
      }
    }
  }
}

function hasLine() {
  for (let i = 0; i < 3; i++) {
    let isLine = true;
    for (let j = 0; j < 5; j++) {
      if (bingoCard[i][j] !== 'X') {
        isLine = false;
      }
    }
    if (isLine) {
      return true;
    }
  }
  return false
}

function isBingo() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      if (bingoCard[i][j] !== 'X') {
        return false
      }
    }
  }
  return true;
}

let bingoCard
let playAgain

do {
  let answerCard
  let player = prompt("Hola, \u00BFC\u00F3mo te llamas?");
  alert("Sistema de puntos: Se te resta un punto por cada jugada. Puntuación máxima 84, puntuación mínima 0. Suerte!");

  do {
    bingoCard = createBingoCard();
    answerCard = prompt(player + ", " + "Esta es tu tarjeta, contesta 'yes' si la aceptas, cancela si quieres otra");
  }
  while (answerCard !== "yes");
  alert("Comienza el juego!!");
  const gameNumbers = initRandomValues([]);
  let continueGame;
  let printedLine = false;

  do {
    let randomInt = getRandomNumber(gameNumbers);
    alert("El n\u00FAmero es " + randomInt);
    changeNumberToX(randomInt);
    console.table(bingoCard);
    if (!printedLine && hasLine()) {
      alert("LINEA!!!");
      printedLine = true;
    }
    if (isBingo()) {
      alert("BINGO!!");
      continueGame = false;
    } else {
      continueGame = confirm("Quieres continuar?");
    }
  }
  while (continueGame === true);

  let rounds = (99 - gameNumbers.length);
  let finalScore = gameNumbers.length;

  const playersScores = [{ name: "Jordi", score: 84 }, { name: "Ferran", score: 46 }, { name: "Marta", score: 58 }, { name: "Marian", score: 16 }, { name: "Manu", score: 4 }];
  playersScores.push({ name: player, score: finalScore });
  playersScores.sort((player1, player2) => player2.score - player1.score);
  alert("Completado en " + rounds + " turnos.");
  alert("Ranking usuarios:");
  playersScores.forEach(player => alert(player.name + ": " + player.score));

  alert("Gracias por utilizar nuestro Bingo");
  playAgain = confirm("Quieres volver a jugar?")
}
while (playAgain === true);

