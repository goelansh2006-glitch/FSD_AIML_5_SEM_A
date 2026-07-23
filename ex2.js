const arr = [1,2,3,4,5,6,7,8,9];
const brr = arr.filter((i)=>(i%2==0));
console.log("EVEN:",brr);

const crr = brr.map((i)=>i*i);
console.log("SQUARE:", crr);

const drr = crr.reduce((i,s)=>s+i)
console.log("SUM OF SQAURES: ", drr);