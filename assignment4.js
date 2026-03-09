//01. Example for Object and Array destructing
//Object destructuring
// Example 1
const person = { name: "Archana", age: 22, city: "Bangalore" };
const { name, age } = person;
console.log(name); 
console.log(age);  

// Example 2
const user = { id: 101, username: "coder", role: "admin" };
const { username: uname, role } = user; 
console.log(uname); 
console.log(role);  

//Array destructuring
// Example 1
const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a, b); 

// Example 2
const colors = ["red", "green", "blue", "yellow"];
const [first, , third] = colors;
console.log(first, third); 


//02. Two examples for each string methods
//slice()
let str = "JavaScript";
console.log(str.slice(0, 4));  
console.log(str.slice(-6));    

//substring()
let str2 = "HelloWorld";
console.log(str2.substring(0, 5)); 
console.log(str2.substring(5));    

//toUpperCase() & toLowerCase()
let text = "archana";
console.log(text.toUpperCase()); 
console.log(text.toLowerCase()); 

//replace()
let msg = "I like Java";
console.log(msg.replace("Java", "JavaScript")); 
console.log("foo foo".replace(/foo/g, "bar"));  


//03. Example for spread, rest operator for object and array
//Spread Operator
// Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, ...arr1];
console.log(arr2); 

// Object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); 

//Rest Operator
// Array
function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); 

// Object
const person2 = { name: "Archana", age: 22, city: "Bangalore" };
const { name: pname, ...rest } = person2;
console.log(pname); 
console.log(rest);  


//04. What is Mutable and Immutable with an example
// Mutable Example (Array): Can be changed after creation.
let arrM = [1, 2, 3];
arrM.push(4); 
console.log(arrM); 

// Immutable Example (String): Cannot be changed after creation, instead creates a new copy.
let strM = "hello";
let newStr = strM.toUpperCase(); 
console.log(strM);   
console.log(newStr); 


//05. What is Shallow copy and deep copy, explain with array and object
//Shallow copy: Copies only first level, nested objects/arrays are still referenced
//with array
let arrA = [1, 2, [3, 4]];
let shallow = [...arrA]; 
shallow[2][0] = 99;
console.log(arrA);    
console.log(shallow); 

//with object
let objA = { name: "Archana", details: { age: 22 } };
let shallowObj = { ...objA };
shallowObj.details.age = 30;
console.log(objA.details.age); 

//Deep Copy: Copies all levels, nested objects/arrays are independent
//with array
let arrB = [1, 2, [3, 4]];
let deep = JSON.parse(JSON.stringify(arrB));
deep[2][0] = 99;
console.log(arrB);   
console.log(deep); 

//with object
let objB = { name: "Archana", details: { age: 22 } };
let deepObj = structuredClone(objB); 
deepObj.details.age = 30;
console.log(objB.details.age);
