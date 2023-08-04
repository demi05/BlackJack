// declaring our variables
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// building logic of the Game
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards=[firstCard, secondCard]
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  // display the message
  messageEl.textContent = message;
  // display the cards
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  // display the sum
  sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    if (isAlive===true && hasBlackJack===false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
