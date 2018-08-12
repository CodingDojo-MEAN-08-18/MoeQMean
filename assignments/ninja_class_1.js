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
        }
    }

    var ninja1 = new Ninja("Hyabusa");

    ninja1.sayName();
    ninja1.drinkSake();
    ninja1.showStats();
}());