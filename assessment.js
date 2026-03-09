//Write a function that returns the first no-repeating character in a String. If all characters repeat, return null.
function firstNonRepeating(word){
   
    for(let i=0;i<word.length;i++){
        let count=0;
        for(let j=0;j<word.length;j++){
        if(word[i]==word[j]){
            count++;
        }
        }
        if(count==1){
        return word[i];
        }
    } 
    return null;
}

console.log(firstNonRepeating("success"));
console.log(firstNonRepeating("aabb"));


//Write a function that checks whether a string is a palindrome (reads the same forward and backward)
function isPalindrome(name){

    let temp="";
    for(let i=name.length-1;i>=0;i--){
        temp+=name[i];
    }

    if(name===temp){
        console.log(name+" is a palindrome");
    }
    else{
        console.log(name+" is not a palindrome");
    }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

