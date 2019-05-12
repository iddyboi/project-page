let name = "idris";

//concatination
console.log("my name is " + name);

//template strings
console.log(`my name is ${name}`);

const s = "hello world";

console.log(s.length);
console.log(s.toUpperCase()); //uppercase
console.log(s.substring(0, 5)); //takes out characters from string
console.log(s.split("")); // splits words into arrays

//arrays

let arr = [1, 2, 3, 4, 5]; //create apples
console.log(typeof arr); //checks type of varaible

arr.push("mango"); // adds to end of array
arr.unshift("firstnewitem"); // adds to beginning of array
arr.pop(); //takes last item off
arr.indexOf(3); //checkes index of item in array

const person = {
  //this is an object
  firstname: "idris",
  lastname: "taiwo",
  age: 30,
  hobbies: ["football", "programming", "art", "games"],
  address: {
    firstline: "havil",
    second: "camberwell",
    postcode: "sw11ee"
  }
};

console.log(person.age); // access to persons age
console.log(person.hobbies[2]); //access array in created object 'persons'

person.email = "idris@gmail.com"; // create a new variable for persons
console.log(person.email);

const todo = [
  {
    id: 1,
    text: "build website",
    iscompleted: true
  },
  {
    id: 2,
    text: "learn python",
    iscompleted: true
  },
  {
    id: 3,
    text: " learn french",
    iscompleted: false
  }
];

console.log(todo[1].text); //this is to access and array with objects within it

const todoJSON = JSON.stringify(todo); // this is how create a JSON file and send it to a server
console.log(todoJSON);

//For loop

for (let i = 0; i <= 10; i++) {
  console.log("for loop: " + i);
}

//while

let x = 0;

while (x < 10) {
  console.log(x);
  x++;
}

//for loop with array

for (let y = 0; y < todo.length; y++) {
  if (y == 1) {
    console.log(todo[y]);
  }
}

//best way to do for loop for array
for (let todos of todo) {
  console.log(todo);
}
//foreach, map,filter

//foreach
todo.forEach(function(todo) {
  console.log("foreach loop : " + todo);
});

//map
//  which can access an array and create a new variable from value taken
const todotext = todo.map(function(todo) {
  return todo.text;
});

console.log(todotext);

//filter
//this is a loop which will filter the type of information you would want to filter out
const todocompleted = todo
  .filter(function(todo) {
    return todo.iscompleted === true; // i searched for any completed task in the todo's array
  })
  .map(function(todo) {
    // and here we can append the map function to print out specified information
    return todo.text;
  });

// if statements

const xy = 20;
const yx = 10;

if (xy === 10) {
  console.log("x is 10");
} else if (xy > 10 || yx <= 10) {
  console.log("x is greater than 10 and equal to 10");
} else {
  console.log("x is not 10");
}

const not = 100;

const color = not > 10 ? "red" : "blue"; // using a variable to declare a vairable with if statements

console.log(color);

switch (color) {
  case "red":
    console.log("colour is red");
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("what is this lol");
}

//functions

function addnums(num1, num2) {
  return num1 + num2;
}
console.log(addnums(1, 2));

//arrow functions

const subnum = (num3, num4) => num3 - num4;

console.log(subnum(10, 5));

//object oriented

function Human(firstname, lastname, email, dob) {
  (this.firstname = firstname),
    (this.lastname = lastname),
    (this.email = email),
    (this.dob = new Date(dob));
}

Human.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
};

//class
class Person {
  constructor(firstname, lastname, email, dob) {
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.email = email),
      (this.dob = new Date(dob));
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getfullname() {
    return this.firstname + " " + this.lastname;
  }
}

// Instanstiate object
const person1 = new Human("john", "taiwo", "idris2@gmail.com", "5-10-1989");
console.log(person1.dob.getFullYear());
const person2 = new Human("jullu", "tribe", "jull2922@gmail.com", "3-10-87");
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());

const person3 = new Person("idirs", "ade", "01-01-1990");
console.log(person3.getfullname());

//DOM MANIPULATION
