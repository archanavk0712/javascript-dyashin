setTimeout(()=>{
    console.log("hello");
  },  1000);

setInterval(()=>{
    console.log("Hi");
} , 1000)

function greet(){
    console.log("hello");
    setTimeout(()=>{
    console.log("test2");
    }, 1000);
}
setTimeout(()=>{
    console.log("333");
},1000);
console.log("222");
greet();

