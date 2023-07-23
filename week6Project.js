// Deal 26 Cards to each Player from a Deck of 52 cards.

//Iterate through the turns where each Player plays a Card.

//The Player who played the higher card is awarded a point.

//Ties result in zero points for both Players.

//After all cards have been played, display the score and declare the winner.

//Write a Unit Test using Mocha and Chai for at least one of the functions you write.

class Card {
    constructor(suit, value, cardValue) {
      this.suit = suit;
      this.value = value;
      this.cardValue = cardValue;
    }
  }
  
  class Deck {
    constructor() {
      this.cards= [];
      this.createDeck();
      this.shuffle();
    }
  
    createDeck() {
        let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        let values = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
      for (let suit of suits) {
        for (let cardValue in values){
          this.cards.push(new Card(suit, values[cardValue], cardValue));
        }
      }
    }
  // looked up info for shuffle, still a little confused about j
  //this.card i & j = this.card i & j since it shuffles the length of last card which is 52 cards in total
  //it will equal the same amount based off of i(52 cards)& j (return the lowest number thats given)
  // out of 52 cards) so return any cards but same amount of cards to opponent 

  shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i-1));
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp
      }
    }

  //pop to pull out the last card in hand when we use the word deal
    deal() {
      return this.cards.pop();
    }
  }
  // need players so given class, name of player, hand array since they will have cards, and points
  class Player {
    constructor(name) {
      this.name =name;
      this.hand = [];
      this.points = 0;
    }
  }
  let player1 = new Player('Player 1');
  let player2 = new Player('Player 2');
//player1 and 2 are instance of player-adding to the class/adding 2 new players

  //function for something to happen (play hand with the two players)
  // let deck of cards be from class deck
  function playHand(player1, player2) {
    let deck = new Deck();
  //out of 52 cards each player gets 26, push-player given a deal of 26 cards (i<26=26cards))
    for (let i = 0; i < 26; i++) {
      player1.hand.push(deck.deal());
      player2.hand.push(deck.deal());
    }
  
  //pop last card each time for 26 cards
    for (let i = 0; i <26; i++) {
      let card1 = player1.hand.pop();

      let card2 = player2.hand.pop();
      
  // if card1 is bigger than card 2 then player 1 gets a pont or if other way around then player 2 gets a point 
      if (card1.value > card2.value) {
        console.log(`Player 1 played ${card1.cardValue} of ${card1.suit} and Player 2 played
        ${card2.cardValue} of ${card2.suit}. Player 1 wins!`)
        player1.points++;
      } if (card1.value < card2.value) {
        console.log(`Player 2 played ${card2.cardValue} of ${card2.suit} and Player 1 played
        ${card1.suit}. Player 2 wins!`);
        player2.points++;
      } else if (card1.value===card2.value){
        console.log(`Player 1 played ${card1.cardValue} of ${card1.suit} and Player 2 played 
        ${card2.cardValue} of ${card2.suit}. It's a tie, no point.`)
      }
      //I am a visual person so I need to make sure there was 26 rounds, added if there was a tie, no points
    }
}
  // out of the whole function console.log the score for each player
  playHand(player1, player2)  
  console.log(`Player 1's score: ${player1.points}`);
  console.log(`Player 2's score: ${player2.points}`);
  
  //console.log('Leftover cards in player 1 hand', player1.hand)
  //console.log('Letfover cards in player 2 hand', player2.hand)
    //not needed but made sure that all cards were used.
  
  
//display who wins the game at the end.
  if (player1.points>player2.points){
    console.log ('Player 1 is the winner.')
  
  } if (player1.points<player2.points){
    console.log('Player 2 is the winner.')
    
  } else if (player1.points===player2.points){
    console.log('There is no winner.')
    
  } 


  
  