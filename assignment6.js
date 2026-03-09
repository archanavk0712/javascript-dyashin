//01. Write a program to get the duplicates from the above array
let arr=['a','b','c','d','a','b']
let arr1=[];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr1.push(arr[i]);
        }
    }
} 
console.log(arr1);
  
//02. 
let arrObjects = [
  { a: 10, b: 20, c: 30 },
  { d: 20, a: 10, c: 30 }
];

let result = [{}];

for (let obj of arrObjects) {
  for (let key in obj) {
    result[0][key] = (result[0][key] || 0) + obj[key];
  }
}
console.log(result);


//03. [22,33,11,54,8]. Write a program to sort above array in ascending order without using sort()
let ar=[22,33,11,54,8];
  let n = ar.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (ar[j] > ar[j + 1]) {
        // Swap elements
        let temp = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = temp;
      }
    }
  }
console.log(ar);
 

//04. let multiDimArr=[10,20,[30,40],[[50,60]],[[[77,44]]]] flatten the array without usig flat()
let multiDimArr=[10,20,[30,40],[[50,60]],[[[77,44]]]]

function flatArray(array) {

    let res=[];
    array.forEach((element)=>{
        if(Array.isArray(element)){
            res=res.concat(flatArray(element));
        }else{
            res.push(element);
        }
    });
    return res;
    
}
console.log(flatArray(multiDimArr));

//05. Two strings are considered anagrams of they have the same characters, but in different order
//const words=["eat", "tea", "tan", "ate", "nat", "bat"]; => output: [["eat", "tea", "ate"], ["tan","nat"],["bat"]]
let str5=["eat","tea","tan","ate","nat","bat"];
let resss=[];

function anagram(str5,str6) {
    let s1=str5.split("").sort().join("");
    let s2=str6.split("").sort().join("");
    return s1==s2;
}

for(let i=0;i<str5.length;i++){
    let aa=resss.flat();
    if(!aa.includes(str5[i])){
   let t= [];
   t.push(str5[i]);
    for(let j=i+1;j<str5.length;j++){
        if(anagram(str5[i],str5[j])){
            t.push(str5[j]);
            // console.log(str5[j]);  
        }
    }
   resss.push(t);
}
}
console.log(resss);


