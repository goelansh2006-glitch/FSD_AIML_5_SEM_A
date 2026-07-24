const student={
    id: 101,
    name: "Ansh",
    branch: "CSE-AIML",
}

const newstudent = {...student,
    address:
    {
        street1:"nehru nagar",
        city:"Ghaziabad",
        state:"U.P.",
        pincode:201001
    }
}

console.log("Student=",student)
console.log("Student=",newstudent)