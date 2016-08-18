"use strict";


//  rest parameter

var showCategories = function(productId, ...categories) {
    //console.log(categories instanceof Array);
    //console.log(categories);
    //console.log(arguments.length);
}

//showCategories(123, "search", "advertising");
//showCategories(123);

//------------------------------------------


// spread parameter


// var prices = [10, 20, 30];
// //var maxPrice = Math.max(prices[0],prices[1],prices[2]);
// var maxPrice = Math.max(...prices);
// console.log(maxPrice);


//------------------------------------------

var prices = [12, 20, 18];
var newPrices = [...prices, 5, 10, ...prices];

//-----------------------------------------



var maxCode = Math.max(..."34235469");
console.log(maxCode);


var codeArray = ["A", "B", ..."CDE", "F"];


//-----------------------------------------