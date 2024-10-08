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

// arrow-functions
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

// ----------------------------DAY5---------

//strings-methods

// string - length;
// let text = "faizan,ahmad,ali,1234,17,19";
// let length = text.length;
// document.write(length);

//string-charAT(),charCodeAt(),

// let text = "faizan,ahmad,ali,1234,17,19";
// a = text[0];
// a = text.charAt(0);
// a = text.charCodeAt(0);
// document.write(a);

//string-uppercase(),lowercase()

// let text = "faizan,ahmad,ali,1234,17,19";
// a = text.toUpperCase();
// a = text.toLowerCase();
// document.write(a);

//string extract parts
//slice,substring,substr(start,end);

// let text = "faizan,ahmad,ali,1234,17,19";
// a = text.slice(0, 6);
// a = text.substring(0, 6);
// document.write(a);
// document.write(text);

//string concat

// let text = "faizan,ahmad,ali,1234,17,19";
// let text1 = "faisalabad";
// let a = text.concat(text1);
// document.write(a);

//string-trim

// let text = "        faizan,ahmad,ali,1234,17,19      ";
// let text1 = text.trim();
// document.write(text1);

//string pad

// let text = "a";
// let text1 = text.padStart(5, "t");//tttta
// let text1 = text.padEnd(10, "t");
// document.write(text1);

//replace

// let text = "faizan,ahmad,ali,1234,17,19";
// let text1 = text.replace("faizan", "faisalabad");
// document.write(text1);

//repeat

// let text = "faizan,ahmad,ali,1234,17,19";
// let text1 = text.repeat(3);
// document.write(text1);

//replace-all

// let text = "faizan,ahmad,ali,1234,17,19,faizan";
// let text1 = text.replaceAll("faizan", "faisalabad");
// document.write(text1);

//split

// let text = "faizan,ahmad,ali,1234,17,19";
// let text1 = text.split("ali");
// let text1 = text.split(",");
// let text1 = text.split("");
// document.write(text1);

// ----------------------------DAY6---------
//string-search-methods
//string index-of

// let str = "faizan,123,12,13,faisalabad";
// let a = str.indexOf("123");
// document.write(a);

//last-index-of

// let str = "faizan,123,12,13,faisalabad,faizan";
// let a = str.lastIndexOf("faizan");
// let c = str.lastIndexOf("khurram");
// let b = str.indexOf("faizan");
// document.write(
//   "value of indexof b =",
//   b,
//   "value of last indexof a =",
//   a,
//   "value of last indexof c =",
//   c
// );

//string-search-method

// let str = "faizan,123,12,13,faisalabad,faizan";
// let a = str.search("faizan");
// document.write(a);

//string-match

// let str = "faizan,123,12,13,faisalabad,faizan";
// let a = str.match("khurram");
// document.write("match value = ", a);

//string-match-all

// let str = "faizan,123,12,13,faisalabad,faizan,faizan";
// const Iterator = str.matchAll("faizan");
// b = Array.from(Iterator);
// document.write("match-all value = ", b);

//string includes

// let str = "faizan,123,12,13,faisalabad,faizan";
// let a = str.includes("khurram"); //false
// let a = str.includes("faizan"); //true
// document.write(a);

//string startsWith

// let str = "faizan,123,12,13,faisalabad,faizan";
// let a = str.startsWith("faizan"); //true
// let a = str.startsWith("faizan", 0);
// let a = str.startsWith("faizan", 7); //false
// document.write(a);

//string endsWith

// let str = "faizan,123,12,13,faisalabad,faizan";
// let a = str.endsWith("faizan"); //true
// let b = str.endsWith("13"); //false
// document.write(a, b);

//number-methods
//number-tostring

// let a = 12;
// a = a.toString();
// document.write(typeof a);

//number-to-exponential

// let a = 7.7967;
// a = a.toExponential(2);
// document.write(a);

//number-to-fixed

// let a = 7689;
// a = a.toFixed(4);
// document.write(a);

//number-to-precision

// let a = 345;
// a = a.toPrecision(1);
// document.write(a);

//value-of

// let a = 1267;
// a = a.valueOf();
// document.write(a);

// ----------------------------DAY7---------

//number-properties

// let x = Number.EPSILON;
// document.write(x);

//number.max-value

// let x = Number.MAX_VALUE;
// document.write(x);

//number.min-value

// let x = Number.MIN_VALUE;
// document.write(x);

// min-Infinity
// max-infinity
// NaN

//arrays

// let a = [12, 13, 14, 17, 20];
// document.write(a);

// let a = new Array(12, 13, 14, 17, 20);
// document.write(a);

// let a = [12, 13, 14, 17, 20];
// document.write(a[3]);

// let a = [];
// a[0] = "faizan";
// a[1] = "ahmad";
// a[2] = "ali";
// document.write(a);

//concatination of an arrays

// let a = [12, 13, 14, 17, 20];
// let b = ["faizan", "ahmad", "ali"];
// let c = a + b;
// document.write(c);

//Changing an Array Element

// let a = [12, 13, 14, 17, 20];
// a[0] = "faizan";
// document.write(a);

//Converting an Array to a String

// let a = [12, 13, 14, 17, 20];
// a = a.toString();
// document.write(typeof a);

//object

// const person = { firstName: "John", lastName: "Doe", age: 46 };
// document.write(person.firstName);

//Array Elements Can Be Objects

// const person = { firstName: "John", lastName: "Doe", age: 46 };
// let ab = JSON.stringify(person);
// let sum = (a, b) => {
//   c = a + b;
// };
// sum(10, 20);
// // document.write(c);

// let a = [10, 20, 30, 40];

// let arr = [];
// arr[0] = ab;
// arr[1] = a;
// arr[2] = c;

// document.write(arr);

// array-length

// let a = [12, 13, 14, 17, 20];
// let b = a.length;
// document.write(b);

//array-sorting

// let a = [12, 21, 18, 17, 20];
// a.sort();
// document.write(a);

// Accessing the Last Array Element

// let a = [12, 21, 18, 17, 20];
// // document.write(a[0]);
// a = a[a.length - 1];
// document.write(a);

//Adding Array Elements

// let a = [12, 21, 18, 17, 20];
// a.push("faizan");
// a.pop();
// document.write(a);

//nested array & object

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// document.write(myObj.cars[0].models[2]);

// ----------------------------DAY8---------

// array-at

// let a = [12, 21, 18, 17, 20];
// b = a.at(0);
// document.write(b);

// array-join

// let a = [12, 21, 18, 17, 20];
// let b =[10,13,14];
// let c = a.join(b);
// document.write(c);

// array-shift

// let a = [12, 21, 18, 17, 20];
// a.shift();
// document.write(a);

//array-unshift

// let a = [12, 21, 18, 17, 20];
// a.unshift(0);
// document.write(a);

//array-delete

// let a = [12, 21, 18, 17, 20];
// b = a.delete();
// document.write("value of array a=", a, "value of  b=", b);

//array-concat

// let a = [12, 13, 14, 15];
// let b = ["faizan", "ali", "ahmad"];
// let c = b.concat(a);
// document.write(c);

// array-copywithin

// let a = [12, 13, 14, 15];
// let b = a.copyWithin(0, 3);
// document.write(b);

//array-flat

// let a = [12, [13, [14, 15]], 16, ["faizan", "ahamd"]];
// let b = a.flat();
// document.write(b);

// array-splice

// let a = [12, 13, 14, 15];
// let b = a.splice(1, 2, "faizan", "ahmad");
// document.write("value of array a=", a, "value of array b=", b);

//array-slice

// let a = [12, 13, 14, 15];
// let b = a.slice(1, 3);
// document.write("value of array a=", a, "value of array b=", b);

//array-to-splice

// let a = [12, 13, 14, 15];
// let b = a.toSpliced(1, 2);
// document.write("value of array a=", a, "value of array b=", b);

//array-find

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(num) {
//   return num > 18;
// }

// document.write("First element in numbers greater than 18 is ", first);

//array-findindex

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);
// function myFunction(num) {
//   return num > 18;
// }
// document.write("First element in numbers greater than 18 is ", first);

//array-findlastindex

// const temp = [27, 28, 30, 40, 42, 35, 30];
// let pos = temp.findLastIndex((x) => x > 40);
// document.write("Last element in array greater than 40 is at index ", pos);

// ----------------------------DAY9---------

//date-function

// let a = Date();
// document.write(a);

//get-full-year

// const d = new Date("2021-03-25");
// d.getMonth();
// document.write(d);

//sin function

// let a = Math.sin(90);
// document.write(a);

//math-random

// let a = Math.random();
// document.write(a);

//power

// let a = Math.pow(2, 3);
// document.write(a);

//logarithm

// let a = Math.log(2);
// document.write(a);

//log base 10

// let a = Math.log10(1000);
// document.write(a);

//math.floor-math-random

// let a = Math.floor(Math.random() * 100);
// document.write(a);

//boolean

// let a = Boolean(10 < 9);
// document.write(a);    //false

// let a = Boolean(1);
// document.write(a); //true

// let a = Boolean("");
// document.write(a);   //false

//if-else-if

// let a = 30;
// let b = 20;
// if (a == b) {
//   document.write("a is greater than b");
// } else if (b < a) {
//   document.write("b is less than a");
// } else {
//   document.write("error");
// }

//switch

// example1

// let a = "faizan";
// switch (a) {
//   case "faizan":
//     document.write("a is greater than b");
//     break;
//   case "ali":
//     document.write("b is less than a");
//     break;
//   default:
//     document.write("error");
// }

//example 2

// let b = 20;
// let c = 10;
//  let a = b + c;
// switch ((a = b + c)) {
//   case 30:
//     document.write("true");
//     break;
//   case 20:
//     document.write("false");
//     break;
//   default:
//     document.write("error");
// }

//example3
//date

// switch (new Date().getDay()) {
//   case 1:
//     document.write("Monday");
//     break;
//   case 2:
//     document.write("Tuesday");
//     break;
//   case 3:
//     document.write("Wednesday");
//     break;
//   case 4:
//     document.write("Thursday");
//     break;
//   case 5:
//     document.write("Friday");
//     break;
//   case 6:
//     document.write("Saturday");
//     break;
//   case 0:
//     document.write("Sunday");
//     break;
//   default:
//     document.write("error");
// }

//----------------------------DAY10---------

//loops
//for-loop

//tables

// for (let i = 1; i <= 10; i++) {
//   let a = i * 98;
//   document.write("98*", i, "=", a, "<br>");
// }

//while-loop

// let i = 1;
// while (i <= 10) {
//   i++;
//   let a = i * 98;
//   document.write("98*", i, "=", a, "<br>");
// }

//do-while

// let i = 0;
// do {
//   i++;
//   let a = i * 98;
//   document.write("98*", i, "=", a, "<br>");
// } while (i <= 10);

// patterns

// for (let a = 0; a <= 4; a++) {
//   for (let b = a; b <= 3; b++) {
//     document.write("*");
//   }
//   document.write("*", "<br>");
// }

//----------------------------DAY11---------
//sets

// let a = new Set([12, 13, 14, 15, 16]); //intialize and declaration of a set

// let a = new Set();   //empty set
// a.add("ali");    //add values
// a.add("faizan");
// a.add("ahmad");
// a.add("gulzar");
// a.add("arslan");
// for (const x of a) document.write(x + " ");
// document.write(a.size);

//has keyword

// let a = new Set([12, 13, 14, 15, 16]); //intialize and declaration of a set
// answer = a.has(12);
// for (const x of a) document.write(x + " ");
// document.write(answer);

//values() method

// let a = new Set([12, 13, 14, 15, 16]);
// myIterator = a.values();
// for (x of myIterator) document.write(x, "<br> ");

//foreach()

// let a = new Set([12, 13, 14, 15, 16]);
// a.forEach((value) => {
//   document.write(value + " ");
// });

//entries()

// let a = new Set([12, 13, 14, 15, 16]);
// let myIterator = a.entries();
// for (let x of myIterator) {
//   document.write(x + "<br>");
// }

//maps

// let a = new Map(); //create a new map
// a.set("faizan", 200); // give key-value pair to the map
// a.set("ali", 400);
// a.set("ahmad", 300);
// //get value
// document.write(a.get("faizan")); //returns 200

// let a = new Map([
//   //intialize and declare together maps
//   ["faizan", 200],
//   ["ali", 400],
//   ["arslan", 500],
//   ["ahmad", 300],
// ]);
// // document.write(a.get("faizan"));
// // document.write(typeof a); //object
// // document.write(a.size); //4
// // a.delete("faizan"); //delete faizan
// // document.write(a.get("faizan"));
// // a.clear(); //clear the map

// //has keyword
// let b = a.has("faizan");
// document.write(b);   //return true

//----------------------------DAY12---------

// let a = new Map([
//   ["faizan", 200],
//   ["ahamd", 300],
//   ["haider", 400],
//   ["ali", 500],
//   ["arsalan", 600],
// ]);
// a.forEach((value, key) => {
//   document.write(key, "=", value, "<br>");
// });

//type-conversions

//convert string into numbers.

// let a = Number("3.14"); //by use of number function
// let b = a * a;
// document.write(b, "<br>");

// let c = Number("");
// d = c + c;
// document.write(d);

//number methods

//parse-int

// let num = 3.1234;
// newnum = parseInt(num);
// document.write(newnum);

// parse-float

// let num = 3.4;
// newnum = parseFloat(num);
// document.write(newnum);

//numbers into string

// let a = String(3.14);
// document.write(a);

//dates in to numbers

// let a = new Date();
// b = Number(a);
// document.write(b);

// let a = new Date();
// a.getTime();
// let b=Number(a);
// document.write(b);

//boolean into number

// let a = Number(true);
// document.write(a);   //1

// ------------------destructuring-------------

// destructuring of object

// let person = {
//   firstname: "faizan",
//   lastname: "shahzad",
//   age: 23,
// };

//destructuring
// let { firstname, lastname, age, country = "pakistan" } = person;
// document.write(firstname, " ", lastname, " ", age, " ", country);

// Object Property Alias

// let person1 = {
//   firstname: "faizan",
//   lastname: "shahzad",
//   age: 23,
// };
// //destructuring
// let { firstname: name } = person1;
// document.write(name);

//string destructuring

// Create a String
// let name = "faizan";

// // Destructuring
// let [a1, a2, a3, a4, a5, a6] = name;
// document.write(a1, a2, a3, a4, a5, a6);

//array-destructuring

// let fruits = ["apple", "mango", "orange", "banana"];

// //destructuring
// let [fruit1, fruit2] = fruits;
// document.write(fruit1, " ", fruit2);

//display with index values //position values

// let fruits = ["apple", "mango", "orange", "banana"];

// //destructuring
// let { [2]: fruit1, [3]: fruit2 } = fruits;
// document.write(fruit1, " ", fruit2);

//destructuring of maps

// let a = new Map([
//   ["faizan", 200],
//   ["ahamd", 300],
//   ["haider", 400],
//   ["ali", 500],
//   ["arsalan", 600],
// ]);
//way1
// a.forEach((value, key) => {
//   document.write(key, "=", value, "<br>");
// });

//way2
// for (const [key, value] of a) {
//   document.write(key, "=", value, "<br>");
// }

//swapping

// let firstName = "faizan";
// let lastName = "mehmood";

// //destructuring or swapping

// let [firstname, lastname] = [lastName, firstName];
// document.write(firstName);

// ------------------------regexp---------

// let text = "visit w3schools";
// let n = text.search("w3schools");
// document.write(n);  //6

// with regexp

// let text = "visit w3schools";
// let n = text.search(/w3schools/i);
// document.write(n);   //6

// replace

// let text = "visit my home";
// let newtext = text.replace("home", "office");
// document.write(newtext);

//----------------------------DAY13---------

// error-handling

// try {
//   alert("welcome guest");
// } catch (error) {
//   document.write("error occured");
// }

// function myFunction() {
//   const message = document.getElementById("para");
//   message.innerHTML = "";
//   let x = document.getElementById("demo").value;
//   try {
//     if (x.trim() == "") throw "empty";
//     if (isNaN(x)) throw "not a number";
//     x = Number(x);
//     if (x < 5) throw "too low";
//     if (x > 10) throw "too high";
//   } catch (error) {
//     message.innerHTML = "input is " + error;
//   } finally {
//     document.getElementById("demo").value = "";
//   }
// }

// Reference Error

// let x = 5;
// try {
//   x = y + 1;    // y cannot be used (referenced)
// } catch (err) {
//   document.getElementById("para").innerHTML = err.name;
// }

//syntax error

// try {
//   eval("alert('Hello)"); // Missing ' will produce an error
// } catch (err) {
//   document.getElementById("para").innerHTML = err.name;
// }

// type error

// let num = 1;
// try {
//   num.toUpperCase(); // You cannot convert a number to upper case
// } catch (err) {
//   document.getElementById("para").innerHTML = err.name;
// }

// URI (Uniform Resource Identifier) Error

// try {
//   decodeURI("%%%"); // You cannot URI decode percent signs
// } catch (err) {
//   document.getElementById("para").innerHTML = err.name;
// }

//----------------------------DAY14---------

// javascript-classes
//class1

// class car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }
// const mycar = new car("toyata", 2014);
// document.write("My car is" + mycar.age() + "years old");

//class2
// class person {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   country() {
//     return "pakistan is my country";
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }
// const myperson = new person("Faizan", 2000);
// document.write(
//   "My name is " +
//     " " +
//     myperson.name +
//     ", " +
//     " I am " +
//     myperson.age() +
//     " years old. " +
//     " And " +
//     myperson.country()
// );

//----------------------------DAY15---------

// js objects

// let person = new Object();
// person.name = "";

//object constructor

function Person(firstname,lastname,age){
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
}
const myperson=new Person('faizan','mehmood',24);
document.write('my name is '+myperson.firstname);


