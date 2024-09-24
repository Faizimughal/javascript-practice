// ----------------------------DAY1---------
// let a = 10;
// let b = 20;
// let a = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// document.write(a + b);

// ----------------------------DAY2---------
// let a = 15;
// a++;
// document.write(a);
// a--;
// document.write(a);

// let a = 10;
// a = a++; // post increment
// a = ++a; // pre increment
// document.write(a);

// let y = 10;
// x = y;
// document.write(x);

// let x = 21;
// y = 5;
// x %= y;  //x=x%y;
// document.write(x);

// strings
// a = 'ali';
// document.write(typeof a);

// a = "ahmad";
// b = "a doctor";
// text = a + "is" + b;
// document.write(text

// ----------------------------DAY3---------
//functions

// function add(a, b) {
//   return a * b;
// }
// document.write(add(10, 20));

//arrow-functions
// const sum = (a, b) => {
//   addition = a + b;
// };
// sum(10, 20);
// document.write(addition);

//objects

// const person = {
//   name: "khurram",
//   age: 25,
//   class_name: "BSCS",
//   rollno: 21,
// };
// person.address = "A Block street 1";
// document.write(person.name + "is" + person.age + "years old");
// document.write(person.name, person.address);

// const person = {};
// (person.name = "khurram"),
//   (person.age = 24),
//   (person.class_name = "BSCS"),
//   (person.rollno = 21),
//   document.write(
//     person.name +
//       "is" +
//       person.age +
//       "years old" +
//       "and he is studying in" +
//       person.class_name
//   );

//copy of object

// const person = {
//   name: "khurram",
//   age: 25,
//   class_name: "BSCS",
//   rollno: 21,
// };
// const b = person;
// b.name = "ali";

// document.write(person.name);

//object-methods

// const person = {
//   name: "khurram",
//   age: 25,
//   lastname: "shahzad",
//   class_name: "BSCS",
//   rollno: 21,
//   fullname: function () {
//     return this.name + " " + this.lastname;
//   },
// };
// document.write(person.fullname());

// const animal = {
//   name: "dog",
//   age: 14,
//   eye_color: "blue",
//   body_color: "brown",
//   food: "meat",
//   eat: function () {
//     return this.name + "" + "eats" + "" + this.food;
//   },
// };
// animal.weight = "24kg";

// document.write(
//   animal.name +
//     " " +
//     animal.age +
//     " " +
//     animal.eye_color +
//     " " +
//     animal.body_color +
//     " " +
//     animal.weight +
//     " " +
//     animal.eat()
// );

// ----------------------------DAY4---------
//object-display

//properties by name

// const person = {
//   name: "faizan",
//   class: "bscs",
//   age: 23,
//   rollno: 21,
// };
// document.getElementById("para").innerHTML = person.name;

//object-display
//properties by values

// const person = {
//   name: "faizan",
//   class: "bscs",
//   age: 23,
//   rollno: 21,
// };
// const myArray = Object.values(person);
// document.getElementById("para").innerHTML = myArray;

//object-display
//property json.stringyfy // javascript-object-notation

// const person = {
//   name: "faizan",
//   class: "bscs",
//   age: 23,
//   rollno: 21,
// };
// const myArray = JSON.stringify(person);
// document.getElementById("para").innerHTML = myArray;

//events

//template string

// let text = `he's my friend "ahmad"`;
// document.write(text);

//string-length
// let text = "faizan,ahmad,ali,1234,17,19";
// let length = text.length;
// document.write(length);

//escape characters
// let text = "faizan \\ ahmad";
// document.write(text);

// let person = {
//   name: "faizan",
//   age: 23,
//   class: "bscs",
//   rollno: 21,
// };
// document.getElementById("para").innerHTML = person.name;
// let myArray = Object.keys(person);
// let myArray = Object.values(person);
// document.getElementById("para").innerHTML = myArray;
// let myArray = JSON.stringify(person);
// document.getElementById("para").innerHTML = myArray;
