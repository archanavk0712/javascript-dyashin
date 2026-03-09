//spread operator
let person={
    fName:"Ajay",
    lName:"Kumar",
    age:23,
    address:{
        city:"Bengaluru",
        pincode:560021,
    },
};

// let personCopy=person;   //normal copy

//shalloow copy
let personCopy={...person};   

person.fName="Ajith";
person.address.city="Mumbai";

console.log(person);
console.log(personCopy);

//deep copy-method1
// let jsonObj=JSON.parse(JSON.stringify(person));
let stringObj=JSON.stringify(person);
let jsonObj=JSON.parse(stringObj);
console.log(stringObj);

person.address.city="chennai";
console.log("person",person);
console.log(jsonObj);

//deep copy-method2
let deepObj={...person,address:{...person.address}};
console.log("Deepcopy",deepObj);




// let obj=structuredClone(person);
// console.log(obj);

// person.address.city="chennai";
// console.log("person",person);


