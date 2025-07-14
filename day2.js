// let fruits = ["apple","banana","mango"];

let students = [
    {name : "gaurav",age:22},
    {name : "vishal",age:20},
    {name : "ravi",age:19},
    {name : "aayush",age:21},
];

// // print all the students name using forEach
// students.forEach((students)=>{
//     console.log("Name : ", students.name ,", Age : ", students.age);
//     // console.log();
// });

// //create array or names using map()
// let names = students.map((students)=>students.name);
// console.log("names Array : ",names);

// //creaate array of names using map()
// let adult = students.filter((students)=>students.age>18);
// console.log("Adults : ",adult);

// // count student using length
// console.log("total students : ",students.length);

let arr = [1,2,3,4,3,5,545,345,2,24,34,34,343,24,3,431,431,43,4,3];

// //create a function return even nums
// let even = arr.filter((arr)=>arr%2==0);
// console.log(even);

// //create a function return odd nums
// let odd = arr.filter((arr)=>arr%2!=0);
// console.log(odd);

// //find greter then 500 
// let greter500 = arr.filter((arr)=>arr>500);
// console.log(greter500);

// //print all numbers
// arr.forEach(ele => {
//     console.log(ele);
// });



//print all numbers in single line 
// arr.forEach(ele => {
//     console.log(ele.join(" "));
// });

// arr.forEach(ele => {
//     console.log(ele.join(" "));
// });

// If arr is a 1D array
// console.log(arr.join(" "));


// console.log(typeof arr[0]);

//2d array
const arr2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

// arr2d.forEach(ele => {
//     // console.log(ele);
//     /*
//         [ 1, 2, 3 ]
//         [ 4, 5, 6 ]
//         [ 7, 8, 9 ]
//     */


//     console.log(ele.join(" "));
//     /*
//         1 2 3
//         4 5 6
//         7 8 9
//     */
// });


// console.log(arr2d.join(" "));       //1,2,3 4,5,6 7,8,9
// console.log(arr2d.flat().join(" "));   //1 2 3 4 5 6 7 8 9


//Using Array.from() (Clean one-liner way)
// const rows = 3;
// const cols = 4;
// const newArr = Array.from({ length: rows }, () => Array(cols).fill(1));

// console.log(newArr);

// let odd = arr2d.flat().filter(num => num%2!==0).join(" ");
// console.log(odd);

//flat() ->> The .flat() method is used to flatten nested arrays (arrays inside arrays), converting them into a single array.

const arr1 = [1, 2, [3, 4]];
// const result = arr1.flat();
// console.log(result); // Output: [1, 2, 3, 4]


let res = [];
// // for(let ele of arr1.flat()){
// //     res.push(ele*2);
// // }
// arr1.flat().forEach(ele => {
//     res.push(ele*2);
// });
// console.log(res.flat().join(" "));


// let name  = ['G','A','U','R','A','V'];
// name.flat().forEach(char => {
//     console.log(char);
// });

let fruits = ["Apple","banana","papaya","Guavava"];
console.log(fruits.join(" "));
console.log();
for(let fruit of fruits){
    console.log(fruit);
}