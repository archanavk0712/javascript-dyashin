//01. Convert "hello world" into "Hello World"
let word="hello world";
let word1=word[0].toUpperCase();
for(let i=1;i<word.length;i++){
    if(word[i]==" "){
        word1+=" "+word[i+1].toUpperCase();
        i++;
    }
    else{
        word1+=word[i];
    }
}
console.log(word1);


//02. Write a function that returns the number of words in "I love JavaScript"
let sen="I love Javascript";
let no=sen.split(" ");
let count=0;
for(let i=1;i<=no.length;i++){
    count++;
}
console.log(count);


//03. Convert "my name is John" into "my-name-is-John"
let sent="my name is John";
console.log(sent.replaceAll(" ","-"));


//04. From "programming", print duplicate characters(like r,g,m)
let dup="programming";
for(let i=0;i<dup.length;i++){
        let count=0;
        for(let j=i;j<dup.length;j++){
        if(dup[i]==dup[j]){
            count++;
        }
        }
        if(count>=2){
                console.log(dup[i]);
            }
        }
    


//05. From " John Doe Smith", return "JDS"
let sentence="John Doe Smith";
let result=sentence[0];
for(let i=0;i<sentence.length;i++){
    if(sentence[i]==" "){
        let up=sentence[i+1].toUpperCase();
        result+=up;
    }
}
console.log(result);


//06. Find the longest word in a sentence(words separated by spaces)  Input:"The quick brown fox"->Output:"quick"
let sentence1="The quick brown fox";
let sentout=sentence1.split(" ");
console.log(sentout);

for(let i=0;i<sentout.length;i++){
    console.log(sentout[i].length);
}


//07. Remove duplicate characters from a string, keeping only the first occurence  Input:"programming" -> Output:"progamin"
let str="programming";
let ac=str.split("");

let res="";
for(let i=0;i<ac.length;i++){
    if(!res.includes(str[i])){
        res+=str[i];
    }
    
}
console.log(res);

//08. Count how many times each word appears in a string   Input:"hello world hello" -> Output:{hello:2,world:1}
let input ="hello world hello";
let inp=input.split(" ");
console.log(inp);

let output={};
for(let i=0;i<inp.length;i++){
    for(let key of i){
        if(key[1].includes(inp[i+1])){
            
        }
    }
}
