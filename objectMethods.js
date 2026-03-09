let person={
    name:"Archana",
    id:1234,
    age:23,
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//freeze
// console.log(Object.freeze(person));
// person.eyecolor="brown";
// person.age=26;
// console.log(person);

//isFrozen
console.log(Object.isFrozen(person));

//seal
console.log(Object.seal(person));
person.eyecolor="brown";
person.age=26;
console.log(person);

//issealed
console.log(Object.isSealed(person));

//hasOwn
console.log(person.hasOwnProperty("age"));


// let person1={
//     name:"Abhi",
//     place:"Bangalore",
// }

