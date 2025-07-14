//js functions, parameters,return , Arrow fun

//normal function
// function greet(){
//     console.log("Hello");
// }
// console.log(greet());

// //normal function with paremeter
// function greet(name){
//     console.log("Hello ", name);
// }
// console.log(greet("gaurav"));


// //normal function with default paremeter
// function greet(name = "Guest"){
//     console.log("Hello ", name);
// }
// console.log(greet());



// //normal function without default paremeter or without actual argument
// function greet(name){
//     console.log("Hello ", name);  //Hello  undefined
// }
// console.log(greet());




// //function with diff parameters 
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

// //arrow functuon
// const lastDigit = (num)=>{
//     return num%10;
// }
// console.log(lastDigit(2343));


// //arrow function in one line
// //squre
// const squre = (num)=> num**2;
// console.log(squre(2));

// //cube
// const cube = (num)=> num**3;
// console.log(cube(2));


// //3 num multiply
// const prodtOf3val = (num1,num2,num3)=> num1*num2*num3;
// console.log(prodtOf3val(3,2,1));


const div= (num1,num2) => num1/num2;
console.log(div(34,2));
console.log(div(34,3));
console.log(div(3,4));
console.log(div(34,0));