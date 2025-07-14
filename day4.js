// // js objects + destructructing + nested objects

// // basic object

// let student = {
//     name: "Gaurav",
//     Branch : "CSE",
//     roll_No : "22ESTCS008",
//     age : 23,
// }

// //dot notation
// console.log(student.name);
// console.log(student.Branch);
// console.log(student.age);
// console.log(student.roll_No);

// console.log();

// //bracket notetion
// console.log(student["name"]);
// console.log(student["Branch"]);
// console.log(student["age"]);
// console.log(student["roll_No"]);


// //object destructuring 
// const {name,age} = student;
// console.log();
// console.log(`student ${name} that age ${age}`);


// // Add/update properties
// student.Course = "MERN";
// console.log(student.Course);

// student.age=22;

// console.log("student : ",student);



//nested object 

const students={
    student1 : {
        name: 'Gaurav',
        Branch : 'CSE',
        roll_No: '22ESTCS008',
        age: 22,
        Course: 'MERN'
    },
    student2 : {
        name: 'Ravi',
        Branch : 'Bsc',
        roll_No: '178779685',
        age: 18,
        Course: 'Bsc Mathematic'
    },
    student3 : {
        name: 'vijay',
        Branch : 'B.ed',
        roll_No: '8547552152',
        age: 24,
        Course: 'Bsc B.ed'
    },
    student4 : {
        name: 'aayush',
        Branch : 'CSE',
        roll_No: '23ESTCS001',
        age: 20,
        Course: 'MERN'
    }
};

//Access nested object 
console.log(students);



//destructure nested object
const {student1 : {name,roll_No}} = students;
console.log(`name : ${name} , roll_NO : ${roll_No}`);


const books = {
    "Atomics Habits" : {
        author : "James Clear",
        title : "Atomic Habits An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        pages : 320
    },
    "Rich Habits":{
        author :  "Thomas C. Corley",
        title : "The Daily Success Habits of Wealthy Individuals: Find Out How the Rich Get So Rich (the Secrets to Financial Success R",
        pages : 89
    }
}

const {"Atomics Habits" : {title,author}} = books;
console.log(`book title : ${title}, written by ${author}`);



console.log(books["Atomics Habits"]);