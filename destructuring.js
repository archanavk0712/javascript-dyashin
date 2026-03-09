let person={
    Name: "Archana",
    age:21,
    eyeColor:"Brown",
    address:{
        place:"Bangalore",
        pincode:560021,
    },
    hobbies:["Cricket", "Drawing", "Travelling","Music"],
};

const{
    Name,
    age,
 // age: age1,
    eyeColor,
    address:{
        place, pincode
    },
    hobbies,
} = person;
// const{city,pincode}=address;
const[, , , hob4]=hobbies;

console.log(Name);
//console.log(person.age1);
console.log(age);
console.log(place);
console.log(hob4);
 

let employee={
    id:101,
    details :{
        fName: "Harry",
        department:"IT",
        address:{
            city:"Mumbai",
            pincode:345678,
        },
    },
};

const{
    details:{
        fName:firstname,
        address:{city},
    },
} = employee;

console.log(firstname);
console.log(city);

