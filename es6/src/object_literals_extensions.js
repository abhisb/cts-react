"use strict"


var price = 5.99,
    quantity = 10;


// var productView = {
//     price,
//     quantity,
//     calculateValue() {
//         return this.price * this.quantity
//     }
// };

// console.log(productView.calculateValue());


//-----------------------------------------------


// var productView = {
//     price,
//     quantity,
//     "calculate value" () {
//         return this.price * this.quantity
//     }
// };

// console.log(productView['calculate value']());


//----------------------------------------------

// var field = "dynamicField";
// var method = "doIt"
// var price = 5.99;

// // var productView = {
// //     [field]: price
// // };

// var productView = {
//     [field + '-001']: price,
//     [method + "-001"]() {
//         console.log("in a method");
//     }
// };



// console.log(productView);
// productView['doIt-001']();


//----------------------------------------------



var ident = "productId";

var productView = {
    get [ident]() {
        return true },
    set [ident]() {}
};

//-----------------------------------------------