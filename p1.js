// console.log(typeof(NaN));
// console.log("hello1");

// let str = "hello2";
// console.log(str);

// function greet(){
//     console.log("hello3");
// }
// greet();
// console.log(greet);


// //palendrome str

// str = "Ramar";
// console.log(str);
// function checkPalendrome(str){
//     let newstr="";
//     for(let i= str.length-1;i>=0;i--){
//         newstr+=str[i];
//     }
//     return str.toUpperCase()==newstr.toUpperCase()?true:false;
// }

// console.log(checkPalendrome(str));

//Array



// let arr=[1,2,3,4,5,6];

// console.log(arr[0]);
// console.log(arr[4]);

// //evenOdd
// const evenNums= arr => arr.filter(i => i%2===0);
// const evenNums1= arr => arr.filter(i => (i&1) === 0);
// const evenNums2 = arr => arr.filter(i => i%2 !== 1);
// console.log(...evenNums(arr));
// console.log(...evenNums1(arr));
// console.log(...evenNums2(arr));


// const oddNums= arr => arr.filter(i => (i&1) === 1);
// const oddNums1= arr => arr.filter(i => i%2 !== 0);
// const oddNums2= arr => arr.filter(i => i%2 === 1);
// console.log(...oddNums(arr));
// console.log(...oddNums1(arr));
// console.log(...oddNums2(arr));

//palendrome num

// let num = 12321;

// function isPalNum(num){
//     let orignalNum= num;
//     let res = 0;
//     while(num>0){
//         let rem =num%10;
//         res = res*10 + rem;
//         num = Math.floor(num / 10);
//         // num = num/10;  it is not working in this bcz it in the js it like 2/10==0.2 so it not a int num so we are use theMath.flore() function for return a integer val
//         console.log(num);
//     }

//     console.log(res);
//     console.log(num);
//     return orignalNum===res?true:false;
// }
    
// console.log(isPalNum(num));


//prime num

let num = prompt("enter a num for check isPrimeNum ortr not !");

const isPrime = (num)=>{
    for(let i=2;i<=Math.floor(num/2);i++){
        if(num % i===0){
            return false;
        }
    }
    return true;
}

// console.log(isPrime(num));


// print n num or prime nums
const nPrimes = (num)=>{
    for(let i=1;i<=num;i++){
        for(let j=2;j<=Math.floor(num/2);j++){
            if(isPrime(i)){
                console.log(i);
            }
        }
    }
}

// console.log(nPrimes(num));


// perfectnum

// const perfectnum= (num)=>{
//     let newNum=0;
//     let temp = num;

//     while(temp>0){
//         newNum+=(temp%10)**2;
//         temp = Math.floor(temp/10);
//     }
//     return newNum==num?true:false;
// }

const perfectnum= (temp)=>{
    let newNum=0;
    for(let i=1;i<=Math.floor(temp/2);i++){
        if(temp%i==0){
            newNum+=i;
        }
    }
    // return newNum==num?true:false;
    return newNum;
}
// console.log(num==perfectnum(num));


