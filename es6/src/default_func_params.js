"use strict";


var getProduct = function(productId = 1000, type = "software") {

    // if (!productId) {
    //     productId = 1000;
    // }

    // productId = productId || 1000;

    console.log(productId + " " + type);
}

//getProduct(undefined, 'hardware');

//--------------------------------------------------

var baseTax = 0.07;
var getTotal = function(price, tax = price * baseTax) {
    console.log(price + tax);
}

//getTotal(5.0);

//------------------------------------------------

var generateBaseTax = () => 0.07;
var getTotal = function(price, tax = price * generateBaseTax()) {
    console.log(price + tax);
}

//getTotal(5.0);


//------------------------------------------------


var getTotal = function(price = adjustment, adjustment = 1.00) {
    console.log(price + adjustment);
}

getTotal(5.0);