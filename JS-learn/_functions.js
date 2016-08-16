"use strict";

/*


 -->function : one execution context
 -->every function is an object


2 ways to create function objects:-

a. function declaration ( Named functions )

   -->always hoisted with function-obj in that context

   -->to create function-obj at context-creation phase

b. function expression

    --> able to invoke after expression.

    --> to create function-obj at context-execution phase
        based on input values or conditions.

    --> always 'anonymous functions' for function-expression.     


    


*/

//-----------------------------------------------------


// function declaration:

// console.log(add(12, 13));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12, 13));

//-----------------------------------------------------

// function expression:

// console.log(add(12, 13));  // Error

var add = function(n1, n2) {
    return n1 + n2;
};

// console.log(add(12, 13));

// ---------------------------------------------------


// functions as values

// function sayHello() {
//     console.log('Hello..');
// }

// var sayHi = sayHello;
// sayHi();

// ---------------------------------------------------

// functions as arguments

// function greet(f) {
//     if (typeof f === 'function') {
//         f();
//         return;
//     }
//     console.log('Hello..');
// }

// greet();
// greet(function() { console.log('Ola...') });

//e.g

var nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
nums.sort();
nums.sort(function(a, b) {
    return a - b;
});

// ---------------------------------------------------

// functions as return values

function teach() {

    console.log('teaching....');

    function learn() {
        console.log('learning....');
    }

    //learn();

    return learn;
}

// var learnFunc = teach();
// learnFunc();
// learnFunc();

// ---------------------------------------------------

/*
    imp note : every function-context has an implicit object to hold arguents

    'argumants'

    is an array-like object

*/

// e.g

// function reflect(a, b, c) {
//     console.dir(arguments);
//     return arguments[1];
// }

// console.log(reflect(12, 13, 14, 15));


//----------------------------------------------------


// e.g   sum of n numbers


function sum() {
    var i = 0,
        len = arguments.length,
        result = 0;

    while (i < len) {
        result += arguments[i];
        i++;
    }
    return result;
}


//----------------------------------------------------


// variables scope

/*

    a. global-scope
    b. function scope

    c. block-scope  ( from es6 )

*/


var a = 12; // globa-var  

function f() {

    var a = 13; // function-scope

    {
        let i = 100; // hoisted
        console.log(i);
    }

    console.log(i);

}

//f();

//----------------------------------------------------

// any variable without 'var' keyword , will become an implicit-global

function f1() {
    var k = 200;
}

f1();

// console.log(k);