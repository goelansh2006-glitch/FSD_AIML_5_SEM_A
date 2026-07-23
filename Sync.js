function register(){
    wait_for_input(5000);
    console.log("register here");
}
function login(){
    wait_for_input(9000);
    console.log("login here");
}
function getData(){
    wait_for_input(8000);
    console.log("fetch data");
}
function displayData(){
    console.log("display data");
}
function wait_for_input(delay){
    const ct=Date.now();
    const ms=ct+delay;
    while(Date.now()<ms){

    }
}
register();
login();
getData();
displayData();
console.log("call another app");