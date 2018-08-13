class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Name: " + this.name);
    }

    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Strength: " + this.strength + ", Speed: " + this.speed);
    }

    drinkSake() {
        this.health += 10;
        console.log("You drank some sake, your health went up by 10, your new health is: " + this.health);
    }

}

// example output
// const ninja1 = new Ninja("Ninjago");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

// Part II - Sensei Class
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"