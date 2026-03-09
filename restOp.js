function add(...num){
    console.log(num);

    let sum=0;
    for(let i of num){
        sum+=i;
    }
    return sum;
}
console.log("add",add(12,34,54,2,53,54,2,5,64,76));

const n=[10,20,30];
const n1=n.slice();
console.log(n1);
