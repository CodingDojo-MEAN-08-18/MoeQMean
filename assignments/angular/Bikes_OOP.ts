class Bike {
    priceNum: number;
    max_speed: string;
    miles: number = 0;
    constructor(priceEl, maxSpeed) {
        this.priceNum = priceEl;
        this.max_speed = maxSpeed;
    }
    price() {
        return "Hello, " + this.priceNum;
    }
    displayInfo() {
        return "Price: " + this.priceNum + ", Max Speed: " + this.max_speed + ", Miles: " + this.miles;
    }
    ride() {
        this.miles += 10;
        return "Riding..";
    }
    reverse() {
        this.miles -= 5;
        // To prevent from going negative
        if (this.miles < 0) {
            this.miles = 0;
        }
        return "Reversing...";
    }
}

let bike1 = new Bike(200, "25mph");
bike1.ride();
bike1.ride();
bike1.ride();
bike1.reverse();
bike1.displayInfo();