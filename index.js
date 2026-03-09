var a="Hello";

var b=1234;
console.log(a);
console.log(typeof b);

var c=null;
console.log(typeof c);

var d={
    name:"Archana",
    age:23,
    location:"Bangalore",
    address:{
        No:73,
        Street: "cross road",
        area: "Rajajinagar",
    },
    pincode:560021,
};
console.log(d);

var e=["hello",1,undefined,true,null,{age:23}]
console.log(e[3])

function greet(){
    console.log("Good afternoon")
}
greet()

function abc(arr){
let first=-Infinity, second=-Infinity;
for(let num of arr){
    if(num>first){
        second=first;
        first=num;
    }
    else if(num>second && num<first){
        second=num;
    }
    }
    return second;
}
console.log(abc([4,58,25,55]));

