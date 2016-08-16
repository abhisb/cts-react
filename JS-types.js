//console.log('Welcome');


// data types/structures
//----------------------------

/*

    a. simple / primitives

      a. string
      b. number
      c. boolean
      d. null
      e. undefined

      f. symbol  ( from ES6 )


    b. complex / objects


*/

//--------------------------------------------------

//  a. string
var name = "Nag";
var selection = 'a';

//--------------------------------------------------


// number
var count = 12;
var cost = 12.12;

//--------------------------------------------------

// boolean
var found = true;

//--------------------------------------------------

/*

imp-note  : 'falsy ' values in JS lang
 
 -->false,0,"",null,undefined,NaN

 ref : https://dorey.github.io/JavaScript-Equality-Table/ 

*/

//--------------------------------------------------

// undefined
var v;

//--------------------------------------------------

// null

var person = null;

//--------------------------------------------------


// complex type ( objects )
//--------------------------


// object --> collection of key:value pair of any entity

/*

  how to create objects in JS lang ?

  syntax:  ( ES-5 )  ( no class )

  var ref=new ConstructorFunction()

  ConstructorFunction:-

  e.g

     Object
     Array
     etc...

*/

var person = new Object();
person.name = 'Nag'; // string
person.age = 32;
person.doWork = function() {
    console.log('teaching JS');
};

delete person.age;


//--------------------------------------------------


// Literal-style objects

/*

    a. Object
    b. Array
    c. RegExp
    d. Function

*/

//--------------------------------------------------


// a. Object

var person = new Object(); // creates obj's wrapper'
person.name = 'Nag';
person.age = 32;
person.doWork = function() {
    console.log('teaching JS');
};


// Literal-style  ( compact-syntax to create config objects)

var person = {
    name: 'Nag',
    age: 32,
    doWork: function() {
        console.log('teaching JS');
    }
};


//--------------------------------------------------


// Array

var colors = new Array();
colors.push('red');
colors.push('green');
colors[2] = 'blue';

// Literal-style

var colors = ["red", "green", 'blue'];

//--------------------------------------------------


// RegExp

// ssn - 313-34-3435

//var ssnPattern = new RegExp('\\d{3}-\\d{2}-\\d{4}');

// Literal-style

var ssnPattern = /\d{3}-\d{2}-\d{4}/;


//--------------------------------------------------

// Function

/*
    Every function in JS-lang is an 'object'
*/

//var add=new Function('n1','n2','var result=n1+n2;return result;');

// Literal-style

// function add(n1, n2) {
//     var result = n1 + n2;
//     return result;
// }


// function f() {

// }
// f.prop = 123;
// f.m = function() {
//     console.log('hello....');
// }

//------------------------------------------------------------------


//  how to access js-obj's properties

/*

   2-ways

   way-1  : ' . '  notation
   way-2  : ' []'  notation

*/

// var person = {
//     name: 'Nag',
//     'full-name': 'Nagabhushanam N'
// };

// console.log(person.name);
// //console.log(person['name']);

// // console.log(person.full - name);  // NAN
// console.log(person['full-name']);


// var prop = 'name';
// console.log(person[prop]);