(function(){
    function Ninja(name) {
        this.name = name;
        this.health = 100;

        // Private variables
        var speed = 3,
            strength = 3;

        this.sayName = function() {
            console.log("My name is", this.name + "!");
        };

        this.showStats = function() {
            console.log('Name: ' + this.name + ', Health: ' + this.health + ', Strength: ' + strength + ', Speed: ' + speed);
        };

        this.drinkSake = function() {
            this.health += 10;
        };

        this.kick = function(ninja) {
            var subtractedAmount = 5 * strength;
            ninja.health -= subtractedAmount;
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + subtractedAmount +" Health!");
        };
    }

    Ninja.prototype.punch = function(ninja) {
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
        return this;
    };

    var blueNinja = new Ninja("Goemon");
    var redNinja = new Ninja("Bill Gates");
    redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

    blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength


}());