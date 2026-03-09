//var (functional scope, can be reassigned and redeclared,says 'undefined' if variable accesed before initialization )
var a=10;
// var b=a;
a=20;
var a=30;
console.log(a);

//let keyword  (block scope, can be reassigned and cannot be redeclared, gets error if variable accesed before initialization)
let b=10;
b=20;
//let b=30;
console.log(b);

//const  (block scope, cannot be reassigned and cannot redeclared, gets error if variable accesed before initialization)
const c=20;
// c=32;
// const c=42;
console.log(c);

//block
// let d={
//     block
// };

//greet();
var greet=()=>{
    console.log("Good afternoon");
};
greet();

function abc(){
    console.log(m);
    var m=20;
    console.log(m);
}
abc();