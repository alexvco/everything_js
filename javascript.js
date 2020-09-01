// FOREACH

var companies = [
  {name: 'Walmart', category: 'Retail', start: 1981, end: 2020},
  {name: 'Goldman', category: 'Finance', start: 1975, end: 1989},
  {name: 'Exxon', category: 'Oil', start: 1999, end: 2011},
  {name: 'Tesla', category: 'Tech', start: 2004, end: 2021}
];
companies.forEach((company, i, companies) => console.log(company));



// FILTER

var ages = [3, 6, 2, 33, 9, 1, 6];
var canDrink = ages.filter((age) => age >= 5); // [6, 9, 6]

// var canDrink = ages.filter((age, i, ages) => {
//   if (age >= 5) {
//     return true;
//   }
// });



// MAP (returns a new Array, whereas forEach doesn't return anything (undefined))

var companies = [
  {name: 'Walmart', category: 'Retail', start: 1981, end: 2020},
  {name: 'Goldman', category: 'Finance', start: 1975, end: 1989},
  {name: 'Exxon', category: 'Oil', start: 1999, end: 2011},
  {name: 'Tesla', category: 'Tech', start: 2004, end: 2021}
];
var companyNames = companies.map((company) => company.name); // ["Walmart", "Goldman", "Exxon", "Tesla"]



// REDUCE

var ages = [3, 6, 2, 33, 9, 1, 6];
var ageSum = ages.reduce((total, age) => total + age, 0); // 60

// var ageSum = ages.reduce(function(total, age) {
//   return total + age
// }, 0);
// essentially its setting total = 0 and then looping through ages and adding them to total



// SORT (this method is destructive)

var companies = [
  {name: 'Walmart', category: 'Retail', start: 1981, end: 2020},
  {name: 'Goldman', category: 'Finance', start: 1975, end: 1989},
  {name: 'Exxon', category: 'Oil', start: 1999, end: 2011},
  {name: 'Tesla', category: 'Tech', start: 2004, end: 2021}
];
var sortedCompanies = companies.sort((c1, c2) => c1.start - c2.start) // lists companies sorted by start date asc
// console.log(companies) # => overwrites companies and returns sortedCompanies

// var ages = [3, 6, 2, 33, 9, 1, 6];
// ages.sort() # incorrect => [1, 2, 3, 33, 6, 6, 9]
// console.log(ages) # => [1, 2, 3, 33, 6, 6, 9]

// var sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// })



// PUSH (adds item(s) at end of array - this method is destructive) 

var ages = [3, 6, 2, 33, 9, 1, 6];
var newLastAge = ages.push(88); // # => 8 (returns length of new array)
// console.log(ages) # => [3, 6, 2, 33, 9, 1, 6, 88]



// POP (removes last item of array - this method is destructive)

var ages = [3, 6, 2, 33, 9, 1, 6];
var lastAge = ages.pop(); // # => 6 (returns removed element)
// console.log(ages) # => [3, 6, 2, 33, 9, 1]



// UNSHIFT (Adds item(s) at beginning of array - this method is destructive)

var ages = [3, 6, 2, 33, 9, 1, 6];
var newFirstAge = ages.unshift(4); // # => 8 (returns length of new array)
// console.log(ages) # => [4, 3, 6, 2, 33, 9, 1, 6]



// SHIFT (remove first item of array - this method is destructive)

var ages = [3, 6, 2, 33, 9, 1, 6];
var firstAge = ages.shift(); // # => 3 (returns removed element)
// console.log(ages) # => [6, 2, 33, 9, 1, 6]



// FILL (replaces array with given value (optional: starting and ending index) - this method is destructive)

var ages = [3, 6, 2, 33, 9, 1, 6];
ages.fill(7, 2, 4) // [3, 6, 7, 7, 9, 1, 6]
// console.log(ages) # => [3, 6, 7, 7, 9, 1, 6]

// var ages = [3, 6, 2, 33, 9, 1, 6];
// ages.fill(7) // [7, 7, 7, 7, 7, 7, 7]
// console.log(ages) # => [7, 7, 7, 7, 7, 7, 7]



// REVERSE (this method is destructive)

var ages = [3, 6, 2, 33, 9, 1, 6];
ages.reverse(); // [6, 1, 9, 33, 2, 6, 3]
// console.log(ages) # => [6, 1, 9, 33, 2, 6, 3]



// INCLUDES

var ages = [3, 6, 2, 33, 9, 1, 6];
ages.includes(3); // true



// KEYS

var person = {first_name: 'John', last_name: 'Doe', yob: 1988};
Object.keys(person); // ["first_name", "last_name", "yob"]



// VALUES

var person = {first_name: 'John', last_name: 'Doe', yob: 1988};
Object.values(person); // ["John", "Doe", 1988]



// INDEXOF (returns the position of the first occurence)

var ages = [3, 6, 2, 33, 9, 1, 6];
ages.indexOf(9); // 4



// EVERY (returns a boolean (true) if condition is met for every/all element in array -> .all?)

var ages = [3, 6, 2, 33, 9, 1, 6];
ages.every((age) => age >= 5); // false



// SOME (returns a boolean (true) if condition is met for some/any element in array -> .any?)

var ages = [3, 6, 2, 33, 9, 1, 6];
ages.some((age) => age >= 5); // true



// FIND (returns the first element in an array that pass a test)

var companies = [
  {name: 'Walmart', category: 'Retail', start: 1981, end: 2020},
  {name: 'Goldman', category: 'Finance', start: 1975, end: 1989},
  {name: 'Exxon', category: 'Oil', start: 1999, end: 2011},
  {name: 'Tesla', category: 'Tech', start: 2004, end: 2021}
];
companies.find((company) => company.name == 'Exxon'); // {name: 'Exxon', category: 'Oil', start: 1999, end: 2011}



// SLICE (returns elements starting at the given start argument, and ends at, but does not include, the given end argument)

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.slice(3); // ["Apple", "Mango"]
fruits.slice(-4); // ["Orange", "Lemon", "Apple", "Mango"]
fruits.slice(1, 1); // []
fruits.slice(1, 3); // ["Orange", "Lemon"]
fruits.slice(2, -1); // ["Lemon", "Apple"]
fruits.slice(-1, -3); // []
fruits.slice(-3, -1); // ["Lemon", "Apple"]
fruits.slice(-1, 1); // []
// console.log(fruits) # => ["Banana", "Orange", "Lemon", "Apple", "Mango"];



// JOIN

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(); // "Banana,Orange,Apple,Mango"
fruits.join('-'); // "Banana-Orange-Apple-Mango"
fruits.join(' '); // "Banana Orange Apple Mango"
// console.log(fruits) # => ["Banana", "Orange", "Apple", "Mango"];



// SPLICE (returns the removed item(s). Modifies array by adding/removing items - this method is destructive)

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"];
fruits.splice(2); // ["Apple", "Mango", "Peach"]
// console.log(fruits) // ["Banana", "Orange"]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"];
fruits.splice(2, 0); // []
// console.log(fruits) // ["Banana", "Orange", "Apple", "Mango", "Peach"]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"];
fruits.splice(2, 1); // ["Apple"]
// console.log(fruits) // ["Banana", "Orange", "Mango", "Peach"]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"];
fruits.splice(2, 2); // ["Apple", "Mango"]
// console.log(fruits) // ["Banana", "Orange", "Peach"]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"];
fruits.splice(3, -1); // []
// console.log(fruits) // ["Banana", "Orange", "Apple", "Mango", "Peach"];

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"];
fruits.splice(-3, -1); // []
// console.log(fruits) // ["Banana", "Orange", "Apple", "Mango", "Peach"];

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"];
fruits.splice(-3, 1); // ["Apple"]
// console.log(fruits) // ["Banana", "Orange", "Mango", "Peach"]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"];
fruits.splice(-3, 2); // ["Apple", "Mango"]
// console.log(fruits) // ["Banana", "Orange", "Peach"];

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"]
fruits.splice(2, 1, "Lemon", "Kiwi"); // ["Apple"]
// console.log(fruits) // ["Banana", "Orange", "Lemon", "Kiwi", "Mango", "Peach"]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"]
fruits.splice(1, 2, "Lemon", "Kiwi"); // ["Orange", "Apple"]
// console.log(fruits) // ["Banana", "Lemon", "Kiwi", "Mango", "Peach"]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Peach"]
fruits.splice(-2, 3, "Lemon", "Kiwi"); // ["Mango", "Peach"]
// console.log(fruits) // ["Banana", "Orange", "Apple", "Lemon", "Kiwi"]







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STRING


var food = 'french fries';

// charAt() // Returns the character at the specified index (position)
food.charAt(3); // 'c'

// includes() // true # Checks whether a string contains the specified string/characters
food.includes('fr'); // true
food.includes('fc'); // false

// match() // Searches a string for a match against a regular expression, and returns the matches, as an Array object.
food.match(/fr/gi); // ['fr', 'fr']
food.match(/fre/gi); // ['fre']

// indexOf() // Returns the position of the first found occurrence of a specified value in a string
food.indexOf('k'); // -1
food.indexOf('e'); // 2

// repeat() // Returns a new string with a specified number of copies of an existing string
food.repeat(0) // ''
food.repeat(3) // 'french friesfrench friesfrench fries'

// replace() // Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
food.replace('fr', 'az'); // 'azench fries'
food.replace(/fr/gi, 'az'); // 'azench azies'
food.replace('kx', 'as'); // 'french fries'
food.replace('fr'); // 'undefinedench fries'

// search() // Searches a string for a specified value, or regular expression, and returns the position of the match
food.search('fr'); // 0
food.search(/fr/gi); // 0
food.search(/ch/gi); // 4
food.search(/k/gi); // -1

// startsWith() // Checks whether a string begins with specified characters
food.startsWith('fr'); // true
food.startsWith('ch'); // false
food.startsWith('ch', 4); // true

// endsWith() // Checks whether a string ends with specified characters
food.endsWith('ies') // true
food.endsWith('ch') // false
food.endsWith('ch', 6) // true

// substr() // Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
food.substr(3); // 'nch fries'
food.substr(3, 2); // nc'
food.substr(-4, 2); // 'ri'
food.substr(-4, -1); // ''
food.substr(-4, -2); // ''

// substring() // Extracts the characters in a string between "start" and "end", not including "end" itself and returns the new substring
food.substring(2); // 'ench fries'
food.substring(2, 5); // 'enc'
food.substring(-4, 2); // 'fr'
food.substring(-6, 2); // 'fr'
food.substring(-6, -2); // ''
food.substring(-2); // 'french fries'
food.substring(-2, 3); // 'fre'

// trim() // Removes whitespace from both ends of a string
food.trim(); // 'french fries'
'  french   fries.  '.trim(); // 'french   fries.'

// slice() // Extracts a part of a string and returns a new string
food.slice(2); // 'ench fries'
food.slice(2, 5); // 'enc'
food.slice(-2); // 'es'
food.slice(-2, -5); // ''
food.slice(-5, -2); // 'fri'

// split() // Splits a string into an array of substrings
food.split(' '); // ['french', 'fries']
food.split('n'); // ['fre', 'ch fries']
food.split('fr'); // ['', 'ench ', 'ies']

// toLowerCase()
food.toLowerCase(); // 'french fries'

// toUpperCase()
food.toUpperCase(); // 'FRENCH FRIES'

// toString()
food.toString(); // 'french fries'

// parseInt()
parseInt('23'); // 23
parseInt('23.6'); // 23

// parseFloat()
parseFloat('23'); // 23
parseFloat('23.6'); // 23.6










// MATH

// abs() // returns absolute value of x
Math.abs(-4.7); // returns 4.7

// ceil() // returns the value of x rounded up to its nearest integer:
Math.ceil(4.4); // returns 5

// floor() // returns the value of x rounded down to its nearest integer
Math.floor(4.7); // returns 4

// round() // Round x to the nearest integer:
Math.round(2.53); // 3
Math.round(2.43); // 2

// toFixed // Round to x decimal places
var num = 5.56489;
num.toFixed(0); // '6'
num.toFixed(1); // '5.6'
num.toFixed(2); // '5.56'
num.toFixed(3); // '5.565'
(5).toFixed(3); // '5.000'

// random() // returns a random number between 0 (inclusive), and 1 (exclusive):
Math.random(); // 0.8758599512255674

// sqrt() // returns square root of x
Math.sqrt(64); // returns 8

// min() // find the lowest value in a list of arguments
Math.min(0, 150, 30, 20, -8, -200); // returns -200
// Math.min([0, 150, 30, 20, -8, -200]); // NaN

// max() // find the highest value in a list of arguments
Math.max(0, 150, 30, 20, -8, -200); // returns 150
// Math.max([0, 150, 30, 20, -8, -200]); // NaN









// DATE

Date.now(); // 1598831947552 # Returns the number of milliseconds since midnight Jan 1, 1970
Date.parse('2020-08-30T23:58:01'); // 1598857081000 # Parses a date string and returns the number of milliseconds since January 1, 1970

var d1 = new Date(); // 2020-08-30T23:43:04.588Z # returns current DateTime in UTC
var d2 = new Date(3020); // 1970-01-01T00:00:03.020Z # returns DateTime since 1970-01-01 + arg in milliseconds
var d3 = new Date('2020-07-21'); // 2020-07-21T00:00:00.000Z
var d4 = new Date(2020, 08, 20, 11, 26);

// toString() // 'Sun Aug 30 2020 16:43:04 GMT-0700 (Pacific Daylight Time)'
// getDate() // Returns the day of the month (from 1-31)
// getDay()  // Returns the day of the week (from 0-6)
// getFullYear() // Returns the year
// getHours()  // Returns the hour (from 0-23)
// getMilliseconds() // Returns the milliseconds (from 0-999)
// getMinutes()  // Returns the minutes (from 0-59)
// getMonth()  // Returns the month (from 0-11)
// getSeconds()  // Returns the seconds (from 0-59)
// getTime() // Returns the number of milliseconds since midnight Jan 1 1970, and a specified date

// there is also the set version aka setDate()










// JSON (parse, stringify)

var str = "[1, 2, 3]"
var arr = JSON.parse(str) // [1, 2, 3]
// console.log(typeof str) // string
// console.log(typeof arr) // object


var obj = [1, 3, 5]
var str = JSON.stringify(obj) // "[1,3,5]"
// console.log(typeof obj) // object
// console.log(typeof str) // string











// ERRORS

try {
  adddlert("Welcome");
}
catch(err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // adddlert is not defined
}







