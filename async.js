function register(){
    setTimeout(()=>{
         console.log("register here");
    },6000)   
}
function login(){
    setTimeout(()=>{
        console.log("login here");
    },8000)   
}
function getData(){
    setTimeout(()=>{
        console.log("fetch data");
    },7000)
    
}
function displayData(){
    setTimeout(()=>{
        console.log("display data");
    },1000)
}
register();
login();
getData();
displayData();
console.log("call another app");