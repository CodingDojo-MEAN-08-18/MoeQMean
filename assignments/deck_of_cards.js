class Card {
    constructor() {
        this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        this.values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    }
    show() {
        console.log(`Suit: ${this.suits[0]}, string value: ${this.values[0]}, number value: ${this.values[1]}`)
    }
}

const cards = new Card();
cards.show();

class Deck {
    constructor() {
        this.deck = [];
    }

    reset() {
        this.deck = [];
        const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (const suit of suits) {
            for (const value of values) {
                this.deck.push(`${ value } of ${ suit }`);
            }
        }

        return this;
    }

    shuffle() {
        let m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this;
    }

    deal() {
        return this.deck.pop();
    }

}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        this.hand.pop();
        return this;
    }
}

const deck2 = new Deck();
deck2.reset().shuffle();
console.log(deck2);

const player2 = new Player("Moe");
player2.draw(deck2).draw(deck2);
console.log(player2);
console.log(deck2);