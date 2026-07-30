const num=[1,2,3,4,5];

//const b=num[0];
//const c=num[1];

//array destructuring
const [a,b] = num;

console.log("b=",b);
console.log("c=",c);

const student={
    name: "Ansh",
    age: 20,
    branch: "CSE-AIML"
}

// const name = student.name;
// const age = student.age;
// const branch = student.branch;

const {name,age,branch} = student;
console.log("name:",name);
console.log("age:",age);
console.log("branch:",branch);
