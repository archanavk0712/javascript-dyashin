let promise=new Promise((resolve, reject)=>{
    if(20>18){
        resolve("Eligible")
    }
    else{
        reject("not eligible")
    }
})
promise.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);   
})
.finally(()=>{
    console.log("finally");
    
})

let finaldata = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        let data=response.json();
        console.log(data);
        return data;
    })
    .then((data)=>{
        console.log(data);
        
    })


//asyn & await
let promise1=async()=>{
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        let data =await response.json();
        console.log("data",data);
        
    }catch(error){
        console.log(error);
    }
};
promise1()