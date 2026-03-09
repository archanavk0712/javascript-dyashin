//unshift, push
let arr=[1,2,4,5,"hello"];
console.log(arr.unshift(32));
console.log(arr);
console.log(arr.push(21));
console.log(arr);

//shift, pop
let arr1=[1,2,4,5,"hello"];
console.log(arr1.shift());
console.log(arr1.pop());
console.log(arr1);

//slice
let arr2=[1,2,4,5,"hello"];
console.log(arr2.slice(2,4));
console.log(arr2);

//splice-helps to copy the array
let arr3=[1,2,4,5,"hello"];
//console.log(arr3.splice(2,3,"hi"));
console.log(arr3);
console.log(arr3.toSpliced(2,3,"hi"));

//concat
let arr4=[1,2,4,5,"hello"];
console.log(arr4.concat(["good",32]));
console.log(arr4);

//join
let arr5=["Hi","how","are","you"];
console.log(arr5.join("-"));
console.log(arr5.toString());

//reverse
let arr6=[1,2,4,5,"hello"];
console.log(arr6.reverse());

//Input:"My name is john" -> Output:"john is name My"
let str1 ="My name is john";
console.log(str1.split(" ").reverse().join(" "));

//Input:"My name is john" -> Output:"My eman si nhoj"
let str2 ="My name is john";
let str2out=str2.split(" ");
let out=[];
for(let s of str2out){
    out.push(s.split("").reverse().join(""));
   }
console.log(out.join(" "));

//map - returna value
let arr7=["Hi","how","are","you"];
console.log(arr7.map((val,ind)=>{
    return val+3
}));

//foreach - does not return value
let arr8=["Hi","how","are","you"];
console.log(arr8.forEach((val,ind)=>{
    console.log(val+4);
}));

// input: let a2=[10,20,[20,30,40],[[30,50]],[90]]; => output: op=[10,20,20,30,40,30,50,90]
let a2=[10,20,[20,30,40],[[30,50]],[90]];
function flatArray(array){

}

//flat
console.log(a2.flat(4));
console.log(a2.flat(Infinity));

//reduce
let a3=[1,2,3,4,5];
console.log(
    a3.reduce((accVal,curVal) =>{
        return accVal+curVal;
}));

//reduce right
console.log(
    a3.reduceRight((a,c) =>{
        return a-c;
}));

//filter
let a4=[10,,,,39,49,50,14,50]
console.log(a4.filter((element)=> element>30));

//find
let a5=[10,39,50,49,14,50]
console.log(a5.find((element)=>element>20));

//find Index
console.log(a5.findIndex((element)=>element>30));

//IndexOf
console.log(a5.indexOf(49));

//lastIndexOf
console.log(a5.lastIndexOf(50));

//sort
console.log(a5.sort((a,b)=>a-b));

//includes
console.log(a5.includes(10));
console.log(a5.includes(20));

//fill
console.log(a5.fill(10,3,4));

//some(atleast some elements)
console.log(a5.some((ele)=>ele>30));

//every(all elements)
console.log(a5.every((ele)=>ele>=10));

let a6=[10,20,30,40,50]

//copywithin
console.log(a6.copyWithin(3,0,3));
console.log(a6.copyWithin(-3,0,3));

