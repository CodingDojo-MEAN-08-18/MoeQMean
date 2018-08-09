// 1.
// console.log(hello);
// var hello = 'world';

var hello;
console.log(hello); // output: undefined
hello = 'world';

// 2.
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

var needle = 'haystack';
test(); // logs undefined, calling before function is defined.
function test(){
    needle = 'magnet';
    console.log(needle); // output: magnet
}

// 3.
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
var brendan;
brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); // output: only okay
}
console.log(brendan); // output: super cool

// 4.
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
var food;
food = 'chicken';
console.log(food); // output: chicken
eat(); // undefined, calling before defining the function
function eat(){
    food = 'half-chicken';
    console.log(food); // output: half-chicken
    var food = 'gone';
}

// 5.
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

mean(); // output undefined, calling before defining the function
console.log(food); // output: food is undefined, unless its from previous variable
var mean = function() {
    food = "chicken";
    console.log(food); // output: chicken
    var food;
    food = "fish";
    console.log(food); // output: fish
}
console.log(food); // output: undefined, outside of scope of the function.

// 6.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

console.log(genre); // output: genre is undefined, calling before defining the variable
var genre = "disco";
rewind(); // output: rewind() is undefined, calling before defining the function
function rewind() {
    genre = "rock";
    console.log(genre); // output: rock
    var genre;
    genre = "r&b";
    console.log(genre); // output: r&b
}
console.log(genre); // output: disco

// 7.
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
dojo = "san jose"; // bad way of defining a function.
console.log(dojo); // output: san jose
learn(); // output: undefined, calling before defining the function.
function learn() {
    dojo = "seattle";
    console.log(dojo); // output: seattle
    var dojo;
    dojo = "burbank";
    console.log(dojo); // output: dojo
}
console.log(dojo); // output: san jose

// 8.
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

console.log(makeDojo("Chicago", 65)); // output: undefined, calling before defining the function
console.log(makeDojo("Berkeley", 0)); // output: undefined, calling before defining the function
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name; // sets name to the object
    dojo.students = students; // sets student to the object
    if (dojo.students > 50){
        dojo.hiring = true; // sets hiring to true and into the object if the condition is met
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // output: cannot reassign to constant, but can only add into it.
    }
    return dojo; // output: depends on the conditionals, but will contain name and students
}