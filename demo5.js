//import and export module
const sum =(...num)=>{
    const s=num.reduce((s,i)=>(s+i));
    return s;
}

export default sum;
