/*

Challenge 1.
Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

*/

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function studentCohort(arr) {
    for (let val of arr) {
        console.log('Name: ', val.name, 'cohort: ', val.cohort);
    }
}

studentCohort(students);

/*

Challenge 2.
Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.

*/

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function usersDivided(arr) {
    let counter = 0;
    for (let obj in arr) {
        console.log(obj);
        let el = arr[obj];
        for (let val of el) {
            counter++;
            let length = val['first_name'].length + val['last_name'].length;
            console.log(counter, val['last_name'].toUpperCase()+ ', ' +val['first_name'].toUpperCase(), length)
        }
    }
}

usersDivided(users);