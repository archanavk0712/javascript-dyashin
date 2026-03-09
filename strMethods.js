let str="  Hello, Good Morning  ";

console.log(str.length);
console.log(str.charAt(4));
console.log(str.at(-4));
console.log(str.concat(" Welcome"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));
console.log(str.slice(7,11));
console.log(str.substring(12));
console.log(str.substr(1,3));
console.log(str);
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

let str1 = "Welcome";
console.log(str1.padStart(20,"Hey"));
console.log(str1.padEnd(20,"Hey"));
console.log(str1.replace("e","i"));
console.log(str1.replaceAll("e","i"));
console.log(str1.includes("o"));
console.log(str1.startsWith("We"));
console.log(str1.endsWith("We"));
console.log(str.split(""));
console.log(str.split(" "));
console.log(str1.repeat(3));