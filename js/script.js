alert("THIS IS CONFIRMED!!!");

// Conditionals - IF , ELSE IF, ELSE
// Logical Operators - && (AND) , || (OR), !(NOT)
// NESTED IF-ELSE, NESTING
// Truthy and falsy values 

let day = 3;
let age = 15;

// if (age <= 30console.log("50 && age>16){
//     % DISCOUNT FOR U ....");
// }

// else if(age<=16){
    
//     console.log("HURRAYY!!!! FREE SESSIONS FOR YOU....");
// }

// else{
//     console.log("SAD!!!! U MUST PAY....");
// }

// switch(day) {
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY");
//         break;
//     case 3:
//         console.log("WEDNESDAY");
//         break;
//     case 4:
//         console.log("THURSDAY");
//         break;
//     case 5:
//         console.log("FRIDAY");
//         break;
//     case 6:
//         console.log("SATURDAY");
//     case 7:
//         console.log("SUNDAY");
//         break;
// }

// Ternary Operator
// COND ? EXP_IF_TRUE : EXP_IF_FALSE;
// age<=16?console.log("Hurray!!!"):console.log("SAD!!!");


// ARRAYS
// Ordered Collection of data(Data Structure)

let myFirstArray = [];

let evenNumbers = [0,2,4,6,8,10];

let myFrnds = ["Mak", "Mic","Alan"];

let myCollection = [5,"MJCET",15.65,null,NaN,true];

myCollection[3] = "ECE"; 

let array1 = [1,2,3];
let array2 = [4,5,6];

// 1. PUSH - Adds the new element at the end

// 2. POP - Removes an element which is at the end of an array

// 3. SHIFT - removes from the start

// 4. UNSHIFT - add to start

// 1. Concat - 
// let twoArrays = array1.concat(array2);
// console.log(twoArrays);

// 2. includes() - Determines whether given argument is there in an array or not

// console.log(myCollection.includes(1));

// 3. indexOf() 
// console.log(myCollection.indexOf("A"));

// 4. Join - Converts ur Array into a string
// console.log(myCollection.join("-"));

// 5. Reverse
// console.log(myCollection.reverse());

// 6. slice 

// console.log(myCollection.slice(2,4));

// 7. splice
    // insert
    // console.log(myCollection.splice(1,0,"CSE","ECE","IT","EEE"));
    // delete
    // console.log(myCollection.splice(1,3));
    // Replace
    // console.log(myCollection.splice(1,2,"SUES","HELLO"));

//  Day - 20 
// 1. Sort()
// 2. Reference Type
// 3. const with arrays
// 4. Nested Arrays (Multi-dimensional)
// 5. Objects, Objects + Arrays.


let departments = ["CSE","ECE","IT","EEE","MECH","EIE","AID"];
const num = [1,2,3,4,5,6];

// console.log(num.sort());

// let numCopy = num; 
// num.pop();
// console.log(num);
// console.log(numCopy);

// 2. Reference Types

    // Value Types
    // let nameFrnd = "Akheel";
    // let copyCat = nameFrnd;

    // nameFrnd = "Raheem";

    // console.log(copyCat);
    // console.log(nameFrnd);

// 3. Const with Arrays 

const rollNos = [96,105,28,70,71,63,64];

rollNos.push(73);

// console.log(rollNos);

// Nested Arrays

// const Collection = [
//     [1,2,3,["Akheel","Raheem"]],
//     [6,7,8,9,10],
//     [11,12,13,14,15],
//     [16,17,18,19,20]
// ]

// console.log(Collection);


// OBJECTS - Data Structure; Collection of data based upon key-value pairs



// Day - 22
//1. Arrays + Objects
//2. Object Reference Types
//3. ArrayObject Equality
//4. Loops 
//5. For Loops
//6. For Loop with Data Structures

const student = {
    firstName : 'akheel',
    lastName  : 'ali',
    strengths : ['Listening skills','Programming'],
    exams     : {
        classInternals : 20,
        finals   : 9.0
    } 
}

const data = [
    {
        userName : "David",
        password : "******",
        time     : "2:00",
        marks    :  45
    },
    {
        userName : "Daniel",
        password : "12345678",
        time     : "3:00",
        marks    :  55
    },
    {
        userName : "Arjun",
        password : "87654321",
        time     : "4:00",
        marks    :  95
    },
    {
        userName : "Sachin",
        password : "4568219",
        time     : "5:00",
        marks    :  34
    },
    {
        userName : "David",
        password : "******",
        time     : "2:00",
        marks    :  68
    }, 
];

// const array_1 = [1,2,3];
// const array_2 = [1,2,3];

// const array_3 = array_1;

const onlyMarks = []

//  Loops - these are nothing but repeatation of code
// For Loop - Counter Controlled loop 
    // for([init];[condition];[inc/dec] ) {

    // }
// while loop
// For .... of loop
// For .... in loop
// let sum = 0;
// for(let i = 0; i<data.length;i++){
//     onlyMarks.push(data[i].marks);
//     sum += data[i].marks;
    
// }

// Nested Loops

// for(let j = 0; j<=10;j++){
//     for(let k = 0; k<=10; k++){
//         console.log(j,k);
//     }
// }



// While loop
// let z = 0;
// while(z<=5){
//     console.log(z);
//     z++; 
// }

// Break 

// let z = 0;
// while(true){
//     if(z===5){
//         break;
//     }
//     console.log(z);
//     z++;
// }

// For ... of
// let array_1 = [12,15,67,8,9,70,88,71];
// for(let element of array_1){
//     console.log(element);
// }

const fitbitData = {
    totalSteps:  351115,
    totalMiles: 45,
    avgcalBurn: 655,
    message: "Never Give up",
}

// for(let prop of Object.keys(fitbitData)){
//     console.log(prop , fitbitData[prop]);
// }


// for ... in 

// for(let elm in fitbitData){
//     console.log(fitbitData[elm]);
// }

// Functions: Reusable procedures

let arr = [12,14,15,16,78,90];

function add(){
    for(let i = 0;i <= 5; i++){
        console.log(i)
    }
}

// Arguments in Functions

function addElements(a,b){
    let sum = 0;
    for(let elements of a){
        sum += elements;
    }
    return b*sum;
}

// addElements(arr, 2);

// Return - keyword

let product = addElements(arr,2);


// 1 Create a Function which will validate the password , username

// validate(password, username)
//  1. Greter than 8 charcters
//  2. there should not be username present in password


// I SCOPE - Scope of acessing variable - "visibility"
// 1. Function Scope 
// 2. Block Scope
// 3. Lexical Scope

// II Functions Expressions

// III Higher Order Functions

// IV Callbacks

// Hoisting

// Array Callback Methods (forEach , Map)

// Arrow Function

function hello(){
    let msg = "I am an idiot";
    console.log(msg);
}

//  Block Scope - 

// {
//     var myCollegeName = "Muffakham Jah college of engg. and tech";
// }

// console.log(myCollegeName);

// for(let i = 0; i<=3;i++){
//     console.log(i);
// }


function outer(){
    function inner(){
        let college = "Mjcet";
    }
    inner()
    console.log(college.toUpperCase());
}


// Function Expressions - another approach to create Functions

const square = function (x) {
    return x*x;
}

console.log(square(3))

// Higher Order Functions:

// Functions that operate on / with other function
// return Functions and they functions as arguments

function greet(){
    console.log("HELLO!, WELCOME");
}

// function callThrice(func){
//     func();
//     func();
//     func();
// }

// callThrice(greet);

function test(a){
    return function sqr(a){
        return a*a;
    }
}

// Callbacks Functions

// setTimeout(greet, 5000);

// Hoisting 
// console.log(random);
// let random = "Google";


// Array Call Back methods
// 1. forEach 
// 2. map
// Accepts a callback function , calls the function once per element in the array
const a1 = [1,2,3,4,5,6,7,8,9,10];

a1.forEach( function (n){
    console.log(n*n);
    // 1 4 9 16 25 .....
})

const doubles = a1.map(function (n){
    return n*2;
})

console.log(doubles);



// Arrow Function

const expo = (x) => {
    return x**x
}

console.log(expo(2));


// DOM , DOM Manipulation , Getting started with bootstrap

// Selectors 
// getElementById()
// getElementsByTagNames() -> HTMLCollection
// getElementsByClassName() -> HTMLCollection
// querySelector('.className') -> First Occurence
// querySelectorAll() -> Grabs All Occurences

// Manipulation
// innerText
// textContent
// innerHTML
// value
// src
// attributes
// placeholders
// style


