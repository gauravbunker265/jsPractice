//vairable declearation
var x=10;
let y=20;
const z=30;
let name  = "gaurav";
let age =23;
const isStudent = true;

// let y = 20;   //Identifier 'y' has already been declared
var x =20; //it's run
// const z=35;     //SyntaxError: Identifier 'z' has already been declared
// z=35;    //TypeError: Assignment to constant variable. we can't redeclear or reinitilize constant variable

//object
let user={
    name : name,
    age:age,
    isStudent:true
};

//Array
let subjects = ["HTML","CSS","JS"];

//op
console.log("User Info : ");
console.log(user);
console.log("subjects : ",subjects);


/*
📌 let vs const vs var

- var = function scoped, can be redeclared
- let = block scoped, cannot be redeclared
- const = cannot be reassigned or redeclared
*/