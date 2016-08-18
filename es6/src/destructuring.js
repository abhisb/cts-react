"use strict";

// let salary = [32000, 50000, 75000];

// let salary = [32000, 50000];

// let [low, average, high] = salary;

// console.log(low);
// console.log(average);
// console.log(high);

//-------------------------------

// let salary = [32000, 50000, 75000];

// let [low, ...remining] = salary;
// console.log(remining);

//----------------------------------


// let salary = [32000, 50000];

// let [low, average, high = 88000] = salary;
// console.log(high);

//-----------------------------------


// let salary = [32000, 50000,[88000,99000]];
// let [low,average,[actualLow,actualHigh]]=salary;

// console.log(actualLow);


//------------------------------------

// let salary = [32000, 50000];

// let low, average, high;

// [low, average, high = 88000] = salary;
// console.log(high);

//----------------------------------

// function reviewSalary([low,average],high=88000){
// console.log(average);
// }

// reviewSalary([32000,50000]);


//------------------------------------



// let salary = {
//     low: 32000,
//     average: 5000,
//     high: 75000
// };


// let { low, average, high } = salary;
// console.log(low);

// let { low: newLow, average: newAverage, high: newHigh } = salary;
// console.log(newLow);


// let newLow, newAverage, newHigh;
// ({ low: newLow, average: newAverage, high: newHigh } = salary);


// let [maxCode, minCode] = "AZ";
// console.log(`min:${minCode}  max: ${maxCode}`);


//-------------------------------


//let [high,low] =[,];

//-------------------------------

// illegal

// let [high, low] = undefined;
// let [high, low] = null;


//-------------------------------

// try {
//     let [high, low] = null;
// } catch (e) {
//     console.log(e.name);
// }

//-------------------------------

for (let [a, b] of[[5, 10]]) {
    console.log('loop...');
    console.log(a);
    console.log(b);
}