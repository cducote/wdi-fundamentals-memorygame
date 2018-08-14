
//This is javascript
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//first card
var cardOne = cards[0];
cardsInPlay.push(cardOne);

//second card
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

//Flip the cards
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

//logic conditions
if (cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.")
	}
}