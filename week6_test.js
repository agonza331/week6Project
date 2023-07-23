let expect=chai.expect;

let deck1= new Deck();
console.log(deck1);
let deck2= new Deck();
console.log(deck2);


describe('Card', function () {
    
});

describe('Deck', function () {
    describe ('createDeck', function(){
        it ('creating deck to make sure length is 52 cards', function(){
            expect(deck1.cards.length).to.equal(52)
            expect(deck2.cards.length).to.equal(52)
        })
     })
    describe ('create a deck the same way multiple times', function(){
        it ('create a 52 card deck', function (){
            expect (deck1.cards).to.deep.equal(deck2.cards)
            expect (deck1.cards).to.deep.equal(deck2.cards);
            console.log(deck1)
            console.log(deck2)
        })
    })
        
})
    describe ('deal', function(){
        it ('should deal a hand of cards', function(){
            expect(deck.deal()).to.be.an.instanceof(Card)
        })
        it ('should deal a hand with 26 cards', function(){
            let test = deck1.deal();
            expect(test.length).to.equal(26);
            console.log(test)
        })
});

describe('Player', function () {

});

describe('Game', function () {
});