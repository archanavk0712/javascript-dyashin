//1. Write a function that returns the first non-repeating character in a string. If all characters repeat, return null. 
function nonRepeating(a){
for(let i=0;i<a.length;i++){
    let count=0;
    for(let j=0; j<a.length;j++){
        if(a[i]==a[j]){
            count++;
        }
    }
    if(count==1){
    return a[i];
    }
    else{
        return null;
    }
}
}
console.log(nonRepeating("sssu"));

//2. Write a function that checks whether a string is a palindrome (reads the same  forward and backward). 
word="aba";
temp="";
for(let i=word.length-1;i>=0;i--){
    temp+=word[i];
}
if(temp==word){
    console.log(word+" is a palindrome");
}else{
    console.log(word+" is not a palindorme");
    
}

//3. Given a nested array of arbitrary depth, write a function to flatten it into a single array without using inbuilt method.
let a=([1,[2,[3,4],5],6]);
function flat(array){    
    let res=[];
    for(let element of array){
        if(Array.isArray(element)){
            res=res.concat(flat(element));
        }else{
            res.push(element);
        }
    }
    return res;
}
console.log(flat(a));

//4. Given a string containing numbers and letters, write a function to return the sum of all numbers in the string.
let s = "abc123xyz4";
function sumNumber(s){
    let sum=0;
    let num="";
    for(let ch of s){
        if(!isNaN(ch) && ch!==" "){
            num+=ch;
        }else{
            if(num!==""){
                sum+=Number(num);
                num="";
            }
        }
    }
    if(num!==""){
        sum+=Number(num);
    }
    return sum;
    }
console.log(sumNumber(s));
 
//5. Given an array, remove all duplicate values without using Set or similar built-in functions.
let no=[1,2,3,2,1,4,5,3];
function removeDuplicates(n){
    let num=[];
    let isDuplicate;
    for(let i=0;i<n.length;i++){
        isDuplicate=false;
        for(let j=0;j<num.length;j++){
           if(n[i]==num[j]){
            isDuplicate=true;
            break;
           }        
    }
    if(!isDuplicate){
       num.push(n[i]); 
    }

    }
    return num;
}
console.log(removeDuplicates(no));

//7. Write a function to capitalize the first letter of each word in a given string. 
let str="hello world! this is js.";
let sr=str[0].toUpperCase()+"";
function capitalizeWords(st) {
    for(let i=1;i<st.length;i++){
        if(st[i]==" "){
            sr+=" ";
            sr+=st[i+1].toUpperCase();
            i++;
        }else{
            sr+=st[i];
        }
    }
    return sr;
}
console.log(sr);
console.log(capitalizeWords(str));

//8.. Write a function that counts the number of occurrences of a specific value in an array. 
let ar=[1,2,3,2,1,4,2];
function countOccurrences(a,b){
    count=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==b){
            count+=1;
        }
    }
    return count;
}
console.log(countOccurrences(ar,2));

//9. Write a function that finds the longest word in a sentence. 
let long="The quick brown fox jumped over the lazy dog";
function longestWord(l){
    let longest="";
    let current="";
    for(let i=0;i<l.length;i++){
        let ch=l[i];
        if(ch!=" "){
            current+=ch;
        }else{
            if(current.length>longest.length){
                longest=current;
            }
            current="";
        }
} 
if(current.length>longest.length){
    longest=current;
}
return longest;
}
console.log(longestWord(long));

//10. Write a function that checks whether a string of parentheses is balanced. 
let bal="((()))";
function isBalanced(b){
    let z=0;
    for(let i=0;i<b.length;i++){
        if(b.charAt(i)==")"){
            z++;
        }else if(b.charAt(i)=="("){
            z--;
        }
        }
    if(z==0){
    return true;
}else{
    return false;
}
}
console.log(isBalanced(bal));

//assignment-2
//1. Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). The function should ignore spaces, punctuation, and case.
let a1="aB,a";
let a2="";
let a3="";
for(let i=0;i<a1.length;i++){
    if(a1[i]>="a" && a1[i]<="z"){
        a2+=a1[i];
    }else if(a1[i]>="A" && a1[i]<="Z"){
        a2+=a1[i].toLowerCase();
    }
}

for(let i=a2.length-1;i>=0;i--){
        a3+=a2[i];
}
if(a2==a3){
    console.log(a1+" is a palindrome");
}else{
    console.log(a2+" is not a palindrome");
}

//2. Create a function that finds the intersection of two arrays (elements that appear in both arrays). Return the result without duplicates. 
let b1=[2,3,5,8,6];
let b2=[1,5,8,2,5,2,3];
let b3=[];
let b4=[];

for(let i=0;i<b1.length;i++){
    for(let j=0;j<b2.length;j++){
        if(b1[i]==b2[j]){
            b3.push(b1[i]);
        }
    }
}
for(let i=0;i<b3.length;i++){
    let count=0;
    for(let j=i+1;j<b3.length;j++){
        if(b3[i]==b3[j]){
            count++;
        }
    }
    if(count==0){
        b4.push(b3[i])
    }
}
console.log(b4);

//3. Write a function that generates the first n numbers in the Fibonacci sequence. Implement both recursive and iterative approaches. 
let c1=8;
let c3=[];
let c4=[];
function recurssion(c1){
     if(c1<=1){
        return c1;
    }else{
        return recurssion(c1-1)+recurssion(c1-2);
    }
}
for(let i=0;i<8;i++){
    c4.push(recurssion(i));
}
console.log(c4);

function iteration(c1){
    sum=0;
    if(c1==1){
        return 0;
    }else{
        a=0;b=1;
        c3.push(a,b)
        for(let i=2;i<c1;i++){
            sum =a+b;
            a=b;
            b=sum;
            c3.push(sum)
        }
    }
    return c3; 
}
console.log(iteration(8));

//4. Write a function that generates all prime numbers up to a given number n  
let d1=10;
let d2=[];
function isPrime(d1){
for(let i=2;i<=d1/2;i++){
    if(d1%i==0){
        return false;
    }
    }
    return true;
}

function primeCheck(){
for(let i=2;i<d1;i++){
    if(isPrime(i)){
    d2.push(i);    
}
}
return d2;
}
console.log(primeCheck());s

//5. Write a function that checks if a string has balanced parentheses, brackets, and braces. The function should return true if all opening brackets have corresponding closing brackets in the correct order. 
let e1="([[({)}]])";
let z=-1;
let stack=[];
function balanced(e1){
for(let i=0;i<e1.length;i++){
    let e3=e1[i];
    if(e3=="(" || e3=="[" || e3=="{"){
        z++;
        stack.push(e3);
    }
    else if(e3==")" || e3=="]" || e3=="}")
    {
    if(stack[z]=="{" && e3=="}" || stack[z]=="(" && e3==")" || stack[z]=="[" && e3=="]"){
        z--;
        stack.pop();
    }else{
        return false;
    }
}
}
if(z==-1){
    return true;
}else{
    return false;
}
}
if(balanced(e1)){
    console.log(e1+" is balanced");
}else{
    console.log(e1+" is not balanced");
    
}

//6. Create a function that flattens a nested array of arbitrary depth without using built-in methods like flat(). 
let f1=[1,2,[3,4],5,[6,7],8];

function flat(f1){
    let f2=[];
    for(let i=0;i<f1.length;i++){
        let ch=f1[i];
        if(Array.isArray(ch)){
            f2=f2.concat(flat(ch));
        }else{
            f2.push(ch);
        }
    }
    return f2;
}
console.log(flat(f1));

//7.  Write a function that finds the length of the longest common subsequence between two strings using dynamic programming.
let s1="aab"
    let s2="a"
    function commonsubsequence(s1,s2){
        let n1=s1.length;
        let n2=s2.length;
        let dp=[];
        for(let i=0;i<=n1;i++){
            dp[i]=[];
            for(let j=0;j<=n2;j++){
                dp[i][j]=0;
            }
        }

        for(let i=1;i<=n1;i++){
            for(let j=1;j<=n2;j++){
                if(s1[i-1]==s2[j-1]){
                    dp[i][j]=dp[i-1][j-1]+1;
                }else{
                    dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
                }
            }return dp[n1][n2];
        }
    }

//8. . Create a function that finds two numbers in an array that add up to a specific target. Return their indices.
let g1= [2, 7, 11, 15]
function javascripttwoSum(g1, g2){ // [0, 1] (2 + 7 = 9)
    for(let i=0;i<g1.length;i++){
        for(let j=i+1;g1.length;i++){
            if(g1[i]+g1[j]==g2){
                return g1[i].g1[j]
            }
        }
    }
}  
console.log();


//10. Write a function that evaluates a mathematical expression string containing numbers, +, -, *, / and parentheses.
let j1 = "2 + 3 * 4";
let j2=j1.split(" ");
let j3;
for(let i=0;i<j2.length;i++){
}