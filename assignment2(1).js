//02. Calculate BMI and print results using ternary operator and if else statements
var weight=20;
var height=1.5;
var bmi=weight/Math.pow(height,2);
if(bmi<16){
    console.log("Severe thinness")
}
else if(bmi<=16 && bmi>17){
    console.log("Moderate thinness")
}
else if(bmi<=17 && bmi>18.5){
    console.log("Mild thinness")
}
else if(bmi<=18.5 && bmi>25){
    console.log("Normal ")
}
else if(bmi<=25 && bmi>30){
    console.log("Overweight")
}
else if(bmi<=30 && bmi>35){
    console.log("Obese Class I")
}
else if(bmi<=35 && bmi>40){
    console.log("Obese Class II")
}
else if(bmi>40){
    console.log("Obese Class III")
}

//or
console.log(
    bmi<16?"severe thinness":
    bmi<17?"moderate thinness":
    bmi<18.5?"Mild thinness":
    bmi<25?"Normal":
    bmi<30?"Overweight":
    bmi<35?"Obese Class I":
    bmi<40?"Obese Class II":
    "Obese Class III"
);


//03. Five examples using for in loop , for of loop - Array and objects
//Example1: for...in with object
let person ={Name:"Archana", Age:21, Place:"Bangalore"};
for(let key in person){
    console.log(key+" : "+person[key]);
}

//Example2: for...in with Array(indexes)
let number =[3, 53, 62, 52, 5];
for(let index in number){
    console.log("Index- "+index+": Value-"+number[index]);
}

//Example3: for...of with Array(values)
let fruits =["Apple","Mango","Banana"];
for(let fruit of fruits){
    console.log("Fruit:"+fruit);
}

//Example4: for...of with Array of Objects
let students=[
    {name:"Archana", marks:20},
    {name:"Moulya", marks:21},
    {name:"Smruthi", marks:22},    
];
for(let student of students){
    console.log(student.name+" scored "+student.marks);
}

//Example5: for...of with Object inside Array
let cars=[
    {brand:"BMW", maodel:"X5"},
    {brand:"Audi", maodel:"Q7"}   
];
for(let car of cars){
    for(let key in car){
    console.log(key+" : "+car[key]);
    }
}


//04. What is callback function? Write an example.
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Passing sayGoodbye as a callback
greet("Archana", sayGoodbye);


//08. Write a program to find prime number or not using named and anonymous functions
// Named Function
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true

// Anonymous Function
let checkPrime = function(num) {
  if (num <= 1) return false;ca
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(checkPrime(10)); // false


//09. Write a program for bubble sort using named and anonymous functions
// Named function for Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// Example usage
let numbers1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted (Named Function):", bubbleSort(numbers1));

// Anonymous function assigned to a variable
let bubbleSortAnon = function(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};
// Example usage
let numbers2 = [5, 1, 4, 2, 8];
console.log("Sorted (Anonymous Function):", bubbleSortAnon(numbers2));


//10. Write a program to reverse string using named and anonymous functions
// Named Function
function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log(reverseStr("Hello"));

// Anonymous Function
let revStr=function(str){
    return str.split("").reverse().join("");
};
console.log(revStr("world"));


//11. Write a program to find second largest number using named and anonymous functions
// Named Function
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second;
}
console.log(secondLargest([10, 20, 4, 45, 99])); // 45

// Anonymous Function
let findSecond = function(arr) {
  let first = -Infinity, second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }

  return second;
};
console.log(findSecond([5, 1, 2, 9, 9, 7])); // 7

//12. Write a program to find factorial of number using named and anonymous functions
// Named Function
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Anonymous Function
let fact = function(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
};
console.log(fact(4)); // 24

//13. Write a program to print fibonacci series using named and anonymous functions
// Named Function
function fibonacci(n) {
  let a = 0, b = 1;
  let series = ""; // We'll build output as a string without using arrays

  for (let i = 0; i < n; i++) {
    series += a + " "; // append current number
    let next = a + b;
    a = b;
    b = next;
  }

  return series.trim();
}

console.log(fibonacci(7)); // "0 1 1 2 3 5 8"

// Anonymous Function
let fibo = function(n) {
  let a = 0, b = 1;
  let result = "";
  
  for (let i = 0; i < n; i++) {
    result += a + " ";
    let temp = a + b;
    a = b;
    b = temp;
  }

  return result.trim();
};

console.log(fibo(6)); // "0 1 1 2 3 5"

//14. Reverse a string using for loop => "Hello my name is Raju"  o/p:"olleH ym eman si ujaR"
let str = "Hello my name is Raju";
let words = str.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let rev = "";
  for (let j = word.length - 1; j >= 0; j--) {
    rev += word[j];
  }
  result += rev + " ";
}

console.log(result.trim());
