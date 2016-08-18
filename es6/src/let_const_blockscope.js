"use strict";

// let keyword

// let productId = 12;

// {
//     let productid = 2000; // block-scope var
// }

// console.log(productId);

//--------------------------------------------------

// {
//     let productId = 12;
// }

// console.log(productId);

//--------------------------------------------------

// function updateproductId() {
//     productId = 12;
// }

// let productId = null;
// updateproductId();
// console.log(productId);

//---------------------------------------------------

// let productId = 12;
// for (let productId = 0; productId < 10; productId++) {

// }
// console.log(productId);

//---------------------------------------------------


// let updateFunctions = [];
// for (let i = 0; i < 2; i++){
//     updateFunctions.push(function () { return i});
// }

// console.log(updateFunctions[0]());

//---------------------------------------------------


// const keyword

// ES-5

// var PI = 3.14;
// Object.defineProperty(window, 'PI', {writable:false});

// const PI = 3.14;
// console.log(PI);


//---------------------------------------------------

// const MARKUP_PCT;
// console.log(MARKUP_PCT);


//---------------------------------------------------

// const MARKUP_PCT = 100;
// MARKUP_PCT = 10;
// console.log(MARKUP_PCT);


//---------------------------------------------------

const MARKUP_PCT = 100;
if (MARKUP_PCT > 0) {
    const MARKUP_PCT = 10;   // bloc-scoped var
}
console.log(MARKUP_PCT);

//---------------------------------------------------