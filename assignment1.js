// 06. Create 5 objects without using new keyword with one function
function questionSix(name, age, city){
    return{ name, age, city};
}

s1=questionSix("Archana", 21 ,"Bangalore");
s2=questionSix("Harshitha", 21 ,"Mysore");
s3=questionSix("Smruthi", 21 ,"Bangalore");
s4=questionSix("Moulya", 21 ,"Mysore");
s5=questionSix("Sudheshna", 21 ,"Bangalore");

console.log(s1,s2,s3,s4,s5);


// 06. Create 5 objects using new keyword with one function
function questionSeven(name, age, course){
    this.name=name;
    this.age=age;
    this.course=course;
}

s1=new questionSeven("Archana", 21 ,"CSE");
s2=new questionSeven("Harshitha", 21 ,"AI & AD");
s3=new questionSeven("Smruthi", 21 ,"ECE");
s4=new questionSeven("Moulya", 21 ,"IS");
s5=new questionSeven("Sudheshna", 21 ,"CSE");

console.log(s1,s2,s3,s4,s5);

// 10.	Generate random no. between 1-25

var randomNumber=Math.floor(Math.random()*25)+1;
console.log(randomNumber);

//https://chatgpt.com/share/68d27969-7968-800e-960c-7062c078c2d9