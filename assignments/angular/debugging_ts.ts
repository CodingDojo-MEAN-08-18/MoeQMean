// #1
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// - Answer: Cannot assign number to a string. Fix by changing into string with quotes
myString = "9";

// #2
function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
// - Answer: Same as before, cannot assign number to a string variable. Must change into string.
console.log(sayHello("9"));

// #3
function fullName(firstName: string, lastName: string, middleName: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
// - Answer: You insert a blank string in place of where their middle name would be like so:
console.log(fullName("Jimbo", "", "Jones"));

// #4
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
    // belt: 4 // Missing an S
   belts: 4 // Now its fixed.
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
// - Answer: You forgot to add an s to "belt" in the object for jay. 
console.log(graduate(jay));

// #5
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
// const shane = Ninja(); // Must include new so it can be a new instance of Ninja and include first and last name as below:
const shane = new Ninja("Shane", "Lastname");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
// function study(programmer: turing){ // First off what is this? It's not an element to push into a function. Second look at my version below
function study(el) {
   return `Ready to whiteboard an algorithm, ${el.fullName}?` // - This needs to include the element in the function's argument 
}
// Now this has problems:
// - Not anymore
console.log(study(turing));

//#6
var increment = x => x + 1;
// This works great:
console.log(increment(3));
// var square = x => {x * x};
var square = x => (x * x);
// This is not showing me what I want:
// - Answer: Because you are using brackets, why? Use parenthesis if anything, or none at all
console.log(square(4));
// This is not working:
// - Answer: Use parenthesis.
var multiply = (x, y) => x * y; 
// Nor is this working:
var sum = (x, y) => x + y;
let product = (x , y) => x * y;
let difference = (x, y) => Math.abs(x - y);
console.log(sum, product, difference); // cannot use return, change to console log, return can only be used in function body

//#7
class Elephant {
   constructor(public age: number){}
    birthday = () => {
        this.age++
    };
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? 
// Fix this by using an arrow function in the Elephant class.
// - Answer: Must define arrow function with brackets, then the increment.
// Now it works.