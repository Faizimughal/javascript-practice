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



