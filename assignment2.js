//01. Write a program to check if a given number is even or odd using only operators and if-else.
var a=3;
if((a%2)===0){
    console.log(a+" is even")
}
else{
    console.log(a+" is odd")
}

//02. Take three numbers as input. Use only if-else statements to find the largest number
var a=3;
var b=1;
var c=9;
if(a>b && a>c)
{
    console.log(a+" is the largest among "+a+" , "+b+" ,"+c)
}
else if(b>a && b>c)
{
    console.log(b+" is the largest among "+a+" , "+b+" ,"+c)
}
else
{
    console.log(c+" is the largest among "+a+" , "+b+" ,"+c)
}

//03. Using a while loop, reverse a given integer(e.g., 1234->4321)
var number=464512;
var num=number;
var rev=0;
while(num>0){
    var dig=num%10;
    rev=(rev*10)+dig;
    num=Math.floor(num/10);
}
console.log(number+" when reversed, "+rev)

//04. Write a program to count how many digits are in a given number without converting it to a string.
var number=464512;
var num=number;
var digit=0;
while(num>0){
    digit++;
    num=Math.floor(num/10);
}
console.log(number+" has "+digit+" digits in it")

//05. Find the sum of digits of a number using a while loop and % operator
var number=464512;
var num=number;
var sum=0;
while(num>0){
    var dig=num%10;
    sum=sum+(dig);
    num=Math.floor(num/10);
    
}
console.log("The sum of digits in "+number+" is "+sum);

//06. Check if a number is a palindrome(e,g,. 121->palindrome, 123->not)
var number=46451215464;
var num=number;
var rev=0;
while(num>0){
    var dig=num%10;
    rev=(rev*10)+dig;
    num=Math.floor(num/10);
}
if(number==rev){
    console.log(number+" is a palindrome");
}
else{
    console.log(number+" is not a palindrome");
}

//07. Print the multiplication table of a given number uisng a for loop
var num=5;
for(var i=1;i<=10;i++){
    console.log("5 x "+i+"= "+(num*i));
}

//08. Use a loop and if-else to check if a number is prime.
var num=7;
var isPrime=true;
if(num<=1){
    isPrime=false;
}
else{
    for(var i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            isPrime=false;
            break;
        }
    }
}

if(isPrime){
    console.log(num+" is a prime number");
}
else{
    console.log(num+" is not a prime number");
}

//09. Find the factorial of a given number using a loop
var num=7;
var fact=1;
if(num==0){
    console.log("Factorial of 0 is 1");
}
else{
    for(var i=1;i<=num;i++){
        fact=fact*i;
    }
    console.log("Factorial of "+num+" is "+fact);
}

//10. Check if a number is an Armatrong number(e.g, 153=(1^3)+(5^3)+(3^3)).
var num = 153;
var temp = num;
var digits = 0;

        // Step 1: Count digits
var t = num;
while (t > 0) {
    digits++;
    t = Math.floor(t / 10);
}

        // Step 2: Calculate sum of digits^digits
var sum = 0;
temp = num;

while (temp > 0) {
    var digit = temp % 10;

        // Step 3: Raise digit to the power of 'digits' manually
    var power = 1;
    for (var i = 0; i < digits; i++) {
        power *= digit;
    }

    sum += power;
    temp = Math.floor(temp / 10); // move to next digit
}
        // Step 4: Compare
if (sum === num) {
    console.log(num + " is an Armstrong number");
} else {
    console.log(num + " is not an Armstrong number");
}

//11. Write a program to check if a given year is a leap year.
var year = 2024;  

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

//12. Take n as input and use a loop to calculate the sum of the first n natural numbers.
var n = 10;   // change this value to test
var sum = 0;
var i = 1;

while (i <= n) {
    sum = sum + i;
    i++;
}

console.log("The sum of the first " + n + " natural numbers is " + sum);

//13. Without using Math.pow(), compute base^exponent using a loop.
var base = 2;   
var exponent = 2; 
var result = 1;

// multiply base 'exponent' times
for (var i = 1; i <= exponent; i++) {
    result = result * base;
}

console.log(base + " ^ " + exponent + " = " + result);

//14. Print the first n numbers of thr Fibonacci series using a loop.
var n = 10;  // number of terms
var a = 0, b = 1;

console.log("Fibonacci series of first " + n + " terms:");

for (var i = 1; i <= n; i++) {
    console.log(a);     // print current term
    var next = a + b;   // calculate next term
    a = b;              // shift values
    b = next;
}


//15. Take a number as input and count how mnay even digits and odd digits it has
var num = 46251739;  // change this number to test
var evenCount = 0;
var oddCount = 0;
var temp = num;

while (temp > 0) {
    var digit = temp % 10;        // extract last digit
    
    if (digit % 2 === 0) {        // check even
        evenCount++;
    } else {                      // else odd
        oddCount++;
    }

    temp = Math.floor(temp / 10); // remove last digit
}

console.log(num + " has " + evenCount + " even digits and " + oddCount + " odd digits.");
