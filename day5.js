//function

// -- function ->> A block of code designed to perform a particuller task

//function decleretion 
function greet(name){
    return "greet: hello "+ name;
}
console.log(greet("Gaurav"));


// Function Expression
const sayHello = function(name){
    return "sayHello: hello " + name;
}

console.log(sayHello("gaurav"));

//Arrow function
const sayHii = (name)=>{
    return "Hii "+name;
}

console.log("sayHii: "+sayHii('gaurav'));

//2. function parameter & Argument
function add(a,b){
    return a+b;
}

console.log("sum is: ",add(3,4));

//parameters = variable in function
//argument = actual value passed

//3. return statment
function squre(n){
    return n*n;
}
console.log("squre is : ",squre(4));
//returns breaks the function and back a value

//short form
const cube = (n)=> n*n*n;
console.log("cube is : ",cube(4));

//4. Arrow function
const greet1 = (name)=>{
    return `hello ${name}`;
}

console.log("greet1",greet1("gaurav"));


//5. scope in js
//globle scope
let a=4;
function test(){
    console.log(a); //can access a
}
test();

//local scope(function scope)
function test1(){
    let b=45;
    console.log(b);
}
// console.log(b);  //ReferenceError: b is not defined bcz it's a local scope
test1();



// block scope(let , const)
{
    let c=444;
    console.log(c);
}

// console.log(c); //c is not defined bcz it's a block scope(let , const)

