//Q. reverse a string

// let str = "olleh";
// // let newstr = "";
// // for(let i=str.length-1;i>=0;i--){
// //     newstr+=str[i];
// // }
// // console.log(newstr);

// // or
// let reversed = str.split("").reverse().join("");
// console.log(reversed);  // Output: hello


// /*
//     "olleh".split("")  →  ["o", "l", "l", "e", "h"]
//     ["o", "l", "l", "e", "h"].reverse()  →  ["h", "e", "l", "l", "o"]
//     ["h", "e", "l", "l", "o"].join("")  →  "hello"
// */

// let reversed1 = [...str].reverse().join("");
// console.log(reversed1);  // Output: hello


// // Q count vovels in str

// let str = "hello i'm gaurav for jaipur";

// function cntVowels1(str){
//     let cnt=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a'||str[i]=='A'||str[i]=='e'||str[i]=='E'||str[i]=='i'||str[i]=='I'||str[i]=='o'||str[i]=='O'||str[i]=='u'||str[i]=='U'){
//             cnt++;
//         }
//     }
//     console.log(cnt);
// }
// // cntVowels1(str);
// // OR

// function cntVowels2(str){
//     let vowels = ['a','e','i','o','u','A','E','I','O','U'];
//     let cnt = 0;
//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])) cnt++;
//     }
//     console.log(cnt);
// }

// // cntVowels2(str);


// //OR

// const cntVowels3 = str =>
//   [...str].filter(ch => "aeiouAEIOU".includes(ch)).length;

// // console.log(cntVowels3(str));

// /*
//    -- str = "Hello World"
//    -- [...str] = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
//    -- Vowels matched: "e", "o", "o"
//    -- Final count: 3
// */





//Q add hypan(-) in spaces

let para = "Hello World Our Code On Vs Code";
const arrHyphen = ()=>{
    let newPara="";
    for(let i=0;i<para.length;i++){
        if(para[i]===' '){
            newPara += '-';
        }else{
            newPara+=para[i];
        }
    }
    console.log(newPara);
}

// arrHyphen(para);

// OR
// let newPara1 = para.replace(/ /g,'-');
// console.log(newPara1); //Hello-World Our Code On Vs Code


// /*
//     string.replace(pattern, replacement)
    
//    -- / /g — Regular Expression (Regex)
//    -- / / is a regex pattern that matches a space character.
//    -- The g flag stands for global, which means:
//    -- Replace all spaces, not just the first one.
    
//    para.replace(' ', '-') // only replaces the first space

//    para.replace(/ /g, '-') // replaces all spaces
// */

// ///OR
// let newPara2 = para.replace(/ /,'-'); 
// console.log(newPara2);  //Hello-World Our Code On Vs Code


// Q capitlize the all the words of first charector

let para1 = "hello world our code on vs code";
const firstChraCapital = ()=>{
    let newPara="";
    for(let i=0;i<para.length;i++){
        if(i==0 || para1[i-1]===' '){
            newPara+=para1[i].toUpperCase();
            
        }else{
            newPara+=para1[i];
        }
    }
    console.log(newPara);
}
// firstChraCapital(para1);

// OR

let capitlized = para1
    .split(' ')                             // Splits the sentence into words using space as the separator
    .map(word=>                             // For each word:
        word.charAt(0).toUpperCase()+       // Capitalize the first character
        word.slice(1)                       // Add the rest of the word unchanged
    )       
    .join(' ');                             // Joins the capitalized words back with spaces

console.log(capitlized);

/*
    para1.split(' ') ->> "hello world" → ["hello", "world"]
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) ->> "hello" → "H" + "ello" → "Hello"
    .join(' ') - >> Joins the array of capitalized words back into a single string with spaces.

*/

