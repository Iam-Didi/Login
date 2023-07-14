//arrays  variables that hold multiple values

/*
const fruits = ['apples', 'oranges', 'pears'];


fruits[3] = 'grapes';

fruits.push('mangoes', 'paw paw');

fruits.unshift('strawberrys')

fruits.pop();

console.log(Array.isArray(fruits)); //to check if a variable is an arrray

console.log(fruits);

*/


//talking abt object literals, basiclly key value  
/*
const person = {
     firstName: 'john',
     lastName: 'Doe',
     age: 30,
     hobbies: ['music', 'movies', 'sports'],
     address: {
        street: '21 alhaji wasiu',
        city: 'boston',
        state: 'MA'
     }
}

person.email = 'divinerichard007@gmail.com';

console.log(person); */

//learning arrays of object, having objects inside an array

// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         isCompleted: true
//     },
//     {
//         id: 1,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 1,
//         text: 'dentist appt',
//         isCompleted: false
//     }
// ];

//also to send data to a server we send it in a 
//const todoJSON = JSON.stringify(todos)

//console.log(todoJSON);

//learning for loops 

/*
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true,
        fromRange:50
        
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
        fromRange:100
        
    },
    {
        id: 3,     
        text: 'dentist appt',
        isCompleted: false,
        fromRange:50
    }
];


// learn how to use forEach, map, filter
const todoCompleted = todos.filter(function(todo) {
    return todo.fromRange === 50;
}).map(function(todo){
    return todo.text.length;
});
console.log(todoCompleted);

*/

/* learning how to use switches 
const x = 9;

const color = 'green';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break; 
        default:
            console.log('color is Not red or blue');
            break;
};
*/

//learning how to use functions 
/*
function addNums(num1 = 9, num2 = 3) {
    return num1 = num2;
}

console.log(addNums());  */

//using the arrow function 
/*
const addNums = num1 => num1 * 10

console.log(addNums(6))
*/
//object oriented programs 
/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
}
//instantiate object 
const person1 = new Person('john', 'doe', '4-3-1999');
const person2 = new Person('Mary', 'smith', '3-3-1999');
console.log(person1.getBirthYear());
*/


