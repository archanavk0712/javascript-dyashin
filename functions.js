//named function
function add(a,b){
    return a+b;
}
console.log("Named function :",add(10,20));

//Anonymous function
var sub=function (a,b){
    return b-a;
}
console.log("Anonymous function:",sub(10,30));

//IIFE- Immediate invoked function expression
var mul=(function(a,b){
    return a*b;
})(10,20);
console.log("IIFE function: ", mul);

//Arrow function
var divide=(a,b)=>{
    return a/b
};
//or
// var divide=(a,b)=>a/b;
console.log("Arrow function: ",divide(10,20));

//callback function(Ex1)
function parent(a,b,func){
    var num1=a;
    var num2=b;
    var sub=num2-num1;
//   console.log(sum);
//   return num2-num1;
    func(num1.num2);
}
function child(n1,n2){
//    return n1+n2;
    console.log(n1+n2);
    
}
console.log(parent(10,20,child));
//console.log(child(20,30));

//callback function(Ex2)
function parent(a,b,func){
    var num1=a;
    var num2=b;
    var sum=num2-num1;
    console.log("This is parent function",sum);
    func(num1,num2);
}
function child(n1,n2){
    console.log("This is child function",n2+n1);
}
function main(func1,func2){
    console.log("This is main function");
    func1(10,20,func2);
}
console.log(main(parent,child));

//default parameter
function greet(name="tejas"){
    console.log("name is",name);
}
greet()
greet('Harry')