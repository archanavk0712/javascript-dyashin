var array=[1,2,3,"abc",4]

for(var i=0;i<array.length;i++){
    console.log(array[i]);
}

//for of- for getting elements(it is only for array elements)
for(var a of array){
    console.log(a);
}

//for in- for getting index 
for(var b in array){
    console.log(array[b]);  //will get the array elements
    console.log(b);  //will get index values of the array elements
}

var person = {
    fName:"Archana",
    age:21,
    eyeColor:"Brown",
};

//cannot use for of for objects as there will be key value pair in objects hence they work for arrays and not objects
// for(var a of person){ 
//     console.log(a);
// }

for(var s in person){
    console.log(person[s]);
}

person.address="Bengaluru";

console.log(person);

var weight=20;
var height=1.5;
var bmi=weight/Math.pow(height,2);
if(bmi<16){
    console.log("Severe thinness")
}
else if(bmi<=16 && bmi>17){
    console.log("Moderate thinness")
}
else if(bmi<=17 && bmi>18.5){
    console.log("Mild thinness")
}
else if(bmi<=18.5 && bmi>25){
    console.log("Normal ")
}
else if(bmi<=25 && bmi>30){
    console.log("Overweight")
}
else if(bmi<=30 && bmi>35){
    console.log("Obese Class I")
}
else if(bmi<=35 && bmi>40){
    console.log("Obese Class II")
}
else if(bmi>40){
    console.log("Obese Class III")
}

//or
console.log(
    bmi<16?"severe thinness":
    bmi<17?"moderate thinness":
    bmi<18.5?"Mild thinness":
    bmi<25?"Normal":
    bmi<30?"Overweight":
    bmi<35?"Obese Class I":
    bmi<40?"Obese Class II":
    "Obese Class III"
);