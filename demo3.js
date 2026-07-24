function sum(...num){
//    const sum=num.reduce((i,s)=>(s+i))
let sum=0;
for(i of num){
     sum=sum+i;
}  
return sum;
}

console.log("Sum=",sum(1,2,3))